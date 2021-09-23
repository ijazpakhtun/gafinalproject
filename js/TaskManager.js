const createTaskHtml=(name, description, assinedTo, priority, dueDate, status )=>{

    const myCard=`
    
    <div class="col-md-4 col-lg-4">
    
    <div class="card " >
            <div class="card-header bg-transparent text-center "><strong>${name}</strong> </div>
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
        "currnetId":this.currentId,
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
}

