var title = document.getElementById('project-title');
var description = document.getElementById('project-description');
var button = document.getElementById('submit');
var todoSectionList = document.getElementById('todo-project-list');
var titleElement;
var descriptionElement;
var container;
var createHtmlElement = function () {
    titleElement = document.createElement('h3');
    descriptionElement = document.createElement('p');
    container = document.createElement('div');
};
var setAttributeToHtmlElement = function () {
    titleElement.setAttribute('class', 'card-title');
    descriptionElement.setAttribute('class', 'card-description');
    container.setAttribute('class', 'card-container');
};
var addContentToHtmlElement = function () {
    titleElement.textContent = title.value;
    descriptionElement.textContent = description.value;
};
var appendHtmlElement = function () {
    if (title.value && description.value) {
        container.appendChild(titleElement);
        container.appendChild(descriptionElement);
        todoSectionList.appendChild(container);
    }
    else {
        alert('Fields cannot be blank');
    }
};
button.addEventListener('click', function () {
    createHtmlElement();
    setAttributeToHtmlElement();
    addContentToHtmlElement();
    appendHtmlElement();
});
