const Header =()=>{
   return(
    <h1>This is the 3rd try for the CRUD operations using REACT </h1>
   ); 
}
const Footer =()=>{
    return(
        <h1>This is the footer</h1>
    );
}

class ScoreBoard extends React.Component{
    state={
        score:3
    }

    increment=()=>{
        this.setState(prevState=>({
            score:prevState.score + 1
        }))
    }

    decrement=()=>{
        this.setState(prevState =>{
            return {
                score:prevState.score -1
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}> + </button>
                <span> {this.state.score} </span>
                <button onClick={this.decrement}> - </button>
         
            </div>
        )
    }

}

const AddPlayerForm=(props)=>{
    return(
        <div>

        <form >
        <h4>This is the add player Form</h4>

        <label for="userName">Enter the name of the player thats joing the game</label><br />
        <input type="text" aname="userName" id="userName"></input>         
        <br />
        <br />

        <label for="userColor">Enter the color you want to be attached to the player</label>
        <br />
        <input type="color" id="userColor"></input>
        
        <br />
        </form>
        
        <button  onClick={(e)=>{
            let name=document.getElementById("userName").value
            let color=document.getElementById("userColor").value
            // console.log(color)
            // console.log(name)

            props.addPlayer(name,color)
        }} >Add the player!</button>
        </div>
    );
}
const PlayerCard=(props)=>{
    return(
        <div class="player">
            <h3>{props.name}</h3>
            <button onClick={()=>{ props.delete(props.id) }}>Delete Me</button> 
        
            <ScoreBoard />

        </div>
    );
}
class Face extends React.Component{
    state={
        players:[
            {
                name:"bill ",
                color:"yellow",
                id:1
            },
            {
                name:"james ",
                color:"blue",
                id:2
            },
            {
                name:"charles",
                color:"orange",
                id:3
            },
        ],

        
    }

    handleDelete=(id)=>{
        console.log(id)
        this.setState(prevState=>{
            return{
                players:prevState.players.filter(singlePlayer =>{
                    return singlePlayer.id !== id
                })
            };
        })
    }
    handleAddPlayer=(newPlayer,chosenColor)=>{

        let _id=this.state.players[this.state.players.length-1].id+1
        let newUserObj= {name:newPlayer, color:chosenColor, id:_id}
        console.log(newUserObj)

        this.setState(prevState=>({
            something:prevState.players.push(newUserObj)
        })
        )

        // this.setState(prevState=>({
        //     players:prevState.players.push(newUserObj)
        // }));
    }

    render(){
        return(
            <div>
                <Header />

                {this.state.players.map(singlePlayer=>{
                    return <PlayerCard 
                        name={singlePlayer.name}
                        id={singlePlayer.id}
                        color={singlePlayer.color}
                        delete={this.handleDelete}
                    />

                })}

                <AddPlayerForm 
                    addPlayer={this.handleAddPlayer}
                />

                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Face />,
    document.getElementById('root')
)