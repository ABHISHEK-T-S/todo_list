var str1='{},';


function addtask(){

    var z = document.getElementById("tasklist");
    
    var task = document.getElementById("task").value;
    console.log(task);
    var time = document.getElementById("time").value;
    console.log(time);
    var date = document.getElementById("date").value;
    console.log(date);

    z.innerHTML=z.innerHTML+'<div class ="tasks" id = "tasks">task : '+task+'<br> date : '+date+'<br>  time : '+time+'</div>';
    
     str1 =str1+'{"task":"'+task+'" ,"date":"'+date+'"},';
    
    var string = '{"taskitems":['+str1+']}';
    console.log(string);

    // DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
    localStorage.setItem('added-items', string);
    
    // READ STRING FROM LOCAL STORAGE
    var retrievedObject = localStorage.getItem('added-items');
    
    // CONVERT STRING TO REGULAR JS OBJECT
    var parsedObject = JSON.parse(retrievedObject);
    
    // ACCESS DATA
    for(i=0 ;i<10;i++){
        console.log(parsedObject.taskitems[i].task);
    }
        

}

