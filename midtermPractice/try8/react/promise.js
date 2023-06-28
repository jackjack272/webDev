let doc= document.getElementById('root')
let btn="<button id='picMake' onClick='makePick()'>generate API call </button>"
doc.insertAdjacentHTML("beforebegin",btn)


getRandomNum=(numChar=826)=>{
    return Math.floor(Math.random()*numChar)
}

async function makePick(){
    //load spinner
    loadSpinner()
    //generate the pics
    console.log(1)

    getRicks(10)
    console.log(3)

    // new Promise(getRicks()).then(()=>{removeSpinner()})
    // let x=await new Promise((good,bad)=>{
    //     getRicks()
    //     good("1")
    // })

    // x.then((_good)=>{
    //     console.log(_good)
    //     removeSpinner()}).catch()

    //remove spinner
    // setTimeout( ()=>{
    removeSpinner()
    // },880)
}

loadSpinner=()=>{
    document.getElementById("picMake").style.visibility="hidden"
    document.getElementById("picMake").insertAdjacentHTML("beforebegin",
    `<img id='spinner' src='./assets/loader.svg' >`
    )
    console.log('load spinner')

}
removeSpinner=()=>{
    document.getElementById("spinner").remove()
    document.getElementById("picMake").style.visibility="visible"
    console.log('removed spinner')

}


getRicks=(numRicks=4)=>{
    let url="https://rickandmortyapi.com/api/character"
    let ricksToGet=""
    for(let i=0; i<numRicks; i++){
        if(i==0){
            ricksToGet+="/"+getRandomNum()
            continue
        }

        ricksToGet+=","+getRandomNum()
    }
    url+=ricksToGet

    let data= fetchRic(url)
    data.then((data)=>{
        showImg(data)
    }).catch((err)=>{
        showErr(err)
    })
}

showErr=(err)=>{
    document.getElementById("picMake").insertAdjacentHTML("afterend",err)
}

removeOldImg=()=>{
    let pics=document.getElementsByClassName("rickPics")

    while(pics.length >0){
        pics[0].remove()
    }
}

showImg=(data)=>{
    //removeold img
    removeOldImg()

    data.map(singlImg=>{
        document.getElementById("picMake").insertAdjacentHTML("afterend",
        `<img class='rickPics' src=${singlImg.image} alt="img of rick and morty character">`        
        )
    })   
    console.log(2)
}

async function fetchRic(url){
    return await new Promise((good, bad)=>{
        fetch(url).then((data)=>{return data.json()}).then((data)=>{
            if(data.error){
                bad("the api failed to send properly") 
            }
            good(data)
        }).catch((err)=>console.log(err))
    })
}