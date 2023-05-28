
document.querySelector("h1").innerText="This is an accordion done using java script."
document.querySelector(".accordion-header").innerText="Accodion"

for(let i=0;i<5; i++){
    document.querySelector(".accordion").insertAdjacentHTML("afterend","\
    <div class='accordion'>\
    some title \
    <div>+</div>\
    </div>\
    ");
}


let accordionArr=Array.from(document.querySelectorAll(".accordion"))
accordionArr.map(
    (oneAcord)=>{
        oneAcord.addEventListener("click" , ()=>{
                    if (document.querySelector('.one')== null){
                        oneAcord.insertAdjacentHTML("afterend","<div class='one' >lorim ipsom</div>")
                        oneAcord.innerHTML="some title <div>-</div>"
                    }else{
                        oneAcord.innerHTML="some title <div>+</div>"
                        document.querySelector('.one').remove();
                    }
            })
    }
)
