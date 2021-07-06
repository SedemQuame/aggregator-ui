import React from "react";
import VerticalCard from './../Cards/Vertical/empty.component';
import HorizontalCard from './../Cards/Horizontal/empty.component';

function Empty(props) {
    let listOfEmptyHorizontalCards = Array(12).fill(null).map((u, index) => <HorizontalCard key={index}/>);
    let listOfEmptyVerticalCards = Array(48).fill(null).map((u, index) => <VerticalCard key={index}/>);

    return (
        <>
            {props.homePage ?
                <section className="featured-posts">
                    <div className="section-title">
                        <h2><span>Top Headlines</span></h2>
                    </div>
                    <div className="row list-featured-tag">
                            {listOfEmptyHorizontalCards}
                    </div>
                </section> : null}
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{window.location.href.split("/").slice(-1)}</span></h2>
                </div>
                <div className="row">
                    {listOfEmptyVerticalCards}
                </div>
            </section>
        </>
    );
}

export default Empty;