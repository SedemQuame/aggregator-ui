import empty from "../../assets/img/open.png";

function NoData(props) {
    let containerStyle = {
        marginTop: "15vh"
    }

    let imageStyle = {
        height: "110px",
        width: "110px"
    }
    return (
        <>
            <div className="text-center offset-md-3 col-md-6" style={containerStyle}>
                <img src={empty} alt="reaction" style={imageStyle}/>
                <br/>
                <h2><span>Sorry, can't find any data.</span></h2>
                {/*<p>for the search term <br/> <b>{props.searchTerm}</b>.</p>*/}
            </div>
        </>
    );
}

export default NoData;