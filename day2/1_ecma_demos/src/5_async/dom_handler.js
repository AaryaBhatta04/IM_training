import postApiClient from "./post_api_client.js";
// import getData from "./static_data.js";

const messageDiv = document.querySelector('#messageDiv');
const ajaxDiv = document.querySelector('#ajaxDiv');

if (ajaxDiv.style.display === 'none') {
    ajaxDiv.style.display = 'block';
    messageDiv.style.display = 'none';
}

const button = document.createElement('button');
button.className = "btn btn-primary";
button.innerHTML = "Load Data";

const btnArea = document.querySelector('#aDiv_btnArea');
btnArea.appendChild(button);

// button.addEventListener("click", () => {
//     // alert("Button Click Executed...");
//     const data = getData();
//     generateRows(data);
// });

// button.addEventListener("click", () => {
//     postApiClient.getAllPostsUsingCallback((data) => {
//         generateRows(data);
//     }, (eMsg) => {
//         console.error(eMsg);
//     });
// });

// button.addEventListener("click", () => {
//     postApiClient.getAllPostsUsingPromise().then((data) => {
//         generateRows(data);
//     }).catch((eMsg) => {
//         console.error(eMsg);
//     });
// });

// button.addEventListener("click", async () => {
//     try {
//         const data = await postApiClient.getAllPostsUsingPromise();
//         generateRows(data);
//     } catch (eMsg) {
//         console.error(eMsg);
//     }
// });

button.addEventListener("click", async () => {
    try {
        const data = await postApiClient.getAllPostsAsync();
        generateRows(data);
    } catch (eMsg) {
        console.error(eMsg);
    }
});

function generateRows(data) {
    const tbody = document.querySelector('#postTable tbody');
    let row, cell;

    for (const item of data) {
        row = tbody.insertRow();
        cell = row.insertCell();
        cell.textContent = item.id;
        cell = row.insertCell();
        cell.textContent = item.title;
        cell = row.insertCell();
        cell.textContent = item.body;
    }
}