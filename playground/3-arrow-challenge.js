// const tasks = {
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     },{
//         text: 'Clean yard',
//         completed: false
//     }, {
//         text: 'Film course',
//         completed: false
//     }]
// }

// console.log(tasks.getTasksToDo())

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // getTasksToDo() {
    //     const tasksToDo = this.tasks.filter((task) => {
    //         return task.completed === false
    //     })
    //     return tasksToDo  
    // }
    getTasksToDo() {
        // const tasksToDo = this.tasks.filter((task) => task.completed === false)
        // return tasksToDo  
        return this.tasks.filter((task) => task.completed === false)
        
    }
}

console.log(tasks.getTasksToDo())