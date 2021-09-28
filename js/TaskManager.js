const createTaskHtml=(id, name, description, assinedTo,status, priority,  dueDate )=>{

    const myCard=`
    
    <div class="col-md-4 col-lg-4" data-task-id="${id}">
    
    <div class="card " >
            <div class="card-header ${status==='Done'?'bg-success':''} text-center "><strong>${name}</strong> </div>
            <div class="card-body ">
            <p><span  class="fw-bold fs-2" ><strong>Author Name : ${assinedTo}</strong></span></p>  
            <p><strong>Assigned To : ${assinedTo}</strong></p>  
            <p class="card-text">${description}</p>

            
            <div class="col-md-12 col-lg-12">
                <h5><strong>Due Date : ${dueDate}</strong></h5>
                <h5 ><strong>Priority : ${priority}</strong></h5>  
                <h5><strong>Status : ${status}</strong></h5>  
            </div> 
            
            
            </div>
            <div class="card-footer bg-transparent border-success text-right ">
                <strong>Action :</strong>
                ${status==='Done'?'':'<button type="submit" class="btn btn-info  done-button" id="done"> Done</button>'}
                
                <a href="#" class="btn btn-primary 	glyphicon glyphicon-pencil"></a>
                <a href="#" class="btn btn-danger 		glyphicon glyphicon-trash"></a>
            </div>
    </div>
    <br>
</div>
   
    `;

    return myCard;
}




class TaskManager{

    constructor (currentId=0){
        this.currentId=currentId;
        this.tasks=[];

    }

     addTask(name, description, assinedTo, status, priority, dueDate ) {

        this.currentId++;
       this.tasks.push({
        "currentId":this.currentId,
        taskName:name,
        description:description,
        assinedTo:assinedTo,
        status:status,
        priority:priority,
        dueDate:dueDate,

       });  
    }

    render(){
        let tasksHtmlList=[];
        this.tasks.forEach(task => {
           let date=new Date(task.dueDate);
           let formattedDate= date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
           let taskHtml=createTaskHtml(
            task.id=task.currentId,
            task.taskName,
            task.description,
            task.assinedTo,
            task.status,
            task.priority,
            formattedDate,
           );
            tasksHtmlList.push(taskHtml);
        }); 
        let tasksHtml=tasksHtmlList.join("\n");
        let tasklist=document.getElementById("tasklist");
        
        tasklist.innerHTML=tasksHtml;
    }

    getTaskById(taskId){
        let foundTask=[];

        // this.tasks.forEach(task=>{

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if(taskId==task.id){
                
                foundTask=task;
            }
            
            
        }
        return foundTask;
    }
}

