// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import HorizontalCards from "../Cards/Horizontal/index.component";
import './../../index.css';
import {Link} from "react-router-dom";
import Empty from "../Empty/index.component";
import {linkStyle, scrollToTop} from "../../utils/index.component";

function Featured(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch("https://aggregatrserver.herokuapp.com/headlines?limit=12")
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, []);

    //display a standard screen for when something goes wrong
    if (error) return null;

    // display an empty pane when page is still loading
    if (!data) return <Empty hasBanner={true} homePage={true} category={"Featured"}/>;

    if (ready) {
        let pageContent =
            <section className="featured-posts">
                <div className="section-title mdc-typography-styles-headline3">
                    <h2><span>{props.name}</span></h2>
                </div>
                <div className="row list-featured-tag">{data["headlines"]["docs"].map((article) => <Link
                    onClick={scrollToTop}
                    className="col-12 col-md-6 col-lg-4" key={article["_id"]} style={linkStyle}
                    to={{pathname: `article/${article["_id"]}`, state: {article: article}}}><HorizontalCards
                    article={article} isReady={true}/></Link>)}</div>
            </section>;
        return (ready) ? pageContent : <Empty hasBanner={true} homePage={true} category={"Featured"}/>;
    }
}

export default Featured;