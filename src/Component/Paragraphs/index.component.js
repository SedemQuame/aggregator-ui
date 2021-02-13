export default (props) => {
    return(
        <div className="article-post">
            <blockquote>
                {props.paragraphs[0]}
            </blockquote>
            {
                (props.paragraphs.slice(1, props.paragraphs.length)).map(paragraph => <p>{paragraph}</p>)
            }
        </div>
    );
}