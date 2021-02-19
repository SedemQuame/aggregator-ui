import React, {useEffect, useState} from 'react'
import Story from "./index.component";

function Lifestyle(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let CORS = `https://api.allorigins.win/raw?url=`;
        let server = `https://aggregatrserver.herokuapp.com/get/category${props.location.state.endpoint}?limit=100`;
        try {
            fetch(`${CORS}${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);
            setReady(true);
        } catch {
            return null
        }
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return null;

    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <Story name="LifeStyle" storyDocs={data["articles"]["docs"]} isReady={ready} hasPaginator={null}/>
        </>
    );
}

export default Lifestyle;