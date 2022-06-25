let input=document.querySelector(".inputtext");
let btn=document.querySelector(".add");

btn.addEventListener("click", addlist);
function addlist(e) {
    const notcompleted=document.querySelector(".notcompletedtask")
    const completedtask= document.querySelector(".completedtask");

        let newlist= document.createElement("li");
        let completebutton=document.createElement("button");
        let deletebutton=document.createElement("button");
         let btnvalue1=document.createTextNode("Complete");
         let btnvalue2= document.createTextNode("Delete")
         completebutton.appendChild(btnvalue1);
         deletebutton.appendChild(btnvalue2);
            
        if(input.value==""){
            alert("Please Enter Your Task");
        }else{
            newlist.textContent=input.value;
            input.value="";

            notcompleted.appendChild(newlist);
            newlist.appendChild(completebutton);
            newlist.appendChild(deletebutton);
        }
        completebutton.addEventListener("click", function(){
            const parent= this.parentNode;
            parent.remove(parent);
            completedtask.appendChild(parent);
            completebutton.style.display="none"            
        
        });
        deletebutton.addEventListener("click", function(){
            const parent= this.parentNode;
            parent.remove(parent);
        })   
}  
