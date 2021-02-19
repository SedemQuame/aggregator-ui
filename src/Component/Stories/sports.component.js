import React, {useEffect, useState} from 'react'
import Story from "./index.component";

function Sports(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatrserver.herokuapp.com/get/category${props.location.state.endpoint}?limit=100`;
        fetch(`${CORS}${server}`)
            .then(data => data.json())
            .then(setData)
            .catch(setError);
        setReady(true);
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return null;

    return (
        <Story name="Sports" storyDocs={data["articles"]["docs"]} isReady={ready} hasPaginator={null}/>
    );
}

export default Sports;