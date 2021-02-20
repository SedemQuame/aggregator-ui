import Socials from './../../Component/Socials/index.component';
import MainHeading from './../../Component/MainHeading/index.component';
import BannerImage from './../../Component/Banner/image.component';
import Paragraph from './../../Component/Paragraphs/index.component';
import Tags from './../../Component/Tags/index.component';
import HideShare from './../../Component/HideShare/index.component';
import AlertBar from './../../Component/AlertBar/index.component';
import Footer from './../../Component/Footer/index.component';
// import RelatedPosts from './../../Component/RelatedPosts/index.component';

function Posts (props){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-12">
                        <Socials/>
                    </div>
                    <div className="col-md-8 col-md-offset-2 col-xs-12">
                        <MainHeading title={props.location.state.article.title}/>
                        <BannerImage image={props.location.state.article.image}/>
                        <Paragraph paragraphs={props.location.state.article.paragraphs.filter(paragraph => (paragraph != null)).filter(paragraph => (paragraph !== ""))}/>
                        <Tags category={props.location.state.article.category}/>
                    </div>
                </div>
            </div>
            <HideShare/>
            {/*<div className="graybg">*/}
            {/*    <div className="container">*/}
            {/*        <RelatedPosts/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <AlertBar/>
            <Footer/>
        </>
    );
}

export default Posts;