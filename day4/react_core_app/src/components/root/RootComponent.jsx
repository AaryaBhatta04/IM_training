// import CounterAssignment from "../1_assignment/CounterAssignment";
// import CounterParentChildCom from "../2_parent_child_communication/CounterParentChildCom";
// import CounterWithReducer from "../3_reducers/CounterWithReducer";
import CounterRoot from "../4_code_structuring/CounterRoot";

const RootComponent = () => { 
    return (
        <div className="container mt-4">
            {/* <CounterAssignment /> */}
            {/* <CounterParentChildCom /> */}
            {/* <CounterWithReducer /> */}
            <CounterRoot />
        </div>
    );
}

export default RootComponent;