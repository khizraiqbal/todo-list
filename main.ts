#! /usr/bin/env node

import inquirer  from "inquirer"


let todos: string[] = [];
let condition = true;

let main = async () => {
while (condition){
    let option = await inquirer.prompt ([{
        name:"choice",
        type:"list",
        message:"select an option you want to do:",
        choices:["Add Task","Delete Task","View todo-list"]

    }
      ]);

      if(option.choice === "Add Task"){ 
        await addtask()
      } 
      else if(option.choice === "Delete Task"){
await Deletetask()
      }

      else if (option.choice === "View todo-list"){
        await Viewtask()
      }

  }
}

let addtask = async () => {
let newtask = await inquirer.prompt([{

name:"task",
type:"input",
message:"Enter your new task:"

}]);
todos.push(newtask.task);
console.log(`\n ${newtask.task} task added sucessfully in todo-list`);
}

let Viewtask = () => {
console.log("\n Your Todo-List: \n");
todos.forEach((task, index) => {

console.log(`${index}: ${task}`)
})
}


let Deletetask = async () => {
await Viewtask()
let taskindex = await inquirer.prompt([{

name:"index",
type:"number",
message: "Enter the 'index no' of the task you want to delete:"

}]);

let Deletetask = todos.splice(taskindex.index,1);
console.log(`\n ${Deletetask} this task has been deleted sucessfully from the list`);


}



main();