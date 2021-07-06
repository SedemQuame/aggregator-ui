import React, {useEffect, useState} from 'react'
import {Link, useParams}  from "react-router-dom";
import VerticalCard from "../Cards/Vertical/index.component";
import EmptyCategory from "../Empty/emptyCategory.component";
import Error from "../Error/error.component";
import {linkStyle, scrollToTop} from "../../utils/index.component";

function Category(props) {

    let {linkTitle} = useParams();

    const [title] = useState(props.title || linkTitle)
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch(`https://aggregatrserver.herokuapp.com/category/${title}?limit=12`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [title]);

    //display a standard screen for when something goes wrong
    if (error) return <Error/>;

    // display an empty pane when page is still loading
    if (!data) return <EmptyCategory category={"Featured"}/>;
    let pageContent = data["articles"]["docs"].map(article => <Link onClick={scrollToTop} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={article["_id"]} style={linkStyle} to={{pathname: `article/${article["_id"]}`, state: {article: article}}}> <VerticalCard key={article["_id"]} article={article} ready={true}/></Link>);

    if(ready){
        return (
            (pageContent.length > 0) ?
                <section className="featured-posts">
                    <div className="section-title mdc-typography-styles-headline3">
                        <h2 className="mdc-typography-styles-headline5"><span>{title}</span></h2>
                    </div>
                    <div className="row list-featured-tag">
                        {pageContent}
                    </div>
                    <Link className=" float-end" to={`/articles/${title}`}>
                        See More
                    </Link>
                </section> : null
        );
    }
}

export default Category;