import HorizontalCards from "../../Cards/Horizontal/index.component";

export default () => {
    return (
        <>
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">
                    {/*iterate through a bunch of Horizontal Cards*/}
                    {
                        Array(8).fill().map(element => <HorizontalCards/>)
                    }
                </div>
            </section>
        </>
    );
}