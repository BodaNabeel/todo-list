"use strict";

const inputField = document.querySelector(".input__field");
const submitBtn = document.querySelector(".submit__btn");
const taskName = document.querySelector(".task__name")
let taskContainer = document.querySelector(".task__container")


let markup = function(info) {
    const structure = `<p class="task__name">${info}</p>
    <div class="task__btn">
    <span class="material-icons task__icon icon__check"> echeck_box_outline_blank </span>
    <span class="material-icons task__icon icon__edit"> edit </span>
    <span class="material-icons task__icon icon__del"> delete </span>
    </div>`
    return structure
}

submitBtn.addEventListener('click', ()=> {
    // 1. Gather the detail about task
    let inputData = inputField.value

    //  DOM skeleton 
    let taskObjectForDOM = document.createElement("div");
    taskObjectForDOM.classList.add("task")
    let markup = `<p class="task__name">${inputData}</p>
        <div class="task__btn">
        <span class="material-icons task__icon icon__check"> echeck_box_outline_blank </span>
        <span class="material-icons task__icon icon__edit"> edit </span>
        <span class="material-icons task__icon icon__del"> delete </span>
        </div>`
    taskObjectForDOM.innerHTML = markup

    // 3 Displaying task
    taskContainer.appendChild(taskObjectForDOM)

    // 4. Making input field blank
    inputField.value = ""

    // 5. Done/Check Icon function
    const checkBtn = document.querySelectorAll(".icon__check") 
    const taskName = document.querySelectorAll(".task__name")
    checkBtn.forEach((el,i) => {
        el.addEventListener("click", () => {
        el.innerHTML = "check_box"
        taskName[i].style.textDecoration = "line-through"
        })
    })

    // 6. Delete Icon Function
    const delBtn = document.querySelectorAll(".icon__del")
    const currentTask = document.querySelectorAll(".task")
    delBtn.forEach((el,i) => {
        el.addEventListener('click', () => {
        currentTask[i].style.display = "none"
        })
    })

    // 7. Edit Icon Function
    var editIcon = document.querySelectorAll(".icon__edit")
    editIcon.forEach((el,i) => {
        el.addEventListener('click', () => {
            taskName[i].contentEditable = true;
        })
    })
})



