
function addtask() {

    var z = document.getElementById("tasklist");

    var task = document.getElementById("task").value;

    var time = document.getElementById("time").value;

    var date = document.getElementById("date").value;

    var parsedObject = JSON.parse(retrievedObject);
    //str1 = str1 + ',{"task":"' + task + '" ,"date":"' + date + '","time":"' + time + '"}';
    var str1 = '{"task":"' + task + '" ,"date":"' + date + '","time":"' + time + '"},{}';
    retrievedObject=retrievedObject.slice(0,-4);
    if (parsedObject.length>=1){
    retrievedObject = retrievedObject+',' + str1 + ']}';
    }
    else{
        retrievedObject = retrievedObject + str1 + ']}';
    }
    console.log(retrievedObject);

    

    // DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
    localStorage.setItem('added-items', retrievedObject);

    // READ STRING FROM LOCAL STORAGE
    var retrievedObject2= localStorage.getItem('added-items');


    // CONVERT STRING TO REGULAR JS OBJECT
    var parsedObject = JSON.parse(retrievedObject2);
    limit = parsedObject.taskitems.length;

    // ACCESS DATA

        console.log(parsedObject.taskitems[limit-2].task);
        z.innerHTML = z.innerHTML + '    <div class="row task" id="tasks">\
        <div class="col-9">\
        task : ' + parsedObject.taskitems[limit-2].task + '<br> date : ' + parsedObject.taskitems[limit-2].date + '<br>  time : ' + parsedObject.taskitems[limit-2].time + '\
        </div>\
        <div class="col-3">\
            <div class="row">\
                <button class="btn-danger" id="btnclose" onClick=closedd(this)>Close</button>\
            </div>\
            <div class="row">\
                <button class="btn-success" id="btndone" onClick=closedd(this)>Done</button>\
            </div>\
        </div>\
    </div></div>';


}
function closedd(te){
    te.parentElement.parentElement.parentElement.remove()
}

var limit;
var z = document.getElementById("tasklist");

var retrievedObject = localStorage.getItem('added-items');
var parsedObject = JSON.parse(retrievedObject);

if (retrievedObject == null) {
    retrievedObject = '{"taskitems":['+'{}]}';
}
else {
    // CONVERT STRING TO REGULAR JS OBJECT
    console.log(retrievedObject);
    var parsedObject = JSON.parse(retrievedObject);
    limit = parsedObject.taskitems.length;
    for (var i = 0; i < limit-1; i++) {
        
        //console.log(parsedObject.taskitems[i].task);
        z.innerHTML = z.innerHTML + '<div class ="tasks" id = "tasks">task : ' + parsedObject.taskitems[i].task + '<br> date : ' + parsedObject.taskitems[i].date + '<br>  time : ' + parsedObject.taskitems[i].time + '</div>';
    }
}

