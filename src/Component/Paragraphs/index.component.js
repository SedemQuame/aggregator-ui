import BannerImage from "../Banner/image.component";
import Youtube from "../Youtube/index.component";
import InstagramEmbed from 'react-instagram-embed';
import TweetEmbed from 'react-tweet-embed'

import React from "react";

function Paragraphs(props) {
    return (
        <div className="article-post row">
            <div className="col-12">
                <BannerImage image={props.image}/>
                <blockquote>{props.paragraphs[0]}</blockquote>
                {(props.paragraphs.slice(1, props.paragraphs.length)).map((paragraph, index) => {
                    if (paragraph.includes("http")) {
                        if (paragraph.includes("instagram")) {
                            return <InstagramEmbed
                                url='https://instagr.am/p/Zw9o4/'
                                clientAccessToken='123|456'
                                maxWidth={320}
                                hideCaption={false}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                            />
                        }
                        if (paragraph.includes("twitter")) {
                            return <TweetEmbed id={paragraph.split("status/")[1].slice(0, 19)} placeholder={'loading'} />
                        }
                        return <Youtube className="yt_carousel" src={paragraph}/>;
                    } else {
                        return <p className="article-post" key={index}>{paragraph}</p>;
                    }
                })}
            </div>
        </div>
    );
}

export default Paragraphs;