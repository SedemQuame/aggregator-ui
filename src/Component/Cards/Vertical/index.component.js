import React from 'react';
import './../StoryComponents.css';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

function formatImageUrl(imageString) {
    if (imageString !== undefined) {
        return imageString;
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC";
}

export default (props) => {
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
                    {/*<ReactPlaceholder showLoadingAnimation={true} type='rect' ready={props.ready} color='#E0E0E0' style={{ width: 1000, height: 1000 }}>*/}
                        {imageView}
                    {/*</ReactPlaceholder>*/}
                </div>
                <div className="card-block">
                    {/*<ReactPlaceholder showLoadingAnimation={true} type='text' row={1} ready={props.ready} color='#E0E0E0'>*/}
                        <h3 className="card-title article-header">{props.article.title}</h3>
                    {/*</ReactPlaceholder>*/}
                </div>
            </div>
        </>
    );
}