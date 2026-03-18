// import React from "react";

// class HelloComponent extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// // ---------------------------------------------
// import { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// // ---------------------------------------------
// import { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// // ---------------------------------------------
// // import React, { Component } from "react";
// // import { Component, Fragment } from "react";
// import { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             // <React.Fragment>
//             //     <h1>Hello World!</h1>
//             //     <h1>Hello World Again!</h1>
//             // </React.Fragment>
//             // <Fragment>
//             //     <h1>Hello World!</h1>
//             //     <h1>Hello World Again!</h1>
//             // </Fragment>
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------------------

// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Declration Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Expression Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Multi Arrow Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Single Arrow Syntax!</h1>
//     </>
// );

// -------------------------- Using Global CSS
// const HelloComponent = () => (
//     <>
//         <h1 className="highlight-danger">Hello World!</h1>
//         <h1 className="highlight-info">Single Arrow Syntax!</h1>
//         <h1 className="highlight-success">Single Arrow Syntax!</h1>
//     </>
// );

const HelloComponent = () => (
    <div className="container mt-4">
        <div className="highlight-danger mb-3">
            <h5>Danger Highlight</h5>
            <p className="mb-0">Something went wrong! Please check the errors.</p>
        </div>

        <div className="highlight-info mb-3">
            <h5>Info Highlight</h5>
            <p className="mb-0">This is an informational message for the user.</p>
        </div>

        <div className="highlight-success mb-3">
            <h5>Success Highlight</h5>
            <p className="mb-0">Operation completed successfully!</p>
        </div>

        <>
            <h2 className="text-warning">
                Activity Icon
                <i className="bi bi-activity"></i>
            </h2>
            <button className="btn btn-primary">Click Me</button>
        </>

        <>
            <div className="alert alert-warning d-flex align-items-center mb-3 mt-4" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
                <div>
                    <strong>Warning!</strong> Please review before proceeding.
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body d-flex align-items-center">
                    <i className="bi bi-person-circle fs-1 text-primary me-3"></i>
                    <div>
                        <h5 className="card-title mb-1">User Profile</h5>
                        <p className="card-text text-muted mb-0">Manage your account settings</p>
                    </div>
                    <button className="btn btn-outline-primary ms-auto">
                        <i className="bi bi-gear me-1"></i>Settings
                    </button>
                </div>
            </div>

            <div className="list-group mb-3">
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bi bi-house-door text-primary me-2"></i> Dashboard
                    <span className="badge bg-primary rounded-pill ms-auto">3</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bi bi-bell text-warning me-2"></i> Notifications
                    <span className="badge bg-warning rounded-pill ms-auto">7</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bi bi-chat-dots text-success me-2"></i> Messages
                    <span className="badge bg-success rounded-pill ms-auto">12</span>
                </a>
            </div>

            <div className="d-flex gap-2">
                <button className="btn btn-primary"><i className="bi bi-download me-1"></i>Download</button>
                <button className="btn btn-success"><i className="bi bi-check-circle me-1"></i>Approve</button>
                <button className="btn btn-danger"><i className="bi bi-trash me-1"></i>Delete</button>
            </div>
        </>
    </div>
);


export default HelloComponent;