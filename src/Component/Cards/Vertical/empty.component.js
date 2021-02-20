import React from "react";
import ReactPlaceholder from "react-placeholder";

function EmptyVerticalCards() {
    return (
        <>
            <div className="card">
                <div className="img-container">
                    <ReactPlaceholder type='rect' showLoadingAnimation={true} ready={false} color='#E0E0E0' style={{ width: 1000, height: 1000 }}/>
                </div>
                <div className="card-block" style={{marginTop:"5px" }}>
                    <ReactPlaceholder type='text' showLoadingAnimation={true} ready={false} rows={1} color='#E0E0E0'/>
                </div>
            </div>
        </>
    );
}

export default EmptyVerticalCards;