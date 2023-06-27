let Header=()=>{
    return(
        <h1>This is the 7th build of this application</h1>
    )
}

class ScoreBoard extends React.Component{
    state={
        score:0
    }
    
    increment=()=>{
        this.setState((prevState)=>{
            return{
                score: prevState.score +1
            }
        })
    }

    decrement=()=>{
        this.setState((prevState)=>{
            return{
                score: prevState.score -1
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}> + </button>
                <span> {this.state.score} </span>
                <button onClick= {this.decrement}> - </button>
            </div>
        )
    }
}

let Player =(props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
            <button onClick={()=>{props.delPlay(props.id) }} >delete me</button>

            <ScoreBoard />

        </div>
    )
}

let AddPlayerForm=(props)=>{
    return(
        <div>
            <form method="post">
                <label>Enter Users name</label>
                <input type="text" id="name" ></input>
            </form>

            <button onClick={()=>{
                let name=document.getElementById('name').value
                document.getElementById('name').value=""
                props.addUser(name)
                
            }}>Add this player</button>
        </div>
    );
}

class App extends React.Component{
    state={
        players:[
            {
                name:"1",
                id:0
            },
            {
                name:"2",
                id:1
            },            {
                name:"3",
                id:2
            },
            {
                name:"4",
                id:3
            },
        ]
    }

    deleteUser=(id)=>{
        console.log(id)
        this.setState((prevState)=>{
            return{
                players:prevState.players.filter((onePlayer)=>{
                    return onePlayer.id !== id
                })
            }
        })
    }

    addUser=(_name)=>{
        let _id= this.state.players[this.state.players.length-1].id +1

        let newUserObj={
            name:_name,
            id:_id 
        }

        this.setState((prevState)=>{
            return{
                ss:prevState.players.push(newUserObj)
            }
        })

    }

    render(){
        return(
            <div>
                <Header />
                {
                    this.state.players.map(singlePlayer=>{
                        return <Player 
                            name={singlePlayer.name}
                            id={singlePlayer.id}
                            delPlay={this.deleteUser}
                        />
                    })
                }
                <br />

                <AddPlayerForm 
                    addUser={this.addUser}
                />

            </div>
        )
    }
}

ReactDOM.render(
    <App 
    />,
    document.getElementById('root')
)