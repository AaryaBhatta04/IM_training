import HOCDemoRoot from "../1_hoc_demo/HOCDemo";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className="container">
            <ErrorBoundary>
                <HOCDemoRoot />
            </ErrorBoundary>
        </div>
    );
}

export default RootComponent;