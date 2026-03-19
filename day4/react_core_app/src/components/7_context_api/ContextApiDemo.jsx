import { createContext, useContext, useState } from "react";

const MyContext = createContext();
console.log(MyContext)


const ContextProvider = ({ children }) => {
    return (
        <MyContext.Provider value={"Hello from Context"}>
            {children}
        </MyContext.Provider>
    );
};

// const ChildThree = ({inp}) => {
//     return (
//         <>
//             <h1>Data: {inp}</h1>
//         </>
//     );
// }

// const ChildTwo = ({inp}) => {
//     return (
//         <>
//             <ChildThree inp={inp}/>
//         </>
//     );
// }

// const ChildOne = ({inp}) => {
//     return (
//         <>
//             <ChildTwo inp={inp}/>
//         </>
//     );
// }

// const ContextRoot = () => {
//     const [data] = useState("Hello from Parent - For Child3");

//     return (
//         <ChildOne inp={data} />
//     );
// }

const ChildFour = () => {
    const message = useContext(MyContext);

    return (
        <>
            <h1>Data: {message}</h1>
        </>
    );
}

const ChildThree = () => {
    const message = useContext(MyContext);

    return (
        <>
            <h1>Data: {message}</h1>
        </>
    );
}

const ChildTwo = () => {
    return (
        <>
            <ChildThree />

        </>
    );
}

const ChildOne = () => {
    return (
        <>
            <ChildTwo />
        </>
    );
}

const ContextRoot = () => {
    const [data] = useState("Hello from Parent - For Child3");

    return (
        <>
            <MyContext.Provider value={data}>
                <ChildOne />
            </MyContext.Provider>
            <ChildFour />
        </>
    );
}

export default ContextRoot;