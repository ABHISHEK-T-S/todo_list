function addtask(){

    var z = document.getElementById("tasklist");
    
    var task = document.getElementById("task").value;
    console.log(task);
    var time = document.getElementById("time").value;
    console.log(time);
    var date = document.getElementById("date").value;
    console.log(date);

    z.innerHTML=z.innerHTML+'<div class ="tasks" id = "tasks">task : '+task+'<br> date : '+date+'<br>  time : '+time+'</div>';
   

}

var string = '{"items":[{"Desc":"Item1" ,"hello":"world"},{"Desc":"Item2"}]}';

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
localStorage.setItem('added-items', string);

// READ STRING FROM LOCAL STORAGE
var retrievedObject = localStorage.getItem('added-items');

// CONVERT STRING TO REGULAR JS OBJECT
var parsedObject = JSON.parse(retrievedObject);

// ACCESS DATA
console.log(parsedObject.items[0].hello);