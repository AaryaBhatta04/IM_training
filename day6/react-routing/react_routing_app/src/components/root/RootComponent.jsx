import { BrowserRouter as Router } from 'react-router-dom';
import NavigationComponent from "../bs_nav/NavigationComponent";
import ErrorBoundary from "../common/ErrorBoundary";
const RootComponent = () => {
    return (
        <div className="container">
            <ErrorBoundary>
                <Router>
                    <NavigationComponent />
                </Router>
            </ErrorBoundary>
        </div>
    );
}

export default RootComponent;