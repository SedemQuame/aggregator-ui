import Story from "../../Component/Stories/index.component";

function Category(props) {
    return (
        <>
            <Story title={props.location.state.name} endpoint={props.location.state.endpoint}/>
        </>
    )
}

export default Category;