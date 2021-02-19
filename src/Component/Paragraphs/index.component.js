function Paragraphs(props) {
    return (
        <div className="article-post">
            <blockquote>{props.paragraphs[0]}</blockquote>
            {(props.paragraphs.slice(1, props.paragraphs.length)).map((paragraph, index) => <p
                key={index}>{paragraph}</p>)}
        </div>
    );
}

export default Paragraphs;