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

        var insidetodocontainer = document.createElement('div')
        insidetodocontainer.id = "insidetodocontainer" // for jquery purpose we gave it an id to access it later
        var leftContainer = document.createElement('div')
        var rightContainer = document.createElement('div')

        var paragraph = document.createElement('p')
        var removeButton = document.createElement('button')
        var crossButton = document.createElement('button')

        removeButton.id = 'removetask'
        removeButton.innerHTML = 'Remove'
        removeButton.classList.add('remove-button-style')

        crossButton.id = 'crosstask'
        crossButton.innerHTML = 'Done'
        crossButton.classList.add('cross-button-style')

        paragraph.innerText = inputData.value;
        paragraph.classList.add("applyonparagraph")
        
        // layout style on Main bottom container
        insidetodocontainer.classList.add('inside-to-do-container-style')
        
        todoContainer.appendChild(insidetodocontainer)
        insidetodocontainer.append(leftContainer)
        insidetodocontainer.append(rightContainer)

        leftContainer.append(paragraph)
        rightContainer.append(crossButton)
        rightContainer.append(removeButton)


        removeButton.addEventListener('click', function(){
            todoContainer.removeChild(insidetodocontainer)
        })

        crossButton.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through"
        })

        inputData.value = ""
    }
})