const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    // Not going to work
    // getAllPosts: function() {
    //     fetch(url).then(response=>{
    //         response.json().then(data=>{
    //             return (data);
    //         }).catch(error=>{
    //             console.error("Parsing Error")
    //         })
    //     }).catch(error=>{
    //         console.error("Communication Error");
    //     });
    // }
    getAllPostsUsingCallback: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(error => {
                errorCB("Parsing Error")
            })
        }).catch(error => {
            errorCB("Communication Error");
        });
    },
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
            return new Error(error.message);
        }
    }
};

export default postApiClient;