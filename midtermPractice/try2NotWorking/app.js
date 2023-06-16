const Header =(props)=>{
    return(
        <header>
            <h2>This is a cool site that lets you see how many players are in the game</h2>
            <p> There are currently {props.players}</p>
        </header>
        );
}

const Footer= ()=>{
    return(
        <footer>
            <h4>
                Thank you for using this application. 
            </h4>
        </footer>
    );
}

class ScoreButtons extends React.Component{
    state={
        score:0
    }

    increment=()=>{
        this.setState(
            prevState=>({
                score:prevState.score +1
            })
        )
    }

    decrement =()=>{
        this.setState(
            prevState=>({
                score: prevState.score -1
            })
        )

    }

    render(){
        return(
            <div>
                <h4>Score Buttons</h4>
                <div>
                    <button onClick={this.increment}> + </button>
                    <span > {this.state.score} </span>
                    <button onClick={this.decrement} > - </button>
                </div>
            </div>
        );
   }

}

const PlayerCard=(props)=>{
    return(
        <div class="player">
            <h2>Player {props.name}</h2>
            <p>{props.id}</p>
            <button onClick={()=>{props.delete(props.id)} }>delete me</button>


            <ScoreButtons />
        </div>
    );
}

const AddPlayerFourm=(props)=>{
    return(
        <aside>
            <h3>This is the add user form </h3>

            <form>
                <label for="userName">Enter the name of the player thats joing </label>
                <br />
                <input id="userName" ></input>
                <br />
            </form>

            <button value="submit" onClick={()=>{
                props.addPlayer(
                    document.getElementById("userName").value
                )
            }}> submit</button>

        </aside>
        


    );
}

class App extends React.Component{
    state={
        players:[
        {
            name: "Guil",
            id: 1
            },
            {
            name: "Treasure",
            id: 2
            },
            {
            name: "Ashley",
            id: 3
            },
            {
            name: "James",
            id: 4
            }
        ]    
    }

    deletePlayer=(id)=>{
        this.setState(prevState=>{
            return{
                players:prevState.players.filter(
                    singlePlayer=>{
                        return singlePlayer.id !== id
                    }
                )     
            };
        })

        
    }

    addPlayer=(playerName)=>{
        console.log(playerName)

        let newUserObj={
            name:playerName,
            id: this.state.players[this.state.players.length-1].id +1
        }
        console.log(newUserObj)

        this.setState(prevState=>({
            SomethingHere:prevState.players.push(newUserObj)
        }));
     
    }   

    render(){
        return(
            <div>
                <Header 
                    players={this.state.players.length}
                />

                {
                    this.state.players.map(singlePlayer=>{
                        return <PlayerCard
                            name={singlePlayer.name}
                            id={singlePlayer.id}
                            delete={this.deletePlayer}
                        />
                    })
                }          

            <AddPlayerFourm 
                addPlayer={this.addPlayer}
            />

                <Footer />
            </div>

        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)