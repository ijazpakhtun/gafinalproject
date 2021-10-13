let task=new TaskManager();
task.render(task.load());
let myform=document.getElementById("myform");
let taskname=document.getElementById("taskname");
let description=document.getElementById("description");
let assinedto=document.getElementById("assinedto");
let status=document.getElementById("status");
let priority=document.getElementById("priority");
let duedate=document.getElementById("duedate");
let reset=document.getElementById("reset");

// let priority=document.getElementById("priority");
// let assinedto=document.getElementById("assinedto");
// let status=document.getElementById("status");
let datep=document.getElementById("datep");

description.classList.remove("is-invalid");

description.addEventListener('keyup',function () {

    if((description.value.toString().trim()).length>=5 && (description.value.toString().trim()).length<=10)
        description.classList.remove("is-invalid");
});
taskname.addEventListener('keyup',function () {
    if(taskname.value.length>=5 && taskname.value.length<=10)
       taskname.classList.remove("is-invalid");
});





  reset.addEventListener('click',resetform);


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
              task.save();
              task.render();
              
              let formModal=document.getElementById("exampleModalCenter");

              $('#exampleModalCenter').modal('hide');
                $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();



              resetvalues();
              form.classList.remove('was-d-block');
              form.validate=false;
              resetform();
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
      task.save();
    // Render the tasks
      task.render();

    }

    if(event.target.classList.contains("delete-button")){

      const parentTask =event.target.parentElement.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);
      task.deleteTask(taskId);
      task.save();
      task.render();
     
    }
   
  });


  $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
    resetform();
    })
    function resetform() {
      document.querySelector('#taskname').classList.remove('is-invalid');
      document.querySelector('#description').classList.remove('is-invalid');
      document.querySelector('#myform').classList.remove('was-validated');
      resetvalues();
    }

    function resetvalues(){

      taskname.value="";
      description.value="";
      duedate.value="";
      assinedto.value="";
      status.value="";
      priority.value="";
      duedate.value="";

    }