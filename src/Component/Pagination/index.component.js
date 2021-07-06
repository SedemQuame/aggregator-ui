import React from 'react';

function Pagination(props) {
    let prevPage, nextPage, previousPages, nextPages;
    if (props.hasPrevPage) {
        prevPage =
            <button className="page-item btn"
                    onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page - 1)}`)}}>
                Previous
            </button>
        if ((props.page - 2) < 0) {
            previousPages = <>
                <button className="page-item btn"
                        onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page - 1)}`)}}>
                    {props.page - 1}
                </button>
                <button className="page-item btn"
                        onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page - 2)}`)}}>
                    {props.page - 2}
                </button>
            </>
        }
    }

    if (props.hasNextPage) {
        nextPage =
            <button className="page-item btn"
                    onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page + 1)}`)}}>
                Next
            </button>
        if ((props.page + 1) <= props.totalPages) {
            nextPages = <>
                <button className="page-item btn"
                        onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page + 1)}`)}}>
                    {props.page + 1}
                </button>
                <button className="page-item btn"
                        onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page + 2)}`)}}>
                    {props.page + 2}
                </button>
                <button className="page-item btn"
                        onClick={() => {props.onPaginatorClick(`${props.endpoint}?limit=${90 * (props.page + 3)}`)}}>
                    {props.page + 3}
                </button>
            </>
        }
    }

    return (
        <>
            <div className="after-post-tags d-flex justify-content-center">
                <ul className="tags">
                    <nav aria-label="Page navigation example">
                        {prevPage}
                        {previousPages}
                        <button className="page-item btn btn-dark active">
                                {/*onClick={props.onPaginatorClick(`${props.endpoint}?limit=${90 * props.page}`)}>*/}
                            {props.page}
                        </button>
                        {nextPages}
                        {nextPage}
                    </nav>
                </ul>
            </div>
        </>
    );
}

export default Pagination;