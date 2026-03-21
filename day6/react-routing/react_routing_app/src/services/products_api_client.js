// import authenticatorApiClient from "./authenticator_api_client";

// const url = process.env.REACT_APP_PRODUCTS_API_URL;

// const productsAPIClient = {
//     getAllProducts: function () {
//         var promise = new Promise((resolve, reject) => {
//             let fData = {
//                 method: "GET",
//                 headers: {
//                     "x-access-token": authenticatorApiClient.getToken()
//                 }
//             };
            
//             fetch(url, fData).then((res) => {
//                 if (!res.ok) {
//                     const errorMessages = {
//                         400: "Invalid request. Please try again.",
//                         401: "Please log in to access this resource.",
//                         403: "You do not have permission to access this resource.",
//                         404: "The requested resource was not found.",
//                         500: "Something went wrong on the server. Please try again later.",
//                     };
//                     reject(errorMessages[res.status] || `Unexpected error occurred (Code: ${res.status})`);
//                     return;
//                 }
//                 var result = res.json();
//                 result.then((jResult) => {
//                     resolve(jResult);
//                 }, (err) => {
//                     reject("JSON Parse Error");
//                 });
//             }).catch((err) => {
//                 console.log(err);
//                 reject("Error connecting to the API");
//             });
//         });

//         return promise;
//     }
// }

// export default productsAPIClient;

// ----------------------------------------------- Via Interceptor

const url = process.env.REACT_APP_PRODUCTS_API_URL;

const productsAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            fetch(url).then((res) => {
                if (!res.ok) {
                    const errorMessages = {
                        400: "Invalid request. Please try again.",
                        401: "Please log in to access this resource.",
                        403: "You do not have permission to access this resource.",
                        404: "The requested resource was not found.",
                        500: "Something went wrong on the server. Please try again later.",
                    };
                    reject(errorMessages[res.status] || `Unexpected error occurred (Code: ${res.status})`);
                    return;
                }
                var result = res.json();
                result.then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                });
            }).catch((err) => {
                console.log(err);
                reject("Error connecting to the API");
            });
        });

        return promise;
    }
}

export default productsAPIClient;