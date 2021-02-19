import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
function formatImageUrl(imageString) {
    if (imageString !== undefined) {
        return imageString;
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC";
}

function HorizontalCards(props) {
    let imageView;
    if (props.article.image) {
        imageView = <img src={formatImageUrl(props.article.image)}
                         className="card-img-top"
                         style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
                         alt="" loading="lazy"/>
    }
    return (
        <>
            <div className="card">
                <div className="row">
                    <div className="col-md-5 wrapthumbnail">
                        <ReactPlaceholder showLoadingAnimation={true} type='rect' ready={props.isReady} color='#E0E0E0'>
                            <div className="img-container">{imageView}</div>
                        </ReactPlaceholder>
                    </div>
                    <div className="col-md-7">
                        <div className="card-block">
                            <ReactPlaceholder showLoadingAnimation={true} type='text' ready={props.isReady} rows={2} color='#E0E0E0'>
                                <h2 className="card-title">{props.article.title}</h2>
                                <h4 className="card-text">{props.article.paragraphs[0]}</h4>
                            </ReactPlaceholder>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HorizontalCards;