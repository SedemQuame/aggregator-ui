import React, {useState} from 'react';
import './../Cards/StoryComponents.css';

function Ads() {
    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>Advertise</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p>We invite you to advertise your business/event/organisation/product on newsfoldr.com</p>
                        <p>Gain access to millions of people visiting newsfoldr.com</p>
                        <p>To make further advert enquiries or place an order, please contact us:</p>
                        <br/>
                        <b>Via email:</b>
                        <p>newsfoldrsite@gmail.com</p>
                        <br/>
                        <b>Only the e-mail addresses listed above are authorized to represent newsfoldr.com</b>
                        <br/>
                        <p>We value and appreciate your business and look forward to even greater success together.</p>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ads;