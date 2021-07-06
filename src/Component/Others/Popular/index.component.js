import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import HorizontalCards from "../../Cards/Horizontal/index.component";
import {linkStyle, scrollToTop} from "../../../utils/index.component";

function Popular() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch("https://aggregatrserver.herokuapp.com/popular")
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, []);

    if (error) return null;

    if (!data) return null;

    if (ready) {
        let pageContent =
            <section className="featured-posts">
                <div className="row list-featured-tag">{data["articles"]["docs"].map((article) => <Link
                    onClick={scrollToTop}
                    className="col-12 col-md-6 col-lg-6 col-xl-4" key={article["_id"]} style={linkStyle}
                    to={{pathname: `/article/${article["_id"]}`, state: {article: article}}}><HorizontalCards
                    article={article} isReady={true}/></Link>)}</div>
            </section>;
        return (
            <>
                {/*<hr className="d-block d-md-none d-lg-none d-xl-none "/>*/}
                <section className="featured-posts">
                    <div className="section-title">
                        <h2 className="mdc-typography-styles-headline5"><span>Popular</span></h2>
                    </div>
                    <div className="row list-featured-tag">
                        {pageContent}
                    </div>
                </section>
            </>
        );
    } else {
        return null;
    }
}

export default Popular;
