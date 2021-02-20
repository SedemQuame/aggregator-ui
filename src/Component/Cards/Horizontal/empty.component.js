import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import React from "react";

function EmptyHorizontalCards() {
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col-md-5 wrapthumbnail">
                            <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0' style={{ width: "100%", height: "70%" }}/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-block">
                                <ReactPlaceholder type='text' showLoadingAnimation={true} ready={false} rows={4} color='#E0E0E0'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmptyHorizontalCards;