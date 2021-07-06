import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import React from "react";

function EmptyHorizontalCards() {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card horizontal-card">
                    <div className="row">
                        <div className="col-4">
                            <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0'
                                              style={{height: "100px", width: "100%"}}/>
                        </div>
                        <div className="col-8" style={{padding: "4px 0"}}>
                            <div className="card-block">
                                <ReactPlaceholder type='text' showLoadingAnimation={true} ready={false} rows={3}
                                                  color='#E0E0E0' style={{width: "90%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmptyHorizontalCards;