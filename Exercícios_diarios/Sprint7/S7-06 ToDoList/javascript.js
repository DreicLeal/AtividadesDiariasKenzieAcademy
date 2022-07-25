let divTarefa = document.querySelector('.taskList')
let ulTarefa = document.createElement('ul')
divTarefa.appendChild(ulTarefa)


let inputField = document.querySelector('.inputField')
let priority = document.querySelector('select')
let btn = document.querySelector('.addTask')

let urgentTasks = []
let priorityTasks = []
let normalTasks = []

btn.addEventListener('click', function () {
    let fieldValue = inputField.value.trim()
    let pValue = priority.value
    if (fieldValue !== "" && pValue !== "") {
        if(pValue == 'urgente'){

            let nTask = {}
                nTask.titulo = fieldValue,
                nTask.tipo = pValue
            
            urgentTasks.unshift(nTask)
            inputField.value = ''
            priority.value = '' 
        }else if(pValue == 'prioritario'){

            let nTask = {}
                nTask.titulo = fieldValue,
                nTask.tipo = pValue
            
            priorityTasks.unshift(nTask)
            inputField.value = ''
            priority.value = '' 
        }else if(pValue == 'normal'){

            let nTask = {}
                nTask.titulo = fieldValue,
                nTask.tipo = pValue
            
            normalTasks.unshift(nTask)
            inputField.value = ''
            priority.value = '' 
        }
    }
    assemble(tasks)
})

function selectTasks(sTask,urgent,priority,norm){
    for(let i=0;i<sTask.length;i++){
        let type = sTask[i].tipo
        if(type == 'urgente'){
            urgent.unshift(sTask[i])
        }else if(type == 'prioritário'){
            priority.unshift(sTask[i])
        }else if(type == 'normal'){
            norm.unshift(sTask[i])
        }

        console.log(urgent)
        console.log(priority)
        console.log(norm)
    }

}
selectTasks(tasks, urgentTasks, priorityTasks, normalTasks)

function assemble(arrTask){
    for(let i=0; i<arrTask.length;i++){
        let liTask = document.createElement('li')
        liTask.classList.add('li-style')
        liTask.innerText = arrTask[i].titulo
        ulTarefa.appendChild(liTask)
    }
}
assemble(urgentTasks)
assemble(priorityTasks)
assemble(normalTasks)
