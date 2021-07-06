import './carousel.css';

function Youtube(props) {
    return (
        <>
            <iframe className="d-block w-100 yt_carousel" src={props.src} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title={props.src} />
                    <hr/>
        </>
    );
}

export default Youtube;