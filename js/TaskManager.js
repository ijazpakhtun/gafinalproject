class TaskManager{

    constructor (currentId=0){
        this.currentId=currentId;
        this.tasks=[];

    }

     addTask(name, description, assinedTo, dueDate,status, priority) {

        this.currentId++;
       this.tasks.push({
        taskName:name,
        description:description,
        assinedTo:assinedTo,
        status:status,
        priority:priority,
        dueDate:dueDate,

       });

        
    }
}

