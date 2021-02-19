import HorizontalCards from "../Cards/Horizontal/index.component";
import './../../index.css';
import {Link} from "react-router-dom";

function Featured(props) {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };
    let pageContent = props.featuredDocs.map((doc) => <Link key={doc["_id"]} style={linkStyle} to={
        {
            pathname: "post",
            state: {
                article: doc
            }
        }}><HorizontalCards article={doc} isReady={true}/>
    </Link>)
    return (
        <>
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">{pageContent}</div>
            </section>
        </>
    );
}

export default Featured;