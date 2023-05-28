// --------------UNFINISHED -----------
    // challenge: 10,8,4,3



// challenge 1 
// for the function get area add a default value to all parameter
function getArea(width=5, length=3, unit="m2"){
    const area=width *length;
    return `${area} ${unit}`
}
// console.log(getArea(3,4));
// console.log(getArea());



// challenge 2:
// convert the following function declaration to an array notation
const greet =(val)=>`hi, ${val}`;
// console.log(greet("cool coders"));


//challenge 3:
//challenge 4:


// challenge5:
// declare a variable named addy and assign it an empty object literal 
// add 3 properties to this object 
//     animal with value of dog, 
//     age property with value 3
//     breed property with the value pug

const addy={};
addy.animal="dog";
addy['age']=3;
addy.breed="pug";
// console.log(addy);


//challenge 6:
// dont change the og object. 
    //add a line of code that sets the age property to 4, 
    // add property isFriendly= true
        // add property with . notation 

const addy_1={
    anima: 'dog',
    age: 3,
    breed: "pug"
};
addy.age=4;
addy.isFriendly=true;

// console.log(addy);


// challenge 7:
//  use a for each loop to log each of the property names of the composer object to the console.assert 
//     include the property values too. 
//     console should display "instrument : piano"
const composer= {
    name: 'Edward Ellington',
    nickname:'Duke',
    genres: ['jazz','swing'],
    instrument: 'piano',
}
for (const [key,value] of Object.entries(composer)){
    continue
    console.log(`${key}: ${value}`)
}
//https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript

//challenge 8:



//challenge 9:
// declare variable named objects and assign it epty array 
// in array add 2 object literals
    // each object has 2 property/value pairs
let objects=[];

const cat={
    breed:"furry",
    age:3,    
};

const dog={
    breed:"fuzzy",
    age:1,    
};

objects.push(cat);
objects.push(dog);
console.log(objects);



// --------------UNFINISHED -----------
    // challenge: 10,8,4,3