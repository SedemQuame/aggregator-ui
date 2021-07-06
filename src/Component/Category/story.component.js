import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import Empty from "../Empty/index.component";
import Pagination from "../Pagination/index.component";
import VerticalCard from "../Cards/Vertical/index.component";
import Error from "../Error/error.component";
import {linkStyle, scrollToTop} from "../../utils/index.component";

function Business(props) {
    let {category} = useParams();

    const [categoryState] = useState(category);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch(`https://aggregatrserver.herokuapp.com/category/${categoryState}?limit=90`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [categoryState]);

    //display a standard screen for when something goes wrong
    if (error) return <Error/>;

    // display an empty pane when page is still loading
    if (!data) return <Empty hasBanner={false} homePage={false} category="Business"/>;

    let pageContent = data["articles"]["docs"].map(article => <Link onClick={scrollToTop}
                                                                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                                                                    key={article["_id"]} style={linkStyle} to={{
        pathname: `/article/${article["_id"]}`,
        state: {article: article}
    }}> <VerticalCard key={article["_id"]} article={article} ready={true}/></Link>);

    if (ready) {
        return (
            (pageContent.length > 0) ?
                <section className="recent-posts">
                    <div className="section-title">
                        <h2><span>{props.title || categoryState}</span></h2>
                    </div>
                    <div className="row">
                        {pageContent}
                    </div>

                    <Pagination endpoint={`https://aggregatrserver.herokuapp.com/category/${categoryState}?`}
                                hasPrevPage={data["articles"]["hasPrevPage"]} page={data["articles"]["page"]}
                                totalPages={data["articles"]["totalPages"]}
                                // onPaginatorClick={(endpoint) => {
                                //     fetch(endpoint)
                                //         .then(data => data.json())
                                //         .then(result => setData(result))
                                //         .catch(setError)
                                // }}
                    />
                </section> : null
        );
    }
}

export default Business;