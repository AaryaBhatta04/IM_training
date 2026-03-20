// import EventComponent from "../1_react_events/EventComponent";
// import ControlledVsUncontrolledComponent from "../2_controlled_vs_uncontrolled/ControlledVsUncontrolledComponent";
// import CalculatorAssignment from "../3_assignment/CalculatorAssignment";
import ListRoot from "../4_working_with_arrays/ListComponent";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className="container mt-4">
            <ErrorBoundary>
                {/* <EventComponent /> */}
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment /> */}
                <ListRoot />
            </ErrorBoundary>
        </div>
    );
}

export default RootComponent;