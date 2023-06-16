
class ScoreBoard extends React.Component{
    state={
        score:0
    }

    increment=()=>{
        this.setState(
            prevState=>{
                return{
                score:prevState.score +1
            }}
        )

    }
    decrement=()=>{
        this.setState(
            prevState=>({
                score:prevState.score -1
            })
        )

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

const PlayerCard=(props)=>{
    return(
        <div class="player">
            <h3>Player: {props.name}</h3>
            
            <ScoreBoard />
            
            <button onClick={()=>{
                props.delMe(props.id)
            }}>Delete Me</button>


        </div>
    );
}

const AddPlayerForm=(props)=>{
    return(
    <aside class="addForm">
        <form>
        <br />
         
            <label for="userName">Enter the name</label>
            <input type="text" id="userName" ></input>
        <br />
        {/* <br />
            <label for="userScore">Enter the score </label>
            <input  type="number" id="userScore"></input> */}
        </form>
        
        <br />
        <button onClick={()=>{
            // let score= document.getElementById("userScore").value
            let name= document.getElementById("userName").value


            // document.getElementById("userScore").value=""
            document.getElementById("userName").value=""

            props.addPlayer(name )//,score)

        }}>Add Player!</button>
    
    </aside>
    );
}
class App extends React.Component{
    state={
        allThePlayers:[
            {
                name:"bill",
                id:1
            },
            {
                name:"charles",
                id:2
            },
            {
                name:"richerd",
                id:3
            },
        ]
    }

    delete=(id)=>{
        console.log(id)
        this.setState(prevState=>{
            return{
                allThePlayers: prevState.allThePlayers.filter(
                    singlePlayer=>{
                        return singlePlayer.id !== id
                    }
                )
            }
        })
    }

    addPlayer=(addName, addScore)=>{
        let _id=this.state.allThePlayers[this.state.allThePlayers.length-1].id +1
        let newObj={
            name:addName,
            id: _id,
            // score:addScore
        }
        console.log(newObj)

        this.setState(prevState=>{
            return{
                xx:prevState.allThePlayers.push(newObj)
            }
        })
    }

    render(){
        return(
            <div>
                <h1>This is the 4th try of CRUD </h1>

                {
                    this.state.allThePlayers.map(
                        singlePlayer=>{
                            return <PlayerCard 
                                name={singlePlayer.name}
                                id={singlePlayer.id}
                                delMe={this.delete}
                            />
                        }
                    )
                }

                <AddPlayerForm 
                    addPlayer={this.addPlayer}
                />

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)