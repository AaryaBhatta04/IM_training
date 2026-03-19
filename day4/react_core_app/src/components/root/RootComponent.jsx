// import CounterAssignment from "../1_assignment/CounterAssignment";
// import CounterParentChildCom from "../2_parent_child_communication/CounterParentChildCom";
// import CounterWithReducer from "../3_reducers/CounterWithReducer";
// import CounterRoot from "../4_code_structuring/CounterRoot";
// import CounterRoot from "../5_sibling_communication_via_parent/CounterRoot";
import ContextRoot from "../7_context_api/ContextApiDemo";

const RootComponent = () => {
    return (
        <div className="container mt-4">
            {/* <CounterAssignment /> */}
            {/* <CounterParentChildCom /> */}
            {/* <CounterWithReducer /> */}
            {/* <CounterRoot /> */}
            <ContextRoot />
        </div>
    );
}

export default RootComponent;