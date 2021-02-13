import HorizontalCards from "../Cards/Horizontal/index.component";
import './../../index.css';

function Featured() {

    let doc = {
        header: "Story name",
        subHeader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"]
    }
    return (
        <>
            {/*Begin Featured*/}
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>

                <div className="card-columns listfeaturedtag">
                    <HorizontalCards article={doc}/>
                    <HorizontalCards article={doc}/>
                    <HorizontalCards article={doc}/>
                    <HorizontalCards article={doc}/>
                </div>
            </section>
            {/*End Featured*/}
        </>
    );
}

export default Featured;