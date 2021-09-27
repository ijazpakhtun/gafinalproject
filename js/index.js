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
            form.validate=true;
            const formData=new FormData(form);
            let taskname=formData.get("taskName");
            let description=formData.get("description");

           let chtn=(taskname.toString()).trim();
           let chdesc=(description.toString()).trim();



          if (!form.checkValidity() || chtn==='' || chdesc==='' ) {
            event.preventDefault();
            event.stopPropagation();
            // taskname.classList.add("is-invalid");
            // taskname.classList.remove("is-valid");
            
            if(datep==='')
              datep.classList.add("d-block");
          }else{

           
              task.addTask(formData.get('taskName'),formData.get('description'),formData.get('assinedto'),formData.get('status'), formData.get('priority'),  formData.get('duedate') );

              task.render();
              
              let formModal=document.getElementById("exampleModalCenter");
            //   formModal.style.display='none';
            //   formModal.classList.remove='modal-backdrop';


            //   var myModal = new bootstrap.Modal(document.getElementById('exampleModalCenter')); // after validation occurs and it is successful, you can now use the variable you defined to call a BootStrap method - this would be inside your successful if statement
                // myModal('hide');

              $('#exampleModalCenter').modal('hide');
                $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();


           
              form.classList.remove('was-d-block');
              form.validate=false;
              form.reset();
              return false;
          }
          
          form.classList.add('was-validated')
        }, false)
      })
  })();


  let tasklist=document.getElementById("tasklist");

  tasklist.addEventListener('click',(event)=>{

    if(event.target.classList.contains("done-button")){

      const parentTask =event.target.parentElement.parentElement.parentElement;
      const taskId = (parentTask.dataset.taskId);
      const taska= task.getTaskById(taskId);
      
      taska.status = "Done";

    // Render the tasks
    task.render();

    }
   
  });

//   let taskHtml=createTaskHtml('taskone', 'task desc', 'ijaz', 'high', 'pending', 'date');

//   console.log(taskHtml);


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
