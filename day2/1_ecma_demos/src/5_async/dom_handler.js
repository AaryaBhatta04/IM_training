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

const button1=document.createElement('button')
button1.className="btn btn-primary dropdown-toggle";
button1.innerHTML="Load User";


const btnArea = document.querySelector('#aDiv_btnArea');
btnArea.appendChild(button);
btnArea.appendChild(button1)

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

button1.addEventListener("click",async ()=>{
    try{
        const dropDown=document.querySelector('#dropDownDiv');
        const tbody=document.querySelector('#dropDownDiv tbody');

        if(dropDown.style.display==='none'){
            // console.log("dropdown should appear")
            dropDown.style.display='block';
            
            if(tbody.rows.length===0){
                const data=await postApiClient.getAllUsersAsync();
                let row,cell;

                for(const item of data){
                    row=tbody.insertRow();  
                    cell=row.insertCell();
                    cell.textContent=item.name;

                    cell.setAttribute('data-user-id', item.id); 
                    cell.style.cursor = 'pointer';
                }
            }
        }
        else{
            dropDown.style.display='none';
            // alert("dropdown should disappear");
            return;
        }
    }
    catch(err){
        console.error(err);
    }
})

document.querySelector('#dropDownDiv tbody').addEventListener('click',async (event) => {
    const clickedCell = event.target;

    if (clickedCell.tagName === 'TD') {
        console.log("Clicked item text:", clickedCell.textContent);
        const data= await postApiClient.getAllPostsByUserAsync(clickedCell.dataset.userId);
        const posttBody=document.querySelector('#postTable tbody');
        posttBody.innerHTML='';
        generateRows(data);
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