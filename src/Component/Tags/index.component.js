import {Link} from 'react-router-dom';

function Tag(props) {
    return (
        <div className="after-post-tags">
            <ul className="tags">
                <li>
                    <Link to={{
                        pathname: `${props.category || "viral"}`,
                        state: {
                            name: `${props.category || "Viral"}`,
                            endpoint: `/${props.category || "Viral"}?page=1`
                        }
                    }} className="nav-link">{props.category || "Viral News"}</Link>
                </li>
            </ul>
        </div>
    );
}

export default Tag;