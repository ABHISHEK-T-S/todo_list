
function addtask() {

    var z = document.getElementById("tasklist");

    var task = document.getElementById("task").value;

    var time = document.getElementById("time").value;

    var date = document.getElementById("date").value;

    var parsedObject = JSON.parse(retrievedObject);
    //str1 = str1 + ',{"task":"' + task + '" ,"date":"' + date + '","time":"' + time + '"}';
    var str1 = '{"task":"' + task + '" ,"date":"' + date + '","time":"' + time + '"},{"time":"t"}';
    retrievedObject = retrievedObject.slice(0, -14);
    if (parsedObject.length >= 1) {
        retrievedObject = retrievedObject + ',' + str1 + ']}';
    }
    else {
        retrievedObject = retrievedObject + str1 + ']}';
    }
    //console.log(retrievedObject);



    // DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
    localStorage.setItem('added-items', retrievedObject);

    // READ STRING FROM LOCAL STORAGE
    var retrievedObject2 = localStorage.getItem('added-items');


    // CONVERT STRING TO REGULAR JS OBJECT
    var parsedObject = JSON.parse(retrievedObject2);
    limit = parsedObject.taskitems.length;

    // ACCESS DATA

    //console.log(parsedObject.taskitems[limit-2].task);
    z.innerHTML = z.innerHTML + '    <div class="row task" id="tasks">\
        <div class="col-9">\
        task : ' + parsedObject.taskitems[limit - 2].task + '<br> date : ' + parsedObject.taskitems[limit - 2].date + '<br>  time : ' + parsedObject.taskitems[limit - 2].time + '\
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
function closedd(te) {
    var prettt = te.parentElement.parentElement.parentElement.children[0].innerHTML;
    //console.log(prettt.trim());
    var retrievedObject3 = localStorage.getItem('added-items');
    var parsedObject3 = JSON.parse(retrievedObject3);
    length = parsedObject3.taskitems.length;

    //console.log(ift);
    te.parentElement.parentElement.parentElement.remove()
    var retrievedObject3 = localStorage.getItem('added-items');
    var parsedObject3 = JSON.parse(retrievedObject3);

    // if(prettt.trim()==ift.trim()){console.log("suc");}


    for (var i = 0; i < length - 1; i++) {
        var ift = 'task : ' + parsedObject3.taskitems[i].task + '<br> date : ' + parsedObject3.taskitems[i].date + '<br>  time : ' + parsedObject3.taskitems[i].time;
        if (prettt.trim() == ift.trim()) {
            //console.log("sucess");
            parsedObject3.taskitems.splice(i, 1);
            //console.log(parsedObject3);
            localStorage.clear();
            var stringified = JSON.stringify(parsedObject3);
            //console.log(stringified);
            localStorage.setItem('added-items', stringified);
        }

    }

}

var limit;
var z = document.getElementById("tasklist");

var retrievedObject = localStorage.getItem('added-items');
var parsedObject = JSON.parse(retrievedObject);

if (retrievedObject == null) {
    retrievedObject = '{"taskitems":[' + '{"time":"r"}]}';
}
else {
    // CONVERT STRING TO REGULAR JS OBJECT
    //console.log(retrievedObject);
    var parsedObject = JSON.parse(retrievedObject);
    limit = parsedObject.taskitems.length;
    for (var i = 0; i < limit - 1; i++) {

        //console.log(parsedObject.taskitems[i].task);
        z.innerHTML = z.innerHTML + '    <div class="row task" id="tasks">\
        <div class="col-9">\
        task : ' + parsedObject.taskitems[i].task + '<br> date : ' + parsedObject.taskitems[i].date + '<br>  time : ' + parsedObject.taskitems[i].time + '\
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
}