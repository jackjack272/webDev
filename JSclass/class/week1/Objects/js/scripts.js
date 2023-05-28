// 1-
// an object literal example
student = {
    name: "john",
    age: 22,
    grades: [99, 77, 88]
}

// 2-
// accessing object properties
console.log(student.name);
console.log(student.age);
console.log(student.grades);
console.log(student.grades[0]);
console.log(student["age"]);

// 3-
// using objects in context
var greetings = `hi, my name is ${student.name}`;
console.log(greetings);

// 4-x
//
for (let propname in student) {
    // console.log (student.propname)
    console.log (student[propname]);
}
