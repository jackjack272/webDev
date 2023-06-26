const Header =()=>{
    return(
        <header><h1>This is a header for the player application</h1></header>
    );
}

const Footer =()=>{
    return(
        <footer>
            <h1>This is a footer</h1>
        </footer>
    );
}

class ScoreBoard extends React.Component{
    state={
        score:0
    }

    increment=()=>{
        this.setState(
            prevState=>{
            return {
                score:prevState.score +1
            }}
        )
    }

    decrement=()=>{
        this.setState(prevState=>{
            return{
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
        );
    }
}

const Player =(props)=>{
    return(
        <div class='card'>
            <h2>{props.name}</h2>
            <button onClick={()=>{
                props.deletePlayer(props.id)    
            }}>Delete this player </button>

            <ScoreBoard />
        </div>
    );
}

const AddPlayer=(props)=>{
    return(
        <div>
            <form > 
                <input type="text" id='newName' ></input>
            </form>
            
            <button onClick={()=>{
                props.addPlayer(
                    document.getElementById("newName").value
                )
            }}>Add New User</button>

        </div>
    )
}

class App extends React.Component{
    state={
        all_players:[
            {
                name:"Smith Jones",
                id:0
            },
            {
                name:"Kelly Kapoor",
                id:1
            }
        ]

    }

    deletePlayer=(id)=>{
        console.log(id+" player was removed")
        this.setState(prevState=>{
            return{
                all_players:prevState.all_players.filter(
                    singlePlayer=>{
                        return singlePlayer.id !== id
                    }
                )
            }
        })
    }

    addPlayer=(_name)=>{
        console.log(_name)
        let newUser={
            name:_name,
            id:this.state.all_players[this.state.all_players.length-1].id +1
        }
        console.log(newUser)

        this.setState(prevState =>{
            return{
                dd:prevState.all_players.push(newUser)
            }
        })

    }

    render(){
        return(
            <div>
                <Header />

                    {
                    this.state.all_players.map((singlePlayer)=>{
                        return <Player 
                            name={singlePlayer.name}
                            id={singlePlayer.id}
                            deletePlayer={this.deletePlayer}
                        />
                    })
                    }
                    <br></br>
                    <AddPlayer 
                        addPlayer={this.addPlayer}
                    />                    

                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)