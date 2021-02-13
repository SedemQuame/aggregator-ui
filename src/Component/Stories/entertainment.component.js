import React, {useEffect, useState} from 'react'
import VerticalCard from "../Cards/Vertical/index.component";
import {Link} from "react-router-dom";
import Pagination from './../Pagination/index.component';

function Story(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatrserver.herokuapp.com/get/category${props.location.state.endpoint}&limit=60`;
        try {
            fetch(`${CORS}${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);
        } catch {
            return null
        }
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return null;

    let paginator;
    if (data["articles"]["hasPrevPage"] || data["articles"]["hasNextPage"]) {
        paginator = <Pagination pathname="/entertainment" name="Entertainment" endpoint="/Entertainment"
                                totalPages={data["articles"]["totalPages"]} page={data["articles"]["page"]}
                                hasPrevPage={data["articles"]["hasPrevPage"]}
                                hasNextPage={data["articles"]["hasNextPage"]}/>
    }

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.location.state.name}</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {
                        data["articles"]["docs"].map(article => <Link to={
                                {
                                    pathname: "post",
                                    state: {
                                        article: article
                                    }
                                }}>
                                <VerticalCard key={article["_id"]} article={article}/>
                            </Link>
                        )
                    }
                </div>
                {paginator}
            </section>
        </>
    );
}

export default Story;