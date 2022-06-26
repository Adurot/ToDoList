
//import {trick} from './magic.js'
import { addDays, compareAsc, format } from 'date-fns'
import { item } from './items.js'
// Item attributes: title, description, dateAssigned, extraDays, priority, index, list



let i = 0;
let j = 0;
let taskTime = 540;
let btnDue = [];
let btnMinus = [];
let btnHigh = [];
let btnMed = [];
let btnLow = [];
const today = new Date();
const due = new Date();
due.setDate(today.getDate() + taskTime);
const day = due.getDate();
const month = due.getMonth() + 1;
const year = due.getFullYear();
const toDo = [];

function dateAssigned(origDate, extraDays) {
    const due = new Date();
    due.setDate(origDate.getDate() + extraDays);
    const day = due.getDate();
    const month = due.getMonth() + 1;
    const year = due.getFullYear();
    return month + '/' + day + '/' + year
}



function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
}
else {
    // Too bad, no localStorage for us
}

let tempo = localStorage.getItem('date');
console.log(localStorage.getItem('date'))

toDo[i] = new item("Task Title", "Task Description", new Date(), 0, 'High', i, 'default');

i++;
toDo[i] = new item(10, 'testing description', new Date(), 7, 'Medium', i, 'default');
i++;
toDo[i] = new item(10, 10, new Date(), 2, 'Low', i, 'work');
i++;
//console.log(toDo[i].priority + " Due Date for " + i)
let listType = 'default';

//let newObject = window.localStorage.getItem("toDo");
//console.log(JSON.parse(newObject));
//toDo[1]= JSON.parse(newObject);


//toDo[1].extraDays=localStorage.getItem('date')

//retrieve saved information
for (let m = 0; m < toDo.length; m++) {

    if (localStorage.getItem('extraDays' + m) !== undefined);
    {
        toDo[m].extraDays = localStorage.getItem('extraDays' + m)
    }
    if (localStorage.getItem('priority' + m) !== undefined);
    {
        toDo[m].priority = localStorage.getItem('priority' + m)

    }
}
    let btn = document.createElement("button");
    let btnFin = [];
    btn.innerHTML = "Default";
    btn.onclick = function () {
        listType = 'default';
        clrList();
        chooseList(listType);

    };


    let btnCustom = document.createElement("button");
    btnCustom.innerHTML = "Custom";
    btnCustom.onclick = function () {
        listType = 'Custom';
        clrList();
        chooseList(listType);

    };

    let btnWork = document.createElement("button");
    btnWork.innerHTML = "Work";
    btnWork.onclick = function () {
        listType = 'work';
        clrList();
        chooseList(listType);

    };


    let btnChores = document.createElement("button");
    btnChores.innerHTML = "Chores";
    btnChores.onclick = function () {
        listType = 'chores';
        clrList();
        chooseList(listType);

    };


    let btnFinished = document.createElement("button");
    btnFinished.innerHTML = "Finished";
    btnFinished.onclick = function () {
        listType = 'finished';
        clrList();
        chooseList(listType);

    };


    let btnNewList = document.createElement("button");
    btnNewList.innerHTML = "New List";
    btnNewList.onclick = function () {
        var list = prompt("Name of new list?");
        let btnCustom = document.createElement("button");
        btnCustom.innerHTML = list;
        btnCustom.onclick = function () {
            listType = list;
            clrList();
            chooseList(listType);

        };

        document.getElementById("title").appendChild(btnCustom);
    };



    function clrList() {

        let element = document.getElementById("container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);

            //localStorage.setItem('date', toDo[1].extraDays);
            //localStorage.setItem('toDo',  JSON.stringify(toDo[1]));




            //let temp=localStorage.getItem('date')
            //let temp=localStorage.getItem('date')

            //console.log(temp);
        }
    }
    function pageLoad() {

        let divt = document.createElement("div");
        divt.id = "dtitle";
        divt.className = "title";
        divt.style = "background-color: blue;";
        divt.style.width = "1200px";
        divt.style.height = "120px";
        divt.innerHTML = "Version 1";
        document.body.appendChild(divt);


        let h1 = document.createElement("h1");

        h1.id = "title";

        h1.style.width = "500px";
        h1.style.height = "20px";
        h1.innerHTML = "Choose ToDo List <br>";
        document.getElementById("dtitle").appendChild(h1);

        let container = document.createElement("div");
        container.id = "container";
        document.body.appendChild(container);


        let btnAddToDo = document.createElement("button");
        btnAddToDo.innerHTML = "Add a Task";
        btnAddToDo.onclick = function () {
            var name = prompt("Name of new task?");
            var description = prompt("Description (optional)");
            toDo[i] = new item(name, description, new Date(), 0, 'Medium', i, listType);

            i++;
            clrList();
            chooseList(listType);

        };
        document.getElementById('content').appendChild(btnAddToDo);
    }



    function listLoad() {


        let div = document.createElement("div");
        div.id = "div" + toDo[j].index;
        div.className = "toDo";
        div.style = "background-color: yellow;";
        div.style.width = "1200px";
        div.style.height = "400px";
        document.getElementById("container").appendChild(div);

        let h3 = document.createElement("h4");

        h3.id = toDo[j].index;



        h3.style.width = "300px";
        h3.style.height = "50px";
        h3.innerHTML = "<span>Item number</span> <br>" + toDo[j].index + "<br> <span><u>Title</u></span><br>" + toDo[j].title;
        document.getElementById("div" + toDo[j].index).appendChild(h3);
        h3.style = "background-color: lightgreen;";

        btnFin[h3.id] = document.createElement("button");
        btnFin[h3.id].innerHTML = "Mark as Finished";
        btnFin[h3.id].onclick = function () {
            toDo[h3.id].list = "finished";

            clrList();
            chooseList(listType);

        };
        //save
        for (let m = 0; m < toDo.length; m++) {
            localStorage.setItem('extraDays' + m, toDo[m].extraDays);

        }
        for (let m = 0; m < toDo.length; m++) {
            localStorage.setItem('priority' + m, toDo[m].priority);

        }

        document.getElementById(h3.id).appendChild(btnFin[h3.id]);


        let h4 = document.createElement("h4");
        h4.id = "description" + toDo[j].index;

        h4.style.width = "300px";
        h4.style.height = "50px";
        h4.innerHTML = "<br> <span>Description</span> <br>" + toDo[j].description;
        document.getElementById("div" + toDo[j].index).appendChild(h4);

        let hDue = document.createElement("h4");

        hDue.id = "hDue" + toDo[j].index;

        hDue.style.width = "300px";
        hDue.style.height = "50px";
        hDue.innerHTML = "<br> <span>Due Date</span><br>" + dateAssigned(toDo[j].dateAssigned, toDo[j].extraDays);
        document.getElementById("div" + toDo[j].index).appendChild(hDue);
        //adds time to due date
        btnDue[j] = document.createElement("button");
        btnDue[j].innerHTML = "Add a Day";

        btnDue[j].addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser

            toDo[h3.id].extraDays++;


            clrList();
            chooseList(listType);

        });
        document.getElementById("hDue" + toDo[j].index).appendChild(btnDue[j]);

        btnMinus[j] = document.createElement("button");
        btnMinus[j].innerHTML = "Subtract a Day";

        btnMinus[j].addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser

            toDo[h3.id].extraDays--;


            clrList();
            chooseList(listType);

        });
        document.getElementById("hDue" + toDo[j].index).appendChild(btnMinus[j]);

        function addDays() {
            alert(toDo[j].extraDays)
        }


        let hpriority = document.createElement("h4");
        hpriority.id = "<span>description</span><br>" + toDo[j].index;

        hpriority.style.width = "300px";
        hpriority.style.height = "50px";
        hpriority.innerHTML = "<br> <span>Priority</span><br>" + toDo[j].priority + "<br>";
        document.getElementById("div" + toDo[j].index).appendChild(hpriority);

        btnHigh[j] = document.createElement("button");
        btnHigh[j].innerHTML = "High";

        btnHigh[j].addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser

            toDo[h3.id].priority = 'High';


            clrList();
            chooseList(listType);

        });
        document.getElementById("<span>description</span><br>" + toDo[j].index).appendChild(btnHigh[j]);

        btnMed[j] = document.createElement("button");
        btnMed[j].innerHTML = "Medium";

        btnMed[j].addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser

            toDo[h3.id].priority = 'Medium';


            clrList();
            chooseList(listType);

        });
        document.getElementById("<span>description</span><br>" + toDo[j].index).appendChild(btnMed[j]);

        btnLow[j] = document.createElement("button");
        btnLow[j].innerHTML = "Low";

        btnLow[j].addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser

            toDo[h3.id].priority = 'Low';


            clrList();
            chooseList(listType);

        });
        document.getElementById("<span>description</span><br>" + toDo[j].index).appendChild(btnLow[j]);


        let hlist = document.createElement("h4");
        hlist.id = "description" + toDo[j].index;

        hlist.style.width = "300px";
        hlist.style.height = "50px";
        hlist.innerHTML = "<br> <span>List</span> for number " + toDo[j].index + " To Do is " + toDo[j].list;
        document.getElementById("div" + toDo[j].index).appendChild(hlist);

    }

    pageLoad();
    chooseList('default');

    function chooseList(listType) {
        for (j = 0; j < toDo.length; j++) {
            if (toDo[j].list == listType) { listLoad(); }
        }


    }


    document.getElementById("title").appendChild(btn);
    document.getElementById("title").appendChild(btnWork);
    document.getElementById("title").appendChild(btnChores);
    document.getElementById("title").appendChild(btnFinished);
    document.getElementById("title").appendChild(btnNewList);

 //localStorage.setItem('list', toDo[1].value);
 //localStorage.setItem('toDo', toDo[1]);
