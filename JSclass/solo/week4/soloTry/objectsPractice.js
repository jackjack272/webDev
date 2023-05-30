class user{
    constructor(firstName, lastName, middleName){
        this.firstName= firstName
        this.lastName=lastName
        this.middleName= middleName 
    }

    #getFirstName= ()=>{
        return this.firstName
    }
    getFullName = () => {
        return this.#getFirstName()+" " + this.middleName+" " + this.lastName; 
    }

}


bob=new user("bob", "james", "smith")
console.log(bob.getFullName())

const jack={
    firstName:"smith",
    lastName:"james",
    makeNoise:()=>{return "mooo"}
}

console.log(jack.firstName);
console.log(jack.makeNoise());

