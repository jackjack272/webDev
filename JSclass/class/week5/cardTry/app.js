for(let i=0; i < 5; i++){
    // make the array items to be .map over
}


const Header=(props)=>{
    return(
          <h1>there are {props.number} cards </h1>
    );
}



const Card=(prop)=>{
    return (
        <div>
            <h4> Card {prop.number} </h4>
            <p> something something </p>
        </div>
    );
}


const App=(prop)=>{
    return(
        <div>
        <Header 
            number={prop.number}
        />

        <Card 
            number={prop.number}
        />
        </div>

    );
}
ReactDOM.render(
    <App
        number={3}
        />,
    document.getElementById("here")
)