let doc=document.getElementById('root')
doc.insertAdjacentHTML("beforebegin","<div id='promiseWorkingArea'>")
let workingArea=document.getElementById("promiseWorkingArea")

let btn="<button class='block' onClick='xx()'>call function</button>"
workingArea.insertAdjacentHTML("afterbegin",btn)


getRandNum=(charAvailable=826)=>{
    return Math.floor(Math.random()*charAvailable);
}

xx=()=>{

    // load spinner
    loadSpinner()

    getRickPicks(3)

    //delete spinner
    removeSpinner()
}

async function getRickPicks(numChar){
    let baseUrl="https://rickandmortyapi.com/api/character"

    let msg=""
    for(let i=0; i<numChar; i++){
        if(i==0){
            msg+="/"+getRandNum()
            continue
        }
        msg+=","+getRandNum()

    }
    baseUrl+=msg
    
    let getData=new Promise((good, bad)=>{
        return fetch(baseUrl).then((data)=>{return data.json()})
            .then((data)=>{
                if(data.error){
                    bad("api req was bad")
                }else{
                    good(data)
                }
            })
            .catch((err)=>{console.log("this is in the catch of the getData "+err)})
    })

    await getData.then((data)=>{displayPicks(data)}).catch(()=>{badApiCall()})
}

badApiCall=()=>{ 
    workingArea.insertAdjacentHTML("beforeend","api call was bad")
}

removePicks=()=>{ //todo
    let delMe=document.getElementsByClassName('pickle')
    while(delMe.length >0){
        delMe[0].remove()
    }
}

displayPicks=(data)=>{
    removePicks()

    data.map(
        singleImg=>{
            workingArea.insertAdjacentHTML("beforeend",`<img class="pickle" src=${singleImg.image} />`)
        }
    )

}

loadSpinner=()=>{
    let url="./assets/loader.svg"
    let tmpImgSwap=document.getElementsByClassName("block")[0]
    tmpImgSwap.innerHTML=`<img id='tmpImg' src="${url}" />`
    
    console.log(tmpImgSwap)
    // document.getElementsByClassName("block")[0].insertAdjacentHTML("afterend",`<img src="${url}" />`)
}

removeSpinner=()=>{
    // document.getElementById('tmpImg').
    // document.getElementsByClassName("block")[0].innerHTML=btn
}





doc.insertAdjacentHTML("beforeend","</div>")