import React, {useState} from 'react';
import './../Cards/StoryComponents.css';
import Youtube from "../Youtube/index.component";

let metas = require("../../assets/meta.js");

function Radio(props) {
    const [src, setSrc] = useState("https://player.streamguys.com/atunwa/mgl/joyfm/");
    const imgStyle = {
        height: "100px",
        width: "60%",
        margin: "0 20%"
    }

    let changeRadioState = (event) => {
        setSrc(event.target.dataset.src)
    }

    let radioBg = {
        backgroundColor: "#f3f3f3",
        minHeight: "60px",
        padding: "5px"
    }

    let page = metas["default"].map(meta => <div className="col-6 col-md-4 col-lg-3" onClick={changeRadioState}
                                                 data-src={meta["src"]}>
        <div className="card vertical-card-radio" onClick={changeRadioState}>
            <div className="card-top">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" data-src={meta["src"]}>
                    <img
                        src={`${meta["radio-logo"]}`}
                        style={imgStyle}
                        className="card-img-top"
                        alt="radio-station"
                        onClick={changeRadioState} data-src={meta["src"]}
                    />
                </div>
            </div>
            <div className="card-bottom">
                <div className="card-body text-center" onClick={changeRadioState} data-src={meta["src"]}>
                    <header>
                        <h3 className="vertical-card-title">
                            {`${meta["radio-station"]}`}
                        </h3>
                    </header>
                    <footer>
                        <p className="text-muted">{meta["radio-frequency"]}</p>
                    </footer>
                </div>
            </div>
            <hr style={{color: "#bdc3c7", opacity: 0.3}} className="d-block d-sm-none"/>
        </div>
    </div>);

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>Live Radio</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-4" style={radioBg}>
                        <Youtube src={src}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">{page}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Radio;