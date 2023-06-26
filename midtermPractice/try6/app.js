const Header=()=>{
    return(
        <h1>This is the Header</h1>
    );
}
const Footer=()=>{
    return(
        <footer><h1>This is the Footer</h1></footer>
    );
}
class ScoreBoard extends React.Component{
    state={
        score:0
    }


    increment=()=>{
        this.setState(prevState=>{
            return{
                score:prevState.score +1
            }
    })
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
        )
    }
}
const Player=(props)=>{
    return (
        <div class='card'>
            
            <h1>{props.name}</h1>

            <button onClick={()=>{
                props.deleteMe(props.id)
            }}>Delete Me</button>

            <ScoreBoard />
        </div>
    )
}
const AddPlayer=(props)=>{
    return(
        <div>
            <form>
                <input type="text" id="newName"></input>
            </form>

            <button onClick={()=>{
                props.addPlayer(document.getElementById('newName').value)

            }} >add new user</button>
        </div>
    )
}

async function playerPics(numPics=1){
    return new Promise((good, bad)=>{

        let charNums=""
        for(x in numPics){
            charNums+=","+x
        }
        let url="https://rickandmortyapi.com/api/character/"
        url+=charNums

        fetch(url).then((data)=>{return data.json()})
        .then((data)=>{
            //Data success/failure
            if(data.error){
                bad("the api key/request was bad")
            }else{
                good(data)
            }          
        })
        .catch((err)=>{
            console.log(err)
            //API Failure
        })
    })
}

class App extends React.Component{
    state={
        all_players_:[
            {
                name:"smith jo0nes",
                id:0,
            },
            {
                name:"sith jo1nes",
                id:1,
            },
            {
                name:"smih j2ones",
                id:2,
            },

            {
                name:"smit  3jones",
                id:3,
            },
        ]
    }
    
    deleteMe= (id)=>{
        this.setState((prevState)=>{
            return{
                all_players_: prevState.all_players_.filter((singlePlayer)=>{
                    return singlePlayer.id !== id
                })
            }
        })
    }

    addPlayer=(newName)=>{
        let _id=this.state.all_players_[this.state.all_players_.length-1].id +1
        
        let newUserObj={
            name:newName,
            id: _id
        }
        
        console.log(newUserObj)
        this.setState(prevState=>{
            return{
                ada:prevState.all_players_.push(newUserObj)
            }
        })

    }

 

    render(){
        return(
            <div>
                <Header />

                {
                    this.state.all_players_.map(singlePlayer=>{
                        return <Player 
                            name={singlePlayer.name}
                            id={singlePlayer.id}
                            deleteMe={this.deleteMe}
                        />
                    }
                    )
                }

                <br />
                <br />
                <AddPlayer 
                    addPlayer={this.addPlayer}
                />



                <Footer />        
            </div>
        );
    }
}




ReactDOM.render(
    <App 
    />, 
    document.getElementById("root")
    )