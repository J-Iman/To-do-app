// Take the HTML elements into a varibale 

var inputData = document.getElementById("inputfield")
var addButton = document.getElementById("addbutton")
var todoContainer = document.getElementById("todocontainer")


addButton.addEventListener('click', function(){
    // Check if the input field is empty

    if (inputData.value == ""){
        inputData.style.border = "2px solid red"
    }

    else{
        inputData.style.border = "2px solid white"

        var paragraph = document.createElement('p')
        paragraph.innerText = inputData.value;
        paragraph.classList.add("applyonparagraph")
        todoContainer.appendChild(paragraph)
    
        //single click on P tag action
        paragraph.addEventListener('click', function(){
            paragraph.style.backgroundColor = 'white'
        })
    
        // Double click on P tag Action 
        paragraph.addEventListener('dblclick', function(){
            todoContainer.removeChild(paragraph)
        })
    }
})