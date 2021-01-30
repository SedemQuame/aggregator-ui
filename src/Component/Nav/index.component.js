import {Link} from 'react-router-dom';
import './../../index.css';
import logo from './../../assets/img/logo.png'

export default () => {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white mediumnavigation">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/entertainment" className="nav-link">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sports" className="nav-link">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/lifestyle" className="nav-link">Lifestyle</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/viral" className="nav-link">Viral</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/business" className="nav-link">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/politics" className="nav-link">Politics</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
}
