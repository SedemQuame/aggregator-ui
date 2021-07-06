import './carousel.css';
import Youtube from "./index.component";

function Carousel(props) {

    let videoArr = [
        "https://www.youtube.com/embed/C9_HXvO-gH8",
        "https://www.youtube.com/embed/cMDEH3Qy32Q",
        "https://www.youtube.com/embed/NQbsrsFFR7M",
        "https://www.youtube.com/embed/cJkAStIsLbk",
        "https://www.youtube.com/embed/swjF96Vj5YE",
        "https://www.youtube.com/embed/SlRZ6HMXEDY"
    ]
    let carousel = <div className="col-10 carousel-inner yt_carousel">
        {
            videoArr.map((src, index) => {
                if (index === 1) {
                    return (<div className="carousel-item active">
                        <Youtube src={src}/>
                    </div>)
                } else {
                    return (<div className="carousel-item">
                        <Youtube src={src}/>
                    </div>)
                }

            })
        }
    </div>

    return (
        <>
            <div id="carouselExampleControls" className="carousel slide row" data-ride="carousel">
                <div className="row">
                    <div className="col-1 yt_carousel_navigation">
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                    </div>
                    {carousel}
                    <div className="col-1 yt_carousel_navigation">
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <br/>
            </div>
            <hr/>
        </>
    )
}

export default Carousel;