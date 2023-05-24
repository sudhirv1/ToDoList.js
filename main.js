let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

function addItemToList(){

    var container = document.createElement("div"); // Create container element

    var checkbox = document.createElement("input"); // Create checkbox element
    checkbox.type = "checkbox";

    var text = document.createElement("span"); // Create text element
    text.innerText = inputField.value;

    container.appendChild(checkbox); // Append checkbox to container
    text.setAttribute("contentEditable", "true");
    container.appendChild(text); // Append text to container
    //container.setAttribute("contentEditable", 'true');
    toDoContainer.appendChild(container); // Append container to to-do container

    inputField.value = "";

    var delButton = document.createElement("button");
    delButton.classList.add("delete-button");
    delButton.innerText = "Delete";
    delButton.style.display = "none";

    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            delButton.style.display = 'block';
            container.appendChild(delButton);
            delButton.addEventListener("click", function () {
                toDoContainer.removeChild(container);
            });
        } 
        else {
            delButton.style.display = "none";
        }
    });
    
}

inputField.addEventListener('keydown', function(event){
    if (event.key === 13 || event.key === 'Enter') {
        addItemToList();
    }
});

addToDoButton.addEventListener('click', function(){
    addItemToList();
})

//Roadmap: 
    //TODO:Implement back end to save lists and be able to creat different lists
        //Maybe introduce names for each list
        //Add an icon on the home page that leads to an index of lists made
            //Maintain a link to the front page that is an empty list
    //TODO: Add a nice background
    //TODO: Fix Git Branch  