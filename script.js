const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");


function addtask(){
    if(inputBox.value ===''){
        alert("you must enter any task to save")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="<b> \u00d7 </b>";
        li.appendChild(span);
    } 
    inputBox.value="";  
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="li"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    
},false);


