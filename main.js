let input= document.querySelector("#input");
let btn= document.querySelector(".btn");
let list=document.querySelector("#list");
let date= document.querySelector("#inputdate");

btn.addEventListener("click", ()=>{
        var newlist= document.createElement("li");
        newlist.classList.add("newlist");
        newlist.innerText += `${input.value}`;
        newlist.innerHTML += `<li class=styledate> ${date.value}</li>`
        list.appendChild(newlist);
        input.value="";
        date.value="";
        newlist.addEventListener("click", ()=>{
            newlist.style.textDecoration="line-through"

        })
        newlist.addEventListener("dblclick", ()=>{
            list.removeChild(newlist);

    
})

})




