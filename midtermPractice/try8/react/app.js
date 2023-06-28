const Header=()=>{
    return <h1>This is the 8th try</h1>
}

const PlayerCard=(props)=>{
    return(
        <div class="card">
            <h3>{props.name}</h3>
            <button onClick={()=>{props.deleteMe(props.id)}}>delete me</button>

            < ScoreBoard />

        </div>
    )
}

class ScoreBoard extends React.Component{
    state={
        score:0
    }
    increment=()=>{
        this.setState(prevState=>{
            return{
            score:prevState.score +1
        }})
    }
    decrement=()=>{
        this.setState(prevState=>{
            return{
            score:prevState.score -1
        }})
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.increment()}}> + </button>
                <span> {this.state.score} </span>
                <button onClick={()=>{this.decrement()}}> - </button>

            </div>
        )
    }
}

const AddPlayerForm=(props)=>{
    return(
        <div>
            <h3>This is the add player form </h3>
            <form>
                <label>Enter the new players name</label>
                <br/>
                <input type="text" id="name"></input>
            </form>
            <button onClick={()=>{props.addNewPlayer(
                document.getElementById("name").value

            )}}> Add Player</button>


        </div>
    )
}

class App extends React.Component{
    state={
        all_players:[
            {
                name:1,
                id:1
            },
            {
                name:2,
                id:2
            },
            {
                name:3,
                id:3
            },


        ]
    }

    deletePlayer=(id)=>{
        // console.log(id)
        this.setState((prevState)=>{
            return{
                all_players:prevState.all_players.filter((singPlayer)=>{
                    return singPlayer.id !== id
                })
            }
        })

    }

    addPlayer=(_name)=>{
        let _id=this.state.all_players[this.state.all_players.length-1].id +1

        let newUserObj ={
            name:_name,
            id:_id
        }
        // console.log(newUserObj)

        this.setState(prevState=>{
            return{
                xx:prevState.all_players.push(newUserObj)
            }
        })


    }

    render(){
        return(
            <div>
                <Header />

                {
                    this.state.all_players.map(singPlayer=>{
                        return <PlayerCard 
                            name={singPlayer.name}
                            id={singPlayer.id}
                            deleteMe={this.deletePlayer}
                        />
                    })
                }
                <br />
                <AddPlayerForm
                    addNewPlayer={this.addPlayer}

                />


                
            </div>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById('root')
)