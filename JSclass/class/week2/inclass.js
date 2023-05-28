document.querySelector("p strong"); // selects inside the p tag the first strong 
let nodeList=document.querySelectorAll("p");        // will select all the elements p
    // this isent an array but its a node list. 
    // have to convert to array. 
let jsArray= Array.from(nodeList);



