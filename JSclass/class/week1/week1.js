const fName='first name';
// smaller amount of memory and can not be change

// console.log(fName);
// console log: node .\scriptname.js

// fName="new name "; // this will cause error since its defined as a const.
// console.log(fName);
// let is meant more for a loop and blocks


//arrays 
const ids=[1,2,3];

// i can use object.freeze to not allow delete/add properties. 
// Object.freeze(ids);

//array have methods. 
ids.push(4,5); //can change since the pointer is pointing to the same first item. 
ids.pop() // removes items from array. 
// console.log(ids);

// object litterals 
const post={
    id:1,
    title: "new post",
}
// cannot change this 
post.slug="little chery"; // can add properties to the object.  
// console.log(post.slug);

delete post.slug; //can delete property from object.  
// console.log(post.slug);



// give a custom string 
const name="Smith";
console.log(`<header> hello ${name} hope you enjoy ${post.title} </header>
    ${2*20}`
    );  // to active need to use ` 
    // inside the ${ } can be any js. 




// arrow functions 

function getArea(length, width, unit){
    return `${length*width} ${unit}`;
}
// console.log( getArea(4,5,"m2"));

const getArea1= (param1, param2) =>{
    return param1 *param2;
};
// console.log( getArea1(4,5));

const getAppleSauce= () =>{ return "apple sauce"};
// console.log(getAppleSauce());



//turnery 
let loggedIn=true;
// console.log(loggedIn ? "welcome" : "log in " )



// array list 
let array1=[1,2,3];
let array2=[4,5,6];
array1.push(... array2); // the ... adds the individual elements. otherwise [ 1,2,3 [4,5,6]] 
console.log(array1)



const library= {
    render : () => console.log("i have been rendered"),
    notify : () => console.log("i have been notified "),
    save : () => console.log("i have been saved "),
}
const {render, notify:push } =library; //i gave the name push to notify 
// render();
// push(); 
    //take the lib and deconstruct it into methods 
    // push we give it a value of notify 
    // allows me to get the function out of the library and have it independetly




//call back functions
let posts= [{title:"this no ", id:1 },{title:"this yes ", id:2}];
let x = posts.map( post =>render(post));
function render(input){ //i got into the object and call its properties
    console.log(input.title);
    console.log(input.id);
}

// filter acts like map but looks for expression -true? keeps -false: excludes 
let newPosts= posts.filter((post)=>post.title.includes('React'));
// console.log(newPosts);