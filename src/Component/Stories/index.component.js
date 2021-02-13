import React, {useEffect, useState} from 'react'
import VerticalCard from "../Cards/Vertical/index.component";
import Loader from "./../Loader/index.component";
import {Link} from "react-router-dom";
import Pagination from './../Pagination/index.component';

function Story(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [load, setLoad] = useState();

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatrserver.herokuapp.com${props.endpoint}?limit=100`;
        try {
            fetch(`${CORS}${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);

            setLoad(true)
        } catch {
            return null
        }
    }, [props.endpoint]);
    if (error) return (<Loader/>)
    if (!data) return null;

    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };

    let pageContent;
    if (load) {
        pageContent = <p>{JSON.stringify(data["articles"])}</p>;
        pageContent = data["articles"]["docs"].map(article => <Link style={linkStyle} to={
                {
                    pathname: "post",
                    state: {
                        article: article
                    }
                }}>
                <VerticalCard key={article["_id"]} article={article}/>
            </Link>
        )
    } else {
        pageContent = <Loader/>
    }

    let paginator;
    if (data["articles"]["hasPrevPage"] || data["articles"]["hasNextPage"]) {
        paginator = <Pagination pathname="/getAll" name="All Stories" endpoint="/getAll" totalPages={data["articles"]["totalPages"]} page={data["articles"]["page"]}
                                hasPrevPage={data["articles"]["hasPrevPage"]}
                                hasNextPage={data["articles"]["hasNextPage"]}/>
    }

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.name}</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {pageContent}
                </div>
                {paginator}
            </section>
        </>
    );
}

export default Story;