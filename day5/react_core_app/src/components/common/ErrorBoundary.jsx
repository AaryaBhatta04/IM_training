import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null, showDetails: false };
        this.handleReload = this.handleReload.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }

    handleReload() {
        window.location.reload();
    }

    handleRetry() {
        this.setState({ hasError: false, error: null, errorInfo: null, showDetails: false });
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/error.png');
            return (
                <div
                    className="container-fluid vh-100 d-flex align-items-center justify-content-center"
                    style={{ background: '#ffffff' }}
                >
                    <style>{`
                        @keyframes float {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(30px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .error-card {
                            animation: fadeInUp 0.6s ease-out;
                            background: white;
                            border-radius: 20px;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                            padding: 3rem 2.5rem;
                        }
                        .error-btn {
                            transition: transform 0.2s ease, box-shadow 0.2s ease;
                            border-radius: 10px;
                        }
                        .error-btn:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        }
                    `}</style>
                    <div className="text-center error-card" style={{ maxWidth: '550px', width: '100%' }}>
                        <div className="mb-4">
                            <img
                                src={errImg}
                                alt="Error"
                                className="img-fluid"
                                style={{
                                    maxWidth: '200px',
                                    animation: 'float 3s ease-in-out infinite'
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <h1 className="fw-bold mb-3" style={{ fontSize: '1.75rem', color: '#2d3748' }}>
                                Oops! Something went wrong
                            </h1>
                            <p className="mb-2" style={{ color: '#4a5568', fontSize: '1.05rem' }}>
                                Don't worry — it's not you, it's us.
                            </p>
                            <p style={{ color: '#a0aec0', fontSize: '0.95rem' }}>
                                Try again, reload the page, or go back. If the issue persists, contact support.
                            </p>
                        </div>

                        <div className="d-flex gap-2 justify-content-center flex-wrap mb-3">
                            <button
                                className="btn btn-lg px-4 py-2 error-btn text-white"
                                style={{ backgroundColor: '#667eea', borderColor: '#667eea' }}
                                onClick={this.handleRetry}
                            >
                                <i className="bi bi-arrow-repeat me-2"></i>
                                Try Again
                            </button>

                            <button
                                className="btn btn-lg px-4 py-2 error-btn"
                                style={{ color: '#667eea', borderColor: '#667eea', backgroundColor: 'transparent' }}
                                onClick={this.handleReload}
                            >
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Reload
                            </button>

                            <button
                                className="btn btn-lg px-4 py-2 error-btn"
                                style={{ color: '#a0aec0', borderColor: '#e2e8f0', backgroundColor: 'transparent' }}
                                onClick={() => window.history.back()}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Go Back
                            </button>
                        </div>

                        {this.state.error && (
                            <div className="mt-3">
                                <button
                                    className="btn btn-sm"
                                    style={{ color: '#a0aec0', fontSize: '0.85rem' }}
                                    onClick={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
                                >
                                    <i className={`bi bi-chevron-${this.state.showDetails ? 'up' : 'down'} me-1`}></i>
                                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                                </button>
                                {this.state.showDetails && (
                                    <div
                                        className="mt-2 p-3 rounded text-start"
                                        style={{ backgroundColor: '#f7fafc', border: '1px solid #e2e8f0', maxHeight: '180px', overflowY: 'auto' }}
                                    >
                                        <p className="mb-1 fw-semibold" style={{ fontSize: '0.85rem', color: '#e53e3e' }}>
                                            {this.state.error.toString()}
                                        </p>
                                        <pre className="mb-0" style={{ fontSize: '0.75rem', whiteSpace: 'pre-wrap', color: '#718096' }}>
                                            {this.state.errorInfo?.componentStack}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        )}

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
        this.setState({ error, errorInfo: info });
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
}

export default ErrorBoundary;