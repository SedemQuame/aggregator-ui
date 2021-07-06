import "./banner.css";

function image(props) {
    return (
        <img className="banner" style={{backgroundColor: "#E0E0E0", width:"100%"}} className="featured-image img-fluid" src={props.image} alt=""/>
    );
}

export default image;