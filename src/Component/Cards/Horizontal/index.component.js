import Skeleton from 'react-loading-skeleton';

function formatImageUrl(imageString) {
    if (imageString !== undefined) {
        return imageString;
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC";
}

function HorizontalCards(props) {
    let imageView;

    if (props.article.images[0] && (props.type !== 'loader')) {
        imageView = <img src={formatImageUrl(props.article.images[0])}
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
            {/*begin post */}
            <div className="card">
                <div className="row">
                    <div className="col-md-5 wrapthumbnail">
                        <div className="thumbnail">
                            {imageView}
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card-block">
                            <h2 className="card-title">
                                {props.article.header || <Skeleton/>}
                            </h2>
                            <h4 className="card-text">
                                {props.article.subHeader || <Skeleton/>}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            {/*end post */}
        </>
    );
}

export default HorizontalCards;