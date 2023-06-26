let doc=document.getElementById("root")

async function getPickle(){
    var apiCall;
    
    apiCall = new Promise((good, bad)=>{
        url="https://rickandmortyapi.com/api/character/10"

        fetch(url).then((data)=>{return data.json() }).then((data)=>{
            if(data.error){
                bad("failed to load data")
                //valid api call but bad data
            }

            good(data)
        }).catch((err="bad api call/key")=>{
            console.log(err)
        })
    });


    await apiCall
    .then((data)=>{goodOutCome(data)})
    .catch((text)=>{badOutCome(text)})

}

goodOutCome=(data)=>{
    doc.innerHTML=`<img src=${data.image}>`
}
badOutCome=(txt)=>{
    doc.innerHTML=`<p> ${txt} </p>`
}
