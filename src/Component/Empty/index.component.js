import React from "react";
import Banner from "../Banner/index.component";
import VerticalCard from './../Cards/Vertical/empty.component';
import HorizontalCard from './../Cards/Horizontal/empty.component';

function Empty(props) {
    let listOfEmptyHorizontalCards = Array(8).fill(null).map((u, index) => <HorizontalCard key={index}/>);
    let listOfEmptyVerticalCards = Array(50).fill(null).map((u, index) => <VerticalCard key={index}/>);

    return (
        <>
            {props.hasBanner ? <Banner/> : null}
            {props.homePage ? <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">{listOfEmptyHorizontalCards}</div>
            </section> : null}
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.category}</span></h2>
                </div>
                <div
                    className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">{listOfEmptyVerticalCards}</div>
            </section>
        </>
    );
}

export default Empty;