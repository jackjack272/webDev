// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';


// function App() {

//   const [score, setScore]= useState(0)
//   const [greet]=useState("hello friend")

//   return (
//     <div>
//       <h1>{greet}</h1>

//       <button onClick={()=>{
//           setScore(prevScore =>prevScore +1)
//       }} > + </button>

//       <span > {score} </span>

//       <button onClick={()=>{
//         setScore(preSt =>preSt -1)

//       }}> - </button>


//       <button
//         onClick={()=>{
//           setScore(0)
//         }}
//       > reset score</button>


//     </div>
//   );
// }

let Header =()=>{
  return <h1>This is the 9th attempt</h1>
}

let ScoreBoard=()=>{
  const [score, setScore] = useState(0)


  return(
    <div>
      <button onClick={()=>{setScore( prevScore=>prevScore +1 )} }> + </button>
      <span> {score} </span>
      <button onClick={()=>{setScore ( prevScore =>prevScore -1)}} > - </button>
    </div>
  )

}

let PlayerCard= (props)=>{
  return(
    <div>
        <h1>{props.name}</h1>
        <button onClick={()=>{props.deleteOnePlayer(props.id)}} >delete me</button>

        <ScoreBoard />

    </div>
  )
}

class Face extends React.Component{
    state={
      all_players:[
        {name:"a",key:1},
        {name:"b",key:2},
        {name:"c",key:3},
      ]
    }

    delete=(id)=>{
      this.setState(preState=>{
        return{
          all_players:preState.all_players.filter(onePlayer =>{
            return onePlayer.key !==id
          })          
        }        
      })

    }

    render(){
      return(
        <div>
          < Header />

          {
            this.state.all_players.map(onePlayer=>{
              return <PlayerCard 
                name={onePlayer.name}
                id={onePlayer.key}
                deleteOnePlayer={this.delete}
              />
            })
          }

        </div>

      )
    }
}

export default Face;
