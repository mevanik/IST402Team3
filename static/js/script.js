$(document).ready(() => {                                          // wait for the HTML document to fully loaded and ready

  var tasks = 0;                                                     // stores the nomber of tasks in the list 
  $("#removeAll").hide();                                            // initialy hide the removeAll button 
  
  /* add task new task hander */
  $("#add").on("click", (event) => {                                  // add listner to 'click' event
      event.preventDefault();                                         // prevent the default action of the event 
      event.stopPropagation();                                        // stop the event from the building up the other elements
      var val = $("input").val();                                    // get the value from the input
      if (val !=="") {                                               // check if the input value is not empty
          tasks += 1;                                                // add 1 to the counter
          var elem = $("<li class='list-group-item'>").text(val);     // prepare the elment to diplay for a new task
          $(elem).append("<div class='text-right'><button class='btn btn-danger'> X </button></div></li>"); 
          $("#mylist").append(elem);                                  // append the new task element to mylist element 
          $("input").val("");                                         // clear the input
         
          /* remove unique task hander */
          $(".text-right").on("click", function(event) {
              event.preventDefault();
              event.stopPropagation()
              tasks -= 1; 
              $(this).parent().remove();            
          });
          /* show removeAll button when we have more than 3 tasks */
          if(tasks > 2)  {
              $("#removeAll").show();
          }
          /* removeAll hander */
          $("#removeAll").on("click", (event) => {
              event.preventDefault(); 
              event.stopPropagation();
              $(".disabled").siblings().remove();
              tasks = 0; 
              $("#removeAll").hide();
          });
      }
  });
  });  
/* var input = document.querySelectorAll('#enter input[type=text]')[0],
    entries = {},
    completed = {},
    reminders = {
      create: function(text) {
        if (text != '') {
          var entry = Date.now();
          if (localStorage.entries) {
            entries = JSON.parse(localStorage.entries);
          }
          entries[entry] = text;
          localStorage.entries = JSON.stringify(entries);
          input.value = '';
          reminders.display('entries');
        }
        input.focus();
      },
      display: function(list) {
        var list = JSON.parse(localStorage[list]);
        for (var entry in list) {
          var box = document.createElement('section'),
              task = document.createElement('input'),
              exit = document.createElement('input');
          task.type = 'text';
          task.setAttribute('onblur', 'reminders.edit(this.value, this.parentNode.id)');
          task.value = list[entry];
          exit.type = 'button';
          exit.setAttribute('onclick', 'reminders.complete(this.parentNode.id)');
          exit.value = '×';
          box.id = entry;
          box.appendChild(task);
          box.appendChild(exit);
          if (!document.getElementById(entry)) {
            document.getElementsByTagName('body')[0].insertBefore(box, document.getElementById('enter'));
          }
        }
      },
      edit: function (text, id) {
        entries = JSON.parse(localStorage.entries);
        entries[id] = text;
        localStorage.entries = JSON.stringify(entries);
      },
      complete: function (id) {
        entries = JSON.parse(localStorage.entries);
        if (localStorage.completed) {
          completed = JSON.parse(localStorage.completed);
        }
        completed[id] = entries[id];
        delete entries[id];
        localStorage.completed = JSON.stringify(completed);
        localStorage.entries = JSON.stringify(entries);
        reminders.display('entries');
        document.getElementById(id).remove();
      }
    }
document.onkeydown = function(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
  if (charCode == 13) { reminders.create(input.value); } /* enter key creates new reminder 
}
reminders.display('entries'); */