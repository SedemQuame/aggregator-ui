import React from 'react';
import './../StoryComponents.css';
import "react-placeholder/lib/reactPlaceholder.css";
import moment from "moment";

function formatImageUrl(imageString) {
    if (imageString !== undefined) {
        return imageString;
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC";
}

let previewTextLength = 40;
function previewText(title, firstParagraph) {
    if (title) {
        if (title.length < previewTextLength) return title
        let lastSpaceIndex = title.substring(0, previewTextLength).lastIndexOf(" ");
        return `${title.substring(0, lastSpaceIndex)} ...`;
    } else {
        return previewSubText(firstParagraph);
    }
}

function previewSubText(paragraph) {
    if (paragraph) {
        let lastSpaceIndex = paragraph.substring(0, previewTextLength).lastIndexOf(" ");
        return `${paragraph.substring(0, lastSpaceIndex)} ...`;
    } else
        return "no description"
}

function VerticalCards(props) {
    let imageView;
    if (props.article.image && (props.type !== 'loader')) {
        imageView = <img src={formatImageUrl(props.article.image)}
                         className="vertical-card-img"
                         alt="" loading="lazy"/>

        // imageView = <div className="vertical-card-img" style={{backgroundImage: "url("+formatImageUrl(props.article.image)+")", backgroundSize: "cover"}}></div>
    }

    return (
        <>
            <div className="card vertical-card">
               <div className="card-top">
                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                       {imageView}
                       <a href="#!">
                           <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}/>
                       </a>
                   </div>
               </div>
                <div className="card-bottom">
                    <header>
                        <h3 className="vertical-card-title">
                            {previewText(props.article.title, props.article.paragraphs.filter(paragraph => (paragraph != null)).filter(paragraph => (paragraph !== ""))[0])}
                        </h3>
                    </header>
                    <footer>
                        <p className="card-story-date">Published {moment(props.article.news_foldr_date_format).calendar()}</p>
                        <p className="card-story-author">by {props.article.source}</p>
                    </footer>
                </div>
            </div>
            {/*<hr style={{color: "#bdc3c7", opacity: 0.3}} className="d-block d-sm-none"/>*/}
        </>
    );
}

export default VerticalCards;