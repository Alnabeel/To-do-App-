let input=document.querySelector(".inputtext");
let btn=document.querySelector(".add");

btn.addEventListener("click", addlist);
function addlist(e) {
    const notcompleted=document.querySelector(".notcompletedtask")
    const completedtask= document.querySelector(".completedtask");

        let newlist= document.createElement("li");
        let span=document.createElement("span")
        let completebutton=document.createElement("button");
        let deletebutton=document.createElement("button");
        let editbutton= document.createElement("button")
         let btnvalue1=document.createTextNode("Complete");
         let btnvalue2= document.createTextNode("Delete")
         let btnvalue3= document.createTextNode("Edit")
         completebutton.appendChild(btnvalue1);
         deletebutton.appendChild(btnvalue2);
         editbutton.appendChild(btnvalue3);
        
        if(input.value==""){
            alert("Please Enter Your Task");
        }else{
           
         console.log(input.value)

            notcompleted.appendChild(newlist);
            newlist.appendChild(span)
            newlist.appendChild(completebutton);
            newlist.appendChild(deletebutton);
            newlist.appendChild(editbutton);
           newlist.firstElementChild.textContent=input.value;
            input.value="";          
        }
        completebutton.addEventListener("click", function(){
            const parent= this.parentNode;
            parent.remove(parent);
            completedtask.appendChild(parent);
            completebutton.style.display="none" ;
            editbutton.style.display="none" ;          
        
        });
        deletebutton.addEventListener("click", function(){
            const parent= this.parentNode;
            parent.remove(parent);
        });
        editbutton.addEventListener("click",function(){
            const parentvalue=this.parentElement.firstChild.textContent;
            input.value=parentvalue;
            this.parentNode.remove();
            console.log(parentvalue);
        })
}  
