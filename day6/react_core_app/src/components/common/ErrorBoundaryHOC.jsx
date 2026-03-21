import { Component } from "react";

const ErrorBoundaryHOC = function (InputComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        render() {
            if (this.state.hasError) {
                var errImg = require('../../assets/component-error.png');
                return (
                    <div className="text-center mt-5">
                        <h2 className="text-danger mb-5">Something went wrong, please contact admin</h2>
                        <img src={errImg} alt="Error" className='img-thumbnail' />
                    </div>
                );
            } else {
                return <InputComponent {...this.state} {...this.props} />
            }
        }

        static getDerivedStateFromError(error) {
            // Update the state so that the next render wll show a fallback UI
            return { hasError: true };
        }
    }
}

export default ErrorBoundaryHOC;