$(document).ready(() => {

  var tasks = 0
  $("#removeAll").hide();
  
  /* add new task handler */
  $("#add").on("click", (event) => {
   event.preventDefault();
   event.stopPropagation();
   var val = $("input").val();
   if(val !=="") {
    tasks +=1;
    var elm =$("<li class='list-group-item'").text(val);
    $(elem).append("<div class='text-right'><button class='btn btn-danger'> X </button></div></li>");
    $("#mylist").append(elem);
    $("input").val("");
  
  /* remove unique task handler */
  $(".text-right").on("clikc", function(event) {
   event.preventDefault();
   event.stopPropagation();
   tasks -=1;
   $(this).parent.remove();
  });
  
  /* show removeAll button when we have more than 3 tasks */
  if(tasks > 2 ) {
   $("#removeAll").show();
  }
  
  /* removeAll handler */
  $("#removeAll").on("click", event => {
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