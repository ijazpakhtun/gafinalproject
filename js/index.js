let task=new TaskManager();
let myform=document.getElementById("myform");
let taskname=document.getElementById("taskname");
let description=document.getElementById("description");
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
            

           let chtn=(formData.get("taskName").toString()).trim();
           let chdesc=(formData.get("description").toString()).trim();



          if (!form.checkValidity() || chtn==='' || chdesc==='' ) {
            event.preventDefault();
            event.stopPropagation();

            if(chtn=='')
              taskname.classList.add("is-invalid");
              taskname.classList.remove("is-valid");
            if(chdesc=='')
               description.classList.add("is-invalid");
               description.classList.remove("is-valid");
              
            
            if(datep==='')
              datep.classList.add("d-block");
          }else{

           
              task.addTask(formData.get('taskName'),formData.get('description'),formData.get('assinedto'),formData.get('status'), formData.get('priority'),  formData.get('duedate') );

              task.render();
              
              let formModal=document.getElementById("exampleModalCenter");

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
