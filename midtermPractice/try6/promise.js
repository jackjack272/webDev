let doc=document.getElementById("root")
// doc.insertAdjacentHTML("beforebegin",`<button onClick="${xx}"> Click Me To Get A rick and morty character </button>`)

function getRandomNumber(charPool=1000){
    return Math.floor( Math.random()*charPool)
}

async function makeRickPics(){
    let x = new Promise((good, bad)=>{

        console.log(getRandomNumber())
        let msg=""
        for(let x =0; x<4; x++){
            if(x==0){
                msg+=getRandomNumber()
                continue
            }
            msg+=","+getRandomNumber()
        }

        let url="https://rickandmortyapi.com/api/character/"
        url+=msg

        console.log(url)
        console.log(11111111)
        fetch(url).then((data)=>{return data.json()})
        .then((data)=>{
            if(data.err){
                bad("failed to find the characters desierd")
            }else{

                good(data)
            }
        })
        .catch((err)=>{console.log(err)})
    })

    await x
    .then((data)=>{
        let picsToRemove=document.getElementsByClassName('pics')
        while(picsToRemove.length>0){
            picsToRemove[0].remove()
        }

        data.map(sinlePic=>{
            insertIntoDoc(`<img class="pics" src=${sinlePic.image}></img>`)
        })
    })
    .catch((err)=>{
        insertIntoDoc(err)
    })
}

insertIntoDoc=(data)=>{
    doc.insertAdjacentHTML("afterbegin",data)
}

