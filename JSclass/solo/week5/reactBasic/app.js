const exampleCards=[]

let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// text=text.split(" ")
for(let i=0; i <9; i++){
    let b={}
    b.number=i+1
    b.text=text
    // for(let i=0; i<Math.floor(text.length*(Math.random())) ;i++){
    //     b.text+=text[i]+" "
    // }
    exampleCards.push(b)
}

const Card=(prop)=>{
    return(
        <div class="card offSides">
            <div class="cardHeader">
                <h2>card {prop.number}</h2>
            </div>
            <div class="cardBody">
                {prop.text}
            </div>
        </div>
    );
}

const Header=()=>{
    return(
        <header>
            <h1>Good evening</h1>
            <p>
                The following are cards that hold important info
            </p>

            <div class="theCards">
            {exampleCards.map(looper =>
                    <Card number={looper.number} text={looper.text} />
            )}
            </div>

        </header>
    );   
}


ReactDOM.render(
    <Header />,
    document.getElementById("root")
)