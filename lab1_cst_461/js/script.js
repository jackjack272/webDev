function peginate(page){
    // set the new number of users
    document.querySelector("h3").innerText=`Total: ${users.length}`    

    //blank the document
    let _ul= document.querySelector("ul");
    _ul.innerHTML="";

    // add the new users. 
    let makeString =(img, name, email,joinData)=>{
        return `<li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src="${img}">
                <h3>${name}</h3>
                <span class="email">${email}</span>
            </div>
            <div class="joined-details">
                <span class="date">joined ${joinData}</span>
        </div>
        </li>
        `
    }
   


    // add the page buttons
        //start: page 1: first 10
        //end: (start+10) or user.num%10

    // let start=0;
    // let end=0;
    let start=page*10;
    let end=start+10;
    if(start+10 >= users.length){
        end=users.length
    }

    let user;
    for(let i=start; i < end; i++){
        user=users[i];
        _ul.innerHTML+=makeString(user.image,user.name, 
            user.name.replace(" ",".")+"@example.com",  user.joined);

    }

    //buttons to different pages. 
    let numPages=Math.ceil(users.length/10);
    let butt="<div class='offSide'>";
    for (let i=0; i <numPages ; i++){
        butt+="<button class='first' onclick='peginate("+(i)+")'>"+(i+1)+"</button> ";
    }
    butt+="</div>"




    // this is already added to the page so im adding it again when i refresh the page. 
        // if exists then continue else 
    if ( document.querySelector('.first')==null ){
        document.querySelector(".page")
        .insertAdjacentHTML("beforeend",butt);
    }

}
peginate(page=0)