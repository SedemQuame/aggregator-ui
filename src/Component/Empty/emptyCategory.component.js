import React from "react";
import VerticalCard from './../Cards/Vertical/empty.component';

function EmptyCategory(props) {
    let listOfEmptyVerticalCards = Array(16).fill(null).map((u, index) => <VerticalCard key={index}/>);

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.category}</span></h2>
                </div>
                <div className="row">
                    {listOfEmptyVerticalCards}
                </div>
            </section>
        </>
    );
}

export default EmptyCategory;