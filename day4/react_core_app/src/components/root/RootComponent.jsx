// import CounterAssignment from "../1_assignment/CounterAssignment";
// import CounterParentChildCom from "../2_parent_child_communication/CounterParentChildCom";
import CounterWithReducer from "../3_reducers/CounterWithReducer";

const RootComponent = () => { 
    return (
        <div className="container mt-4">
            {/* <CounterAssignment /> */}
            {/* <CounterParentChildCom /> */}
            <CounterWithReducer />
        </div>
    );
}

export default RootComponent;