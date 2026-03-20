import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/error.png');
            return (
                <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
                    <div className="text-center">
                        <div className="mb-4">
                            <img
                                src={errImg}
                                alt="Error"
                                className="img-fluid mb-4"
                                style={{
                                    maxWidth: '300px',
                                    filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.5))',
                                    animation: 'pulse 2s infinite'
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <h1 className="display-4 fw-bold text-danger mb-3">
                                System Error
                            </h1>
                            <p className="lead text-light mb-3">
                                Something went wrong. The application has encountered an unexpected error.
                            </p>
                            <p className="text-muted">
                                Please try refreshing the page or contact support if the problem persists.
                            </p>
                        </div>

                        <div className="d-flex gap-3 justify-content-center">
                            <button
                                className="btn btn-danger btn-lg px-4 py-2"
                                onClick={this.handleReload}
                            >
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Reload Page
                            </button>

                            <button
                                className="btn btn-outline-light btn-lg px-4 py-2"
                                onClick={() => window.history.back()}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Go Back
                            </button>
                        </div>

                        <div className="mt-4">
                            <small className="text-muted">
                                Error ID: {Date.now().toString(36)}
                            </small>
                        </div>
                    </div>
                </div>
            );
        } else {
            return this.props.children || (
                <div className="container mt-5">
                    <div className="alert alert-warning text-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        <strong>No Component to render</strong>
                    </div>
                </div>
            );
        }
    }

    componentDidCatch(error, info) {
        // You can log the error to an error logging service  
    }

    static getDerivedStateFromError(error) {
        // Update the state so that the next render wll show a fallback UI
        return { hasError: true };
    }
}

export default ErrorBoundary;