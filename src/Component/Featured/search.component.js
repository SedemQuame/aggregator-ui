// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import HorizontalCards from "../Cards/Horizontal/index.component";
import './../../index.css';
import {Link} from "react-router-dom";
import Empty from "../Empty/index.component";
import {linkStyle, scrollToTop} from "../../utils/index.component";

function Featured(props) {
    // display an empty pane when page is still loading
    if (props.featuredDocs.length < 1) return <Empty hasBanner={true} homePage={true} category={"Search"}/>;

    let pageContent =
        <section className="featured-posts">
            <div className="section-title">
                <h2><span>{props.name}</span></h2>
            </div>
            <div className="row list-featured-tag">{props.featuredDocs.map((article) => <Link
                onClick={scrollToTop}
                className="col-md-6 col-xxl-4" key={article["_id"]} style={linkStyle}
                to={{pathname: `article/${article["_id"]}`, state: {article: article}}}><HorizontalCards
                article={article} isReady={true}/></Link>)}</div>
        </section>;

    return (props.isReady) ? pageContent : <Empty hasBanner={true} homePage={true} category={"Featured"}/>;
}

export default Featured;