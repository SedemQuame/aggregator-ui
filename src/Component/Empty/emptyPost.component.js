import React from "react";
import Socials from "../Socials/index.component";
import ReactPlaceholder from "react-placeholder";
import Tags from "../Tags/index.component";
import Popular from "../Others/Popular/index.component";
import Footer from "../Footer/index.component";

function EmptyPost() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0'
                                          style={{marginBottom: "3vh", height: "70vh"}}/>
                        <ReactPlaceholder type='text' showLoadingAnimation={true} ready={false} rows={1}
                                          color='#E0E0E0' style={{marginBottom: "3vh", height: "10vh"}}/>
                        <Tags category="Category"/>
                        <div className="article-post row">
                            <div className="col-12 col-md-9">
                                <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0'
                                                  style={{marginBottom: "8px", height: "50vh"}}/>
                                <blockquote>" "</blockquote>
                                {["", "", "", ""].map((paragraph, index) => <p className="article-post"
                                                                               key={index}>{paragraph}</p>)}
                            </div>
                            <div className="col-12 col-md-3">
                                <Socials/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <Socials/>
                    </div>
                </div>
            </div>
            <Footer/>
            <Popular/>
        </>
    );
}

export default EmptyPost;