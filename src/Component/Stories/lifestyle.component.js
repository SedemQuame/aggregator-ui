import React, {useEffect, useState} from 'react'
import Story from "./index.component";
import Empty from "../Empty/index.component";

function Lifestyle(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let server = `https://aggregatrserver.herokuapp.com/get/category${props.location.state.endpoint}?limit=100`;
            fetch(`${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);
            setReady(true);
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return <Empty homePage={false} hasBanner={false} category={"Lifestyle"}/>;
    return (
        <>
            <Story name="LifeStyle" storyDocs={data["articles"]} isReady={ready} hasPaginator={null}/>
        </>
    );
}

export default Lifestyle;