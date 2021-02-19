import React, {useEffect, useState} from 'react'
import Pagination from './../Pagination/index.component';
import Story from "./index.component";

function Viral(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatrserver.herokuapp.com/get/category${props.location.state.endpoint}?limit=100`;
        fetch(`${CORS}${server}`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return null;

    let paginator;
    if (data["articles"]["hasPrevPage"] || data["articles"]["hasNextPage"]) {
        paginator = <Pagination pathname="/entertainment" name="Entertainment" endpoint="/Entertainment"
                                totalPages={data["articles"]["totalPages"]} page={data["articles"]["page"]}
                                hasPrevPage={data["articles"]["hasPrevPage"]}
                                hasNextPage={data["articles"]["hasNextPage"]}/>
    }

    return (
        <>
            {/*<p>{JSON.stringify(data)}</p>*/}
            <Story name="Viral" storyDocs={data["articles"]["docs"]} isReady={ready} hasPaginator={paginator}/>
        </>
    );
}

export default Viral;