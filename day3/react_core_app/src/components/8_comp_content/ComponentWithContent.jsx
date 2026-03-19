// import { Component } from "react";

// class ComponentWithContent extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With Props and Content</h1>
//                 <h2>Id: {this.props.id}</h2>
//                 <h2>Name: {this.props.name}</h2>
//                 {/* Content Projection */}
//                 {this.props.children}       
//             </>
//         );
//     }
// }

// const ComponentWithContent = (props) => {
//     console.log("Render, props", props);

//     return (
//         <>
//             <h1 className="text-primary text-center">Component With Props and Content</h1>
//             <h2>Id: {props.id}</h2>
//             <h2>Name: {props.name}</h2>
//             {/* Content Projection */}
//             {props.children}
//         </>
//     );
// }

const ComponentWithContent = ({ id, name, children }) => {
    console.log("Render, props", id, name);

    return (
        <>
            <h1 className="text-primary text-center">Component With Props and Content</h1>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            {/* Content Projection */}
            {children}
        </>
    );
}

const ComponentWithContentRoot = () => {
    return (
        <ComponentWithContent id={1} name={"Abhijeet"}>
            <h1>HTML Passed from Root</h1>
        </ComponentWithContent>
    );
}

export default ComponentWithContentRoot;