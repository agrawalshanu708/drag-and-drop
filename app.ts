const title = document.getElementById('project-title') as HTMLInputElement;
const description = document.getElementById('project-description') as HTMLInputElement;
const button = document.getElementById('submit') as HTMLButtonElement;
const todoSectionList = document.getElementById('todo-project-list')!;

let titleElement: HTMLElement;
let descriptionElement: HTMLElement;
let container: HTMLElement;

const createHtmlElement = () => {
    titleElement = document.createElement('h3');
    descriptionElement = document.createElement('p');
    container = document.createElement('div');
}

const setAttributeToHtmlElement= () => {
    titleElement.setAttribute('class', 'card-title');
    descriptionElement.setAttribute('class', 'card-description');
    container.setAttribute('class', 'card-container');
};

const addContentToHtmlElement = () => {
    titleElement.textContent = title.value;
    descriptionElement.textContent = description.value;
};

const appendHtmlElement = () => {
    if(title.value && description.value){
     container.appendChild(titleElement);
     container.appendChild(descriptionElement);
     todoSectionList.appendChild(container)
    } else {
        alert('Fields cannot be blank')
    }
}

button.addEventListener('click', () => {
    createHtmlElement()
    setAttributeToHtmlElement()
    addContentToHtmlElement()
    appendHtmlElement()
})


