let divTarefa = document.querySelector('.taskList')
let ulTarefa = document.createElement('ul')
divTarefa.appendChild(ulTarefa)


function listaTarefas(listaDeProdutos) {

    for (let i = 0; i < listaDeProdutos.length; i++) {
        let taskTipo = listaDeProdutos[i].tipo

        if (taskTipo == 'urgente') {

            let liTask = document.createElement('li')
            liTask.classList.add('li-style')
            liTask.innerText = listaDeProdutos[i].titulo
            ulTarefa.appendChild(liTask)
        }
    }
    for (let i = 0; i < listaDeProdutos.length; i++) {
        let taskTipo = listaDeProdutos[i].tipo

        if (taskTipo == 'prioritário') {

            let liTask = document.createElement('li')
            liTask.classList.add('li-style')
            liTask.innerText = listaDeProdutos[i].titulo
            ulTarefa.appendChild(liTask)
        }
    }
    for (let i = 0; i < listaDeProdutos.length; i++) {
        let taskTipo = listaDeProdutos[i].tipo

        if (taskTipo == 'normal') {

            let liTask = document.createElement('li')
            liTask.classList.add('li-style')
            liTask.innerText = listaDeProdutos[i].titulo
            ulTarefa.appendChild(liTask)
        }
    }
}
listaTarefas(tasks)
