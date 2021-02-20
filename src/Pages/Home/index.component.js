import React, {useEffect, useState} from 'react'
import Banner from "./../../Component/Banner/index.component";
import Featured from "./../../Component/Featured/index.component";
import Story from "./../../Component/Stories/index.component";
import Footer from "./../../Component/Footer/index.component";
import Empty from "./../../Component/Empty/index.component";

function Home() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let server = `https://aggregatrserver.herokuapp.com/getAll?limit=100`;
            fetch(`${server}`)
                .then(data => data.json())
                .then(result => setData(result))
                .catch(setError);
            setReady(true);
    }, []);
    //display a standard screen for when something goes wrong
    if (error) return null;
    // display an empty pane when page is still loading
    if (!data) return <Empty hasBanner={true} homePage={true} category={"Featured"}/>;

    return (
        <>
            <Banner/>
            <Featured featuredDocs={data["featured"]} isReady={ready}/>
            <Story name="All Stories" storyDocs={data["articles"]} isReady={ready} hasPaginator={true}/>
            <Footer/>
        </>
    );
}

export default Home;