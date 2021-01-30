function VerticalCard() {
    return (
        <>
            {/*begin post*/}
            <div className="card">
                <a href="post.html">
                    <img className="img-fluid"
                         src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80"
                         alt=""/>
                </a>
                <div className="card-block">
                    <h2 className="card-title">
                        <a href="/post">10 Things you should know about choosing your house</a>
                    </h2>
                    <h4 className="card-text">
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </h4>

                </div>
            </div>
            {/*end post*/}
        </>
    );
}

export default VerticalCard