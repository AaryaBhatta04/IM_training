const url = process.env.REACT_APP_POSTS_API_URL;

const postApiClient = {
    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(error => {
                    reject("Parsing Error")
                })
            }).catch(error => {
                reject("Communication Error");
            });
        });
    },
    getAllPostsAsync: async function () {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch(error) {
            throw new Error(error.message);
        }
    }
};

export default postApiClient;