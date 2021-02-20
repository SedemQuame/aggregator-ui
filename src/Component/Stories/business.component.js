import React, {useEffect, useState} from 'react'
import Story from "./index.component";
import Empty from "../Empty/index.component";
import Pagination from "../Pagination/index.component";

function Business(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let server = `https://aggregatrserver.herokuapp.com/get/category/${props.location.state.endpoint}?limit=100`;
        fetch(`${server}`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return <Empty hasBanner={false} category={"Business"}/>;

    let paginator;
    if (data["articles"]["hasPrevPage"] || data["articles"]["hasNextPage"]) {
        paginator = <Pagination pathname="/entertainment" name="Entertainment" endpoint="/Entertainment"
                                totalPages={data["articles"]["totalPages"]} page={data["articles"]["page"]}
                                hasPrevPage={data["articles"]["hasPrevPage"]}
                                hasNextPage={data["articles"]["hasNextPage"]}/>
    }
    return (
        <>
            <Story name="Business" storyDocs={data["articles"]} isReady={ready} hasPaginator={paginator}/>
        </>
    );
}

export default Business;