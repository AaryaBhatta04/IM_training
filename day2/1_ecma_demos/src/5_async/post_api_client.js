const url = "https://jsonplaceholder.typicode.com/posts";
const url1 = "https://jsonplaceholder.typicode.com/users"

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
            throw new Error(error.message);
        }
    },
    getAllUsersAsync:async function () {
        try{
            const response = await fetch(url1);
            return await response.json();
        }
        catch(err){
            throw new Error(err.message)
        }
    },
    getAllPostsByUserAsync:async function(userId) {
        try{
            const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
            return await response.json();
        }
        catch(err){
            throw new Error(err.message);
        }
    }
};

export default postApiClient;