import fetchIntercept from 'fetch-intercept';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationComponent from "../bs_nav/NavigationComponent";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    useEffect(() => {
        const unregister = fetchIntercept.register({
            request: function (url, config) {
                config = config || {};
                config.headers = config.headers || {};

                config.headers['Accept'] = 'application/json';

                if (url.includes('products')) {
                    config.headers['x-access-token'] = "";
                }

                // Modify the url or config here
                return [url, config];
            },

            requestError: function (error) {
                // Called when an error occured during another 'request' interceptor call
                return Promise.reject(error);
            },

            response: function (response) {
                if (!response.ok) {
                    const errorMessages = {
                        400: "Invalid request. Please try again.",
                        401: "Please log in to access this resource.",
                        403: "You do not have permission to access this resource.",
                        404: "The requested resource was not found.",
                        500: "Something went wrong on the server. Please try again later.",
                    };
                    const message = errorMessages[response.status] || `Unexpected error occurred (Code: ${response.status})`;
                    return Promise.reject(message);
                }
                return response;
            },

            responseError: function (error) {
                return Promise.reject(error);
            }
        });

        return () => {
            unregister();
        };
    }, []);

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