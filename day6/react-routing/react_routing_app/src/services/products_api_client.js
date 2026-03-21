const url = process.env.REACT_APP_PRODUCTS_API_URL;

const productsAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            fetch(url).then((res) => {
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