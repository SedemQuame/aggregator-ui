import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './../../index.css';
import logo from './../../assets/img/logo.png'
import {scrollToTop} from "../../utils/index.component";

function Nav() {
    let navbarVisibilityHidden = {
        button: "navbar-toggler collapsed btn btn-dark",
        div: "navbar-collapse collapse"
    }
    let navbarVisibilityShow = {
        button: "navbar-toggler btn btn-dark",
        div: "navbar-collapse collapse show"
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [navState, setNavState] = useState(navbarVisibilityHidden);

    let handleChange = (evt) => setSearchTerm(evt.target.value);

    function toggleNav() {
        if (navState['button'] === "navbar-toggler collapsed") {
            setNavState(navbarVisibilityShow)
        } else {
            setNavState(navbarVisibilityHidden)
        }
        scrollToTop();
    }

    let categoryArr = ["News",
        // "Viral",
        "Sports",
        // "Lifestyle",
        "Business",
        // "Politics",
        "Entertainment"]

    let pageContent = categoryArr.map(category => <li className="nav-item">
        <Link to={"/articles/" + category} params={{title: category}}
              className="nav-link text-dark" onClick={toggleNav}>{category}</Link>
    </li>)
    return (
        <>
            <nav className="navbar navbar-dark bg-white navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link to={{pathname: "/"}} className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <button className={navState.button} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"/>
                    </button>
                    <div className={navState.div} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {pageContent}
                            <li className="nav-item">
                                <Link to={{
                                    pathname: '/radio',
                                    state: {
                                        categoryState: 'Radio',
                                        endpoint: '/Radio'
                                    }
                                }} className="nav-link text-dark" onClick={toggleNav}>Live Radio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/advertise"} params={{title: "advertise"}}
                                      className="nav-link text-dark" onClick={toggleNav}>Advertise</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input id="search" className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search" onChange={handleChange} style={{borderRadius: 0}}/>
                            <Link to={`/search?term=${searchTerm}`} className="btn btn-dark">Search</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;