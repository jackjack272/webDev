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

const AddPlayerForm=()=>{
    return(

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

    addPlayer=()=>{

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