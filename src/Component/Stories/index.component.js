import React from 'react';
import VerticalCard from "../Cards/Vertical/index.component";
import {Link} from "react-router-dom";
import Pagination from './../Pagination/index.component';

function Story(props) {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };
    let pageContent = props.storyDocs["docs"].map(article => <Link key={article["_id"]} style={linkStyle} to={
            {
                pathname: "post",
                state: {
                    article: article
                }
            }}>
            <VerticalCard key={article["_id"]} article={article} ready={true}/>
        </Link>
    );

    let paginator;
    if (props.storyDocs["hasPrevPage"] || props.storyDocs["hasNextPage"]) {
        //todo : Change this to get all story information.
        paginator = <Pagination pathname="/getAll" name="All Stories" endpoint="/getAll"
                                totalPages={props.storyDocs["totalPages"]} page={props.storyDocs["page"]}
                                hasPrevPage={props.storyDocs["hasPrevPage"]}
                                hasNextPage={props.storyDocs["hasNextPage"]}/>
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