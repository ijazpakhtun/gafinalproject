let task=new TaskManager();
let myform=document.getElementById("myform");
// let taskname=document.getElementById("taksname");
// let description=document.getElementById("description");
// let priority=document.getElementById("priority");
// let assinedto=document.getElementById("assinedto");
// let status=document.getElementById("status");
let datep=document.getElementById("datep");



(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            datep.classList.add("d-block");
          }else{

            const formData=new FormData(form);

          
              task.addTask(formData.get('taskName'),formData.get('description'),formData.get('assinedto'),formData.get('status'), formData.get('priority'),  formData.get('duedate') );
              
              console.log(task.tasks);
            // console.log(formData.get('taskName'));
            form.classList.remove('was-d-block');
            form.reset();
          }
          
          form.classList.add('was-validated')
        }, false)
      })
  })()




//   let task=new TaskManager();
//   task.addTask("test","abc desc", "ijaz", "1234", "todo", "high","123445");
  
//   console.log(task.tasks);







// myform.onsubmit=(e)=>{

//     e.preventDefault();

//     if(taskname.value.length <5){
//         console.log("Task name is required and should of minumum 5 characters");
//     }
    
    

// };



// document.getElementById("myform").addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("you are here");
//   });

// const form = document.querySelector("#myform");

// form.addEventListener("submit", (event) => {
//   const validateName = document.querySelector("#new-task-name");
//   const validateDescription = document.querySelector("#new-task-description");
//   const validateAssignedTo = document.querySelector("#new-task-assigned-to");
//   const validateDueDate = document.querySelector("#new-task-due-date");
//   const validateStatus = document.querySelector("#new-task-status");
//   let validationFail = 0;
// });
