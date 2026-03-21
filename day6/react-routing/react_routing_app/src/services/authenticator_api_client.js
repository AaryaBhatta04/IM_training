const url = process.env.REACT_APP_AUTHENTICATOR_API_URL;

const authenticatorApiClient = {
    isAuthenticated: false,

    logIn: function (uname, pwd) {
        return new Promise((resolve, reject) => {
            var data = `username=${uname}&password=${pwd}`;

            let fData = {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                body: data
            };

            fetch(url, fData).then((response) => {
                response.json().then((data) => {
                    if (data.success) {
                        localStorage.setItem("im_access_token", data.token);
                        this.isAuthenticated = true;
                        resolve("Login Success");
                    }
                    else {
                        reject(data.message);
                    }
                }).catch((err) => {
                    reject("Parsing Error");
                })
            }).catch((err) => {
                console.log(err);
                reject("Error connecting to the API");
            });
        });
    },

    logOut: function () {
        localStorage.removeItem("im_access_token");
        this.isAuthenticated = false;
    },

    getToken: function () {
        return localStorage.getItem("im_access_token");
    }
}

export default authenticatorApiClient;