
let abc={
    "this":1,
    "that":3,
    "sounds": (sound)=>{console.log(sound)},
    "voice": (voice)=>{alert(voice)}
}
abc.sounds("meaaaw")
// abc.voice("sniff")

class aa{
    constructor(name, sizeOfForheadInInches ){
        this.name= name
        this.sizeOfForheadInInches=sizeOfForheadInInches
    }

    getCutnessLevel() {
        let runningScore=0
        for (let x=0; x<Array.from(this.name).length ;x++ ){
            // runningScore+= charCodeAt(this.name[x])
            runningScore+=(this.name.charCodeAt(x))
        } 

        runningScore+= this.sizeOfForheadInInches *.93;
        return runningScore 
    }    

    areThereSecrets(){
        return this.#secret()
    }

    #secret(){
        return "this is a private method in a class"
    }
}


smith=new aa("smith", 333)
console.log(smith.getCutnessLevel())
console.log(smith.areThereSecrets())


// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 4;
// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"
