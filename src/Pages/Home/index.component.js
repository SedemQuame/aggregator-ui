import React, {useEffect, useState} from 'react'
import Banner from "./../../Component/Banner/index.component";
import Featured from "./../../Component/Featured/index.component";
import Story from "./../../Component/Stories/index.component";
import Footer from "./../../Component/Footer/index.component";

function Home() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatrserver.herokuapp.com/getAll?limit=100`;
            fetch(`${CORS}${server}`)
                .then(data => data.json())
                .then(result => setData(result))
                .catch(setError);
            setReady(true);
    }, []);
    // //display a standard screen for when something goes wrong
    if (error) return null;
    if (!data) return null;

    return (
        <>
            <Banner/>
            <Featured featuredDocs={data["featured"]} isReady={ready}/>
            <Story name="All Stories" storyDocs={data["articles"]["docs"]} isReady={ready} hasPaginator={null}/>
            <Footer/>
        </>
    );
}

export default Home;