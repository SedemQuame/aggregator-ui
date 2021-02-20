import "react-placeholder/lib/reactPlaceholder.css";

function formatImageUrl(imageString) {
    if (imageString !== undefined) return imageString;
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
                        <div className="img-container">{imageView}</div>
                    </div>
                    <div className="col-md-7">
                        <div className="card-block">
                            <h2 className="card-title">{previewText(props.article.title, props.article.paragraphs[0])}</h2>
                            <h4 className="card-text">{previewSubText(props.article.paragraphs[0])}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HorizontalCards;