const form = document.querySelector("form");
const websiteName = document.querySelector('#name');
const websiteURL = document.querySelector('#url');
const main = document.querySelector('main');
const div = document.querySelector('div');

console.log(div)

const createListInLocal = ()=>{
    const websiteList = localStorage.getItem("websites");
    if(!websiteList) localStorage.setItem('websites', JSON.stringify([]))
}

const getWebsitesFromLocal = ()=> {
    const websiteList = JSON.parse(localStorage.getItem("websites"));
    websiteList.forEach(element => {
        const h3 = document.createElement('h3');
        const button = document.createElement('a');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        button.setAttribute('href', element[1])
        button.textContent = 'Visit';
        const nodeText = document.createTextNode(element[0]);
        h3.appendChild(nodeText);
        h3.appendChild(button);
        h3.appendChild(deleteButton);
        div.appendChild(h3);
        main.appendChild(div);
        
    });
}

getWebsitesFromLocal()

createListInLocal();

const addLocalStorage = (name, url)=>{
    const websiteList = JSON.parse(localStorage.getItem("websites"));
    websiteList.push([name, url]);
    localStorage.setItem('websites', JSON.stringify(websiteList));

}


const deleteWebsiteFromLocal = (href)=>{
    const websiteList = JSON.parse(localStorage.getItem("websites"));
    const newWebsiteList = websiteList.filter(element => {
        return !element.includes(href)
    });

    localStorage.setItem('websites', JSON.stringify(newWebsiteList));

    
}

const deleteBookmark = (event)=>{
    if(event.target.tagName == 'BUTTON'){
       deleteWebsiteFromLocal(event.target.previousElementSibling.href);
       event.target.parentElement.remove()
    }
}

const addBookmark = (event)=>{
    event.preventDefault();
    
    const h3 = document.createElement('h3');
    const button = document.createElement('a');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    button.setAttribute('href', websiteURL.value)
    button.textContent = 'Visit';
    const nodeText = document.createTextNode(websiteName.value);
    h3.appendChild(nodeText);
    h3.appendChild(button);
    h3.appendChild(deleteButton);
    div.appendChild(h3);
    main.appendChild(div);

    addLocalStorage(websiteName.value, websiteURL.value)

    
}

const callEvents = ()=>{
    form.addEventListener('submit', addBookmark);
    div.addEventListener('click', deleteBookmark)
}

callEvents();



