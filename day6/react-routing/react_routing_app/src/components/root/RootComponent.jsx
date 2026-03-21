import fetchIntercept from 'fetch-intercept';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import authenticatorApiClient from '../../services/authenticator_api_client';
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
                    config.headers['x-access-token'] = authenticatorApiClient.getToken();
                }

                // Modify the url or config here
                return [url, config];
            },

            requestError: function (error) {
                // Called when an error occured during another 'request' interceptor call
                return Promise.reject(error);
            },

            response: function (response) {
                // Modify the reponse object
                return response;
            },

            responseError: function (error) {
                // Handle an fetch error
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