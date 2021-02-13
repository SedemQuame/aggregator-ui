import React from 'react';
import './../StoryComponents.css';
import Skeleton from 'react-loading-skeleton';

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
    }else{
        let skeletonStyle = {
          width: 1000,
          height: 1000
        };
        imageView = <Skeleton style={skeletonStyle}/>
    }

    return (
        <>
            {/*begin post*/}
            <div className="card">
                <div className="img-container">{imageView}</div>
                <div className="card-block">
                    <h3 className="card-title article-header">
                        {props.article.title || <Skeleton/>}
                    </h3>
                </div>
            </div>
            {/*end post*/}
        </>
    );
}