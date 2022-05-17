let myleads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn"); 
const tabbtn = document.getElementById("save-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));

if(leadsFromLocalStorage){
    myleads = leadsFromLocalStorage;
    render(myleads);
}

inputBtn.addEventListener("click", () => {
    myleads.push(inputEl.value); 
    inputEl.value = "";

    localStorage.setItem("myleads", JSON.stringify(myleads))

    render(myleads);
});

tabbtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        myleads.push(tabs[0].url); 
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads);
    });
});

deletebtn.addEventListener('dblclick', () => {
    localStorage.clear();
    myleads = [];
    render(myleads);
});

function render(leads){
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>
                    ${leads[i]}
                </a> 
            </li> 
        `
    }

    ulEl.innerHTML = listItems; 
}
