const Header=(props)=>{
    return(
        <header>
            <h2>Welcome to the webpage, this is going to show cards of students</h2>
            <p>there are {props.students} currently on display</p>
        </header>
        );
}

const Footer=(props)=>{
    return(
        <footer>
            Thank you for using this application. 
        </footer>
    );
}

class Counter extends React.Component{
    state={
        score:0
    };

    incrementScore=()=>{
        this.setState(prevState=>({
            score: prevState.score +1
        }))
    }

    decrementScore =()=>{
        this.setState(prevState =>({
            score:prevState.score -1
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.incrementScore }> + </button>
                <span> {this.state.score} </span>
                <button onClick={ this.decrementScore }> - </button>
            </div>
        );
    }

}

const Player=(props)=>{
    return(
        <div>
            <br />
            <br />
            <br />
            <button onClick={()=>{props.deletePlayer(props.id) }}> Delete Me </button> 
            <h3>{props.name}</h3>
            
            <Counter />
        </div>
    );
}

const AddPlayerForm=(props)=>{
    return(
        <div>
            <h2>This form is for adding players to the board</h2>
            <form>
                <label for="getName">Enter your name to be added to player list</label>
                <br />
                <input  type="text" id="getName"></input>

            </form>
            <button
                onClick={()=>{
                    props.getData(document.getElementById("getName").value)
                    document.getElementById("getName").value=""
                }}             
                type="submit"
                >Submit </button>
        </div>
    );
}

class App extends React.Component{
    state={
        players: [
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
        this.setState(prevState =>{
            return{
                players:prevState.players.filter(
                    singlePlayer=>{
                        return singlePlayer.id !== id}
                )
            }
        })   
    }

    addPlayer=( newUser)=>{
        console.log(newUser)
        
        let newUserObj={name: newUser, id:this.state.players[this.state.players.length-1].id+1 }
        console.log(newUserObj)
        this.setState(prevState=>({
                player:prevState.players.push(newUserObj)
        }));

    }

    render(){
        return(
            <div>
                <Header 
                    students ={this.state.players.length}
                />
            {this.state.players.map(singlePlayer =>{
                // return singlePlayer.name
                return <Player 
                    name={singlePlayer.name}
                    deletePlayer={this.deletePlayer}
                    id={singlePlayer.id}
                />
            })}

            <br></br>
            <AddPlayerForm 
                getData={this.addPlayer}
            />
            <br></br>
            <br></br>
            <Footer />

            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)