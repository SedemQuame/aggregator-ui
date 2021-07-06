import React from 'react'
import Banner from "./../../Component/Banner/index.component";
import Featured from "./../../Component/Featured/index.component";
import Category from "./../../Component/Category/index.component";
import Categories from "./../../assets/categories";
import Footer from "./../../Component/Footer/index.component";
import YTCarousel from "./../../Component/Youtube/carousel.component";

function Home() {
    let pageContent = Categories.map(category => <Category title={category["title"]} subs={category["subs"]} endPoint={category["endPoint"]}/>)

    return (
        <>
            <Banner/>
            <YTCarousel/>
            <Featured name="Top Headlines"/>
            {pageContent}
            <Footer/>
        </>
    );
}

export default Home;