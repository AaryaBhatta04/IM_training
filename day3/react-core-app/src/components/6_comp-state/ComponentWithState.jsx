// import { Component } from "react";

import { useState } from "react";

// class ComponentWithState extends Component {
//     constructor() {
//         super();

//         this.state = { name: "Manish" };
//         this.message = "Hi"

//         console.log("Ctor, state: ", this.state);
//     }

//     render() {
//         console.log("Render, state: ", this.state);
//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With State</h1>
//                 <h2 className="text-success">Hello, {this.state.name}</h2>
//                 <h2 className="text-success">Hello, {this.message}</h2>
//             </>
//         );
//     }
// }

// export default ComponentWithState;


const ComponentWithState = () => {
    const [name] = useState("Manish");
    // console.log(test);
    const message = "Hi";
    
    return (
        <>
            <h1 className="text-primary text-center">Component With State</h1>
            <h2 className="text-success">Hello, {name}</h2>
                <h2 className="text-success">Hello, {message}</h2>
        </>
    );
}

export default ComponentWithState;