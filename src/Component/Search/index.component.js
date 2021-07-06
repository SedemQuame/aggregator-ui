import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import SearchResults from "../Featured/search.component";
import Empty from "../Empty/index.component";
import Error from "../Error/error.component";

function Search() {
    let history = useHistory();

    // noinspection CommaExpressionJS
    let getSearchTerm = () => window.location.search.replace('?', '').split('&').reduce((r, e) => (r[e.split('=')[0]] = decodeURIComponent(e.split('=')[1]), r), {});
    const [data, setData] = useState();
    const [ready, setReady] = useState(false);
    const [term, setTerm] = useState();
    const [error, setError] = useState();

    history.listen(location => {
        try {
            let searchLocation = JSON.stringify(location.search).split("=")[1];
            if (searchLocation) {
                if (searchLocation.replace('"', '') !== term) {
                    setTerm(searchLocation.replace('"', ''))
                    setData(null);
                    setReady(true);
                }
            } else {
                console.log("test");
            }
        } catch (e) {
            // do nothing
        }
    });

    useEffect(() => {
        setTerm(getSearchTerm()["term"]);
        fetch(`https://aggregatrserver.herokuapp.com/search/${term}`)
            .then(data => data.json())
            .then(result => setData(result))
            .catch(setError);
        setReady(true);
    }, [term]);

    let sectionName = `Search results: "${term}"`;
    if (!data) return <Empty hasBanner={false} homePage={false} category={sectionName}/>;
    if (error) return <Error/>;

    if (ready) {
        if (data["articles"].length === 0) return <Error searchTerm={term}/>;
        return (
            <>
                <SearchResults name={sectionName} featuredDocs={data["articles"]} isReady={true}/>
            </>
        )
    }
}

export default Search;