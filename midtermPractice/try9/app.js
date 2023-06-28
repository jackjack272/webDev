// const Header=()=>{
//     return <h1>This is the 9th try</h1>
// }

// const Player=(props)=>{
//     return(
//         <div class="card">
//             <h2>{props.name}</h2>
//             <button onClick={()=>{props.deleteMe(props.id)}}>  delete me</button>
//         </div>

        
//     )
// }

// const AddPlayerForm=(props)=>{
//     return (
//         <div>
//             <h1>This is the add player form</h1>
//             <from>
//                 Enter a name
//                 <input type="text" id="name"></input>

//             </from>
//             <button onClick={()=>{ 
//                 props.add_player(document.getElementById("name").value)

//              }}> Add Me</button>

//         </div>
//     )
// }


// class App extends React.Component{
//     state={
//         all_players:[
//             {
//                 name:"a",
//                 key:0
//             },
//             {
//                 name:"b",
//                 key:1
//             },
//             {
//                 name:"c",
//                 key:2
//             },
                
//     ]
//     }

//     delete=(id)=>{
//         console.log(id)

//         this.setState(preState=>{
//             return{
//                 all_players:preState.all_players.filter(onePlay=>{
//                     return onePlay.key !== id
//                 })
//             }
//         })

//     }
   

//     add_player=(_name)=>{
//         console.log(_name)
//         let newUserObj={
//             name:_name,
//             key:this.state.all_players[this.state.all_players.length-1].key +1
//         }

//         this.setState(preState=>{
//             return{
//                 dd:preState.all_players.push(newUserObj)
//             }
//         })

//     }


//     render(){
//         return(
//             <div>
//                 <Header />

//                 {
//                     this.state.all_players.map(singlePlayer=>{
//                         return <Player 
//                             name={singlePlayer.name}
//                             id={singlePlayer.key}
//                             deleteMe={this.delete}
//                         />
//                     })
//                 }
//                 <AddPlayerForm 
//                     add_player ={this.add_player}
//                 />


//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />,document.getElementById("root"))