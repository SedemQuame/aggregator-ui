function Social() {
    return (
        <>
            <div className="d-none d-md-block">
                <a className="btn btn-primary" target="_blank" rel="noreferrer"
                   style={{color: "#fff", backgroundColor: "#55acee", marginBottom: "16px", width: "100%"}}
                   href="https://twitter.com/newsfoldr_gh?s=11" role="button">
                    <i className="fab fa-twitter me-2"/>Twitter
                </a>
                <br/>
                <a className="btn btn-primary" target="_blank" rel="noreferrer"
                   style={{color: "#fff", backgroundColor: "#3b5998", marginBottom: "16px", width: "100%"}} href="#!"
                   role="button">
                    <i className="fab fa-facebook me-2"/>Facebook
                </a>
                <br/>
                <a className="btn btn-primary text-left" target="_blank" rel="noreferrer"
                   style={{color: "#fff", backgroundColor: "#ac2bac", marginBottom: "16px", width: "100%"}} href="#!"
                   role="button">
                    <i className="fab fa-instagram me-2"/>Instagram
                </a>
                <br/>
                <a className="btn btn-primary" target="_blank" rel="noreferrer"
                   style={{color: "#fff", backgroundColor: "#333333", marginBottom: "16px", width: "100%"}}
                   href="https://t.me/joinchat/ttk0CkxUJkBhZmY0" role="button">
                    <i className="fab fa-telegram me-2"/>Telegram
                </a>
            </div>

            <div className="d-block d-md-none">
                <a className="btn btn-primary" style={{color: "#fff", backgroundColor: "#3b5998", margin: "8px"}} href="#!" role="button">
                    <i className="fab fa-twitter me-2"/>
                </a>

                <a className="btn btn-primary" style={{color: "#fff", backgroundColor: "#3b5998", margin: "8px"}} href="#!" role="button">
                    <i className="fab fa-facebook me-2"/>
                </a>

                <a className="btn btn-primary" style={{color: "#fff", backgroundColor: "#ac2bac", margin: "8px"}} role="button">
                    <i className="fab fa-instagram me-2"/>
                </a>

                <a className="btn btn-primary" style={{color: "#fff", backgroundColor: "#333333", margin: "8px"}} role="button">
                    <i className="fab fa-telegram me-2"/>
                </a>
            </div>
        </>
    );
}

export default Social;