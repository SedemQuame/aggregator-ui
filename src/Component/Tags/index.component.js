export default (props) => {
    return (
        <div className="after-post-tags">
            <ul className="tags">
                <li><a href="#">{props.category || "Viral News"}</a></li>
            </ul>
        </div>
    );
}