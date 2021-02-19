import React from 'react';
import VerticalCard from "../Cards/Vertical/index.component";
import {Link} from "react-router-dom";
import Pagination from './../Pagination/index.component';

function Story(props) {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };
    let pageContent = props.storyDocs.map(article => <Link key={article["_id"]} style={linkStyle} to={
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

    let docs = {
        images: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"]
    }
    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.name}</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {(props.isReady) ? pageContent : Array(24).fill().map((element, index) => <VerticalCard key={index}
                                                                                                            article={docs}
                                                                                                            ready={false}/>)}
                </div>
                {paginator}
            </section>
        </>
    );
}

export default Story;