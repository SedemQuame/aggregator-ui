import React from 'react';
import {Link} from "react-router-dom";

function Pagination(props) {
    let prevPage, nextPage, previousPages, nextPages;
    if (props.hasPrevPage) {
        prevPage = <li className="page-item">
            <Link to={{
                pathname: props.pathname,
                state: {
                    name: props.name,
                    endpoint: `/${props.endpoint}?page=${props.page - 1}`
                }
            }} className="page-link">Previous</Link>
        </li>
        if ((props.page - 2) < 0) {
            previousPages = <>
                <li className="page-item"><Link to={{
                    pathname: props.pathname,
                    state: {
                        name: props.name,
                        endpoint: `/${props.endpoint}?page=${props.page - 1}`
                    }
                }} className="page-link">{props.page - 1}</Link></li>
                <li className="page-item"><Link to={{
                    pathname: props.pathname,
                    state: {
                        name: props.name,
                        endpoint: `/${props.endpoint}?page=${props.page - 2}`
                    }
                }} className="page-link">{props.page - 2}</Link></li>
            </>
        }
    }

    if (props.hasNextPage) {
        nextPage = <li className="page-item"><Link to={{
            pathname: props.pathname,
            state: {
                name: props.name,
                endpoint: `/${props.endpoint}?page=${props.page + 1}`
            }
        }} className="page-link">Next</Link></li>
        if ((props.page + 3) < props.totalPages) {
            nextPages = <>
                <li className="page-item"><Link to={{
                    pathname: props.pathname,
                    state: {
                        name: props.name,
                        endpoint: `/${props.endpoint}?page=${props.page + 1}`
                    }
                }} className="page-link">{props.page + 1}</Link></li>
                <li className="page-item"><Link to={{
                    pathname: props.pathname,
                    state: {
                        name: props.name,
                        endpoint: `/${props.endpoint}?page=${props.page + 2}`
                    }
                }} className="page-link">{props.page + 2}</Link></li>
                <li className="page-item"><Link to={{
                    pathname: props.pathname,
                    state: {
                        name: props.name,
                        endpoint: `/${props.endpoint}?page=${props.page + 3}`
                    }
                }} className="page-link">{props.page + 3}</Link></li>
            </>
        }
    }
    return (
        <>
            <div className="after-post-tags d-flex justify-content-center">
                <ul className="tags">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {prevPage}
                            {previousPages}
                            <li className="page-item active"><Link to={{
                                pathname: props.pathname,
                                state: {
                                    name: props.name,
                                    endpoint: `/${props.endpoint}?page=${props.page}`
                                }
                            }} className="page-link">{props.page}</Link></li>
                            {nextPages}
                            {nextPage}
                        </ul>
                    </nav>
                </ul>
            </div>
        </>
    );
}

export default Pagination;