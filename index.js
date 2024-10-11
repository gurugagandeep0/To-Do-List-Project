let inputvalue = document.getElementById('taskInput');
let addtask = document.querySelector(".btn");
let taskList = document.querySelector(".task-list")


addtask.addEventListener('click',()=>{
    let taskvalue=inputvalue.value
    if(taskvalue===""){
        alert('Enter the Task Please !!!')
    }

    else{
        let task = document.createElement('li')
        task.innerHTML =taskvalue ;       
         taskList.appendChild(task);
        
         let deletebtn = document.createElement('button')
         deletebtn.innerText='remove'
         task.appendChild(deletebtn)

         deletebtn.addEventListener('click',()=>{
            taskList.removeChild(task)
         })

         let completeTask = document.createElement('button');
         completeTask.innerText='Done'
         task.appendChild(completeTask);

         completeTask.addEventListener('click',()=>{
            task.style.backgroundColor='#51DF70';
         })
    }
     inputvalue.value="";
})