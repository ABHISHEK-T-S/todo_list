var str1='{}';
var limit;


function addtask(){

    var z = document.getElementById("tasklist");
    
    var task = document.getElementById("task").value;
    
    var time = document.getElementById("time").value;
    
    var date = document.getElementById("date").value;
   
    str1 =str1+',{"task":"'+task+'" ,"date":"'+date+'","time":"'+time+'"}';
    
    var string = '{"taskitems":['+str1+']}';
    console.log(string);

    // DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
    localStorage.setItem('added-items', string);
    
    // READ STRING FROM LOCAL STORAGE
    var retrievedObject = localStorage.getItem('added-items');
    
    // CONVERT STRING TO REGULAR JS OBJECT
    var parsedObject = JSON.parse(retrievedObject);
    limit=parsedObject.taskitems.length;
    
    // ACCESS DATA
    for(var i=1 ;i<limit;i++){
        console.log(parsedObject.taskitems[i].task);
        z.innerHTML=z.innerHTML+'<div class ="tasks" id = "tasks">task : '+parsedObject.taskitems[i].task+'<br> date : '+parsedObject.taskitems[i].date+'<br>  time : '+parsedObject.taskitems[i].time+'</div>';
    }
    
}
var retrievedObject = localStorage.getItem('added-items');
    
// CONVERT STRING TO REGULAR JS OBJECT
var parsedObject = JSON.parse(retrievedObject);
limit=parsedObject.taskitems.length;
for(var i=1 ;i<limit;i++){
    var z = document.getElementById("tasklist");
    console.log(parsedObject.taskitems[i].task);
    z.innerHTML=z.innerHTML+'<div class ="tasks" id = "tasks">task : '+parsedObject.taskitems[i].task+'<br> date : '+parsedObject.taskitems[i].date+'<br>  time : '+parsedObject.taskitems[i].time+'</div>';
}

