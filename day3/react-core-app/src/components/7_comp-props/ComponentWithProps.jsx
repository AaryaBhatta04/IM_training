// import { Component } from "react";

// class ComponentWithProps extends Component {
//     constructor(props) {
//         super(props);

//         // Never initialize Props, Props come from outside the component
//         // this.props = { name: "Abhijeet" };      // Error

//         // this.props.name = "Manish";
//         // this.state = this.props;
//         // this.state = { ...this.props };
//         this.state = JSON.parse(JSON.stringify(this.props));
//         // Use method s from third party libraries

//         this.state.name = "Manish";

//         console.log("Ctor, state: ", this.state);
//         console.log("Ctor, props", this.props);
//     }

//     render() {
//         console.log("Ctor, state: ", this.state);
//         console.log("Render, props", this.props);
//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With Props</h1>
//             </>
//         );
//     }
// }

// const ComponentWithProps = (props) => {
//     console.log("Render, props", props);

//     return (
//         <>
//             <h1 className="text-primary text-center">Component With Props</h1>
//         </>
//     );
// }

const ComponentWithProps = ({ id, name }) => {
    console.log("Render, props", id, name);

    return (
        <>
            <h1 className="text-primary text-center">Component With Props</h1>
        </>
    );
}

const ComponentWithPropsRoot = () => {
    return (
        <ComponentWithProps id={1} name={"Abhijeet"} />
    );
}

export default ComponentWithPropsRoot;