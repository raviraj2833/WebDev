// Todo app
let TodoApp=[];
let req=prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quit the todo app");
        break;
    }
    if(req=="list"){
        console.log("-------------");
        for(let i=0;i<TodoApp.length;i++){
            console.log(i,TodoApp[i]);
        }
        console.log("--------------");
    }
    else if(req=="add"){
        let task=prompt("please add your task");
        TodoApp.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index=prompt("please enter the task index")
        TodoApp.splice(index,1);
        console.log("tasl deleted");
    }
    req=prompt("please enter your request");

}
