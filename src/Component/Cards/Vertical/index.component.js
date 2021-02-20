import React from 'react';
import './../StoryComponents.css';
// import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

function formatImageUrl(imageString) {
    if (imageString !== undefined) {
        return imageString;
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC";
}

function previewText(title, firstParagraph) {
    if (title) {
        if (title.length < 101) return title
        let lastSpaceIndex = title.substring(0, 100).lastIndexOf(" ");
        return `${title.substring(0, lastSpaceIndex)} ...`;
    } else {
        return previewSubText(firstParagraph);
    }
}

function previewSubText(paragraph) {
    if (paragraph) {
        let lastSpaceIndex = paragraph.substring(0, 130).lastIndexOf(" ");
        return `${paragraph.substring(0, lastSpaceIndex)} ...`;
    } else
        return "no description"
}

function VerticalCards(props) {
    let imageView;
    if (props.article.image && (props.type !== 'loader')) {
        imageView = <img src={formatImageUrl(props.article.image)}
                         className="card-img-top"
                         style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
                         alt="" loading="lazy"/>
    }

    return (
        <>
            <div className="card">
                <div className="img-container">
                    {imageView}
                </div>
                <div className="card-block">
                    <h3 className="card-title article-header">{previewText(props.article.title, props.article.paragraphs.filter(paragraph => (paragraph != null)).filter(paragraph => (paragraph !== ""))[0])}</h3>
                </div>
            </div>
        </>
    );
}

export default VerticalCards;