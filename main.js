let input= document.querySelector("#input");
let btn= document.querySelector(".btn");
let list=document.querySelector("#list");
let date= document.querySelector("#inputdate");

btn.addEventListener("click", ()=>{
    if(input.value==0){
        alert("Please Enter Your Task");
        // <li class="newlist">ed<li class="styledate"> </li></li>
    }else if (date.value==0){
        alert("please enter date");
    }
    else{
        var newlist= document.createElement("li");
        newlist.classList.add("newlist");
        newlist.innerText += `${input.value}`;
        newlist.innerHTML += `<time class='styledate'> ${date.value}</time>
        <button style="margin-right: 0;">Delete </button>`
        list.appendChild(newlist);
        input.value="";
        date.value="";
        

        newlist.addEventListener("click", ()=>{
            newlist.style.textDecoration="line-through"

        })
        newlist.addEventListener("dblclick", ()=>{
            list.removeChild(newlist);

    
})
    }


})





