import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import MainHeading from './../../Component/MainHeading/index.component';
import BannerImage from './../../Component/Banner/image.component';
import Paragraph from './../../Component/Paragraphs/index.component';
import Tags from './../../Component/Tags/index.component';
import Footer from './../../Component/Footer/index.component';
import Youtube from './../../Component/Youtube/index.component';
import './../../Component/Youtube/carousel.css';
import EmptyPost from "../../Component/Empty/emptyPost.component";
import Popular from "../../Component/Others/Popular/index.component";
import Socials from "../../Component/Socials/index.component";
import InstagramEmbed from "react-instagram-embed";

function Posts() {
    let {articleId} = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch(`https://aggregatrserver.herokuapp.com/article/${articleId}`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [articleId]);

    //display a standard screen for when something goes wrong
    if (error && data.article.length < 1) return null;

    // display an empty pane when page is still loading
    if (!data) return <EmptyPost/>;

    let player = (data.article[0].youtube !== "") ?
        <Youtube className="yt_carousel" src={data.article[0].youtube}/> : null;

    if (ready) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            {(data.article[0].youtube !== "") ? player : <BannerImage className="col-12" image={data.article[0].image}/>}
                            <h1 className="article-title text-left"><span>{data.article[0].title}</span></h1>
                            <Tags category={data.article[0].category}/>
                            <Paragraph image={data.article[0].youtube === "" ? null : data.article[0].image}
                                       paragraphs={data.article[0].paragraphs.filter(paragraph => (paragraph != null)).filter(paragraph => (paragraph !== ""))}/>

                        </div>
                        <div className="col-12 col-md-3">
                            <Socials/>
                        </div>
                    </div>
                </div>
                <Popular/>
                <Footer/>
            </>
        );
    }
}

export default Posts;