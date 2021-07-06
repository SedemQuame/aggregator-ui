import React from "react";
import moment from "moment";
import '../../../index.css';
import './../StoryComponents.css';


function formatImageUrl(imageString) {
    if (imageString !== undefined) return imageString;
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

function HorizontalCards(props) {
    let imageView;
    if (props.article.image) {
        imageView = <img src={formatImageUrl(props.article.image)}
                         className="horizontal-card-img"
                         style={{
                             borderTopLeftRadius: 0,
                             borderTopRightRadius: 0,
                             minHeight: "90px",
                             maxHeight: "110px",
                             backgroundColor: "#E0E0E0"
                         }}
                         alt="" loading="lazy"/>
    }
    return (
        <>
            <div className="card horizontal-card">
                <div className="row">
                    <div className="col-4 card-left">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            {imageView}
                            <a href="#!">
                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}/>
                            </a>
                        </div>
                    </div>

                    <div className="col-8 horizontal-card-right">
                        <header>
                            <h3 className="horizontal-card-title" style={{width: "95%"}}>
                                {previewText(props.article.title, props.article.paragraphs[0])}
                            </h3>
                        </header>
                        <footer>
                            <p className="card-story-date">Published {moment(props.article.news_foldr_date_format).calendar()}</p>
                            <p className="card-story-author">by {props.article.source}</p>
                        </footer>
                    </div>
                </div>

            </div>
            {/*<hr style={{color: "#bdc3c7", opacity: 0.3}} className="d-block d-sm-none"/>*/}
        </>
    );
}

export default HorizontalCards;