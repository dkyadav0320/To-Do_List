const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function  addTask(){
if(inputBox.value===''){
    alert("Kindly write something to add!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputBox.value=" ";
reserveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("action");
        reserveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        reserveData();
    }
}, false);

function reserveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function reflectTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
reflectTask();