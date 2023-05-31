pElm=document.querySelectorAll("p")
pElm[1].innerText="there are "+users.length+" people in the DB!"

let element=Array.from( document.querySelectorAll("li"))
element[0].remove()

for (i=0; i<users.length ;i++){
    document.querySelector("ul").insertAdjacentHTML("afterbegin","<li> "+
    "name: "+users[i].name+
    "join data: "+users[i].joined+
    "</li>")
}



