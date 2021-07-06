import React from "react";
import './../StoryComponents.css';
import ReactPlaceholder from "react-placeholder";

function EmptyVerticalCards() {
    return (
        <>
            <div className="col-12 col-sm col-md-4 col-lg-3">
                <div className="card vertical-card">
                    <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0' style={{height: "55vh", width: "100%"}}/>
                    <div className="card-body">
                        <ReactPlaceholder type='text' showLoadingAnimation={true} ready={false} rows={2} color='#E0E0E0'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmptyVerticalCards;