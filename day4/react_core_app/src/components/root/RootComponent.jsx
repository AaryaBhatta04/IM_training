// import CounterAssignment from "../1_assignment/CounterAssignment";

import CounterParentChildCom from "../2_parent_child_communication/CounterParentChildCom";

const RootComponent = () => { 
    return (
        <div className="container mt-4">
            {/* <CounterAssignment /> */}
            <CounterParentChildCom />
        </div>
    );
}

export default RootComponent;