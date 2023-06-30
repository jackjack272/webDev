// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// <Header />
let Header =(props)=>{
  return (
    <header>
      <h1>Playin Cards Game of {props.numCards}</h1>
      <button>Shuffle Cards</button>
    </header>
  )
}

// <Card />
let Card=(props)=>{
  return(
    // <div class="container">
      <div class="card">

        <button class="remove-card" onClick={()=>{
          props.delete(props.id)
        }}> Delete Card</button>

        <button class="remove-card hideMe"  onClick={()=>{
          props.hide(props.id)
        }}> Hide </button>

        <div> <img src={props.img}  /> </div>

      </div>
    // </div>

  )
}

// <App />
class App extends React.Component{
  state={
// Data:
    cards: [
      {
        id: 1,
        url: 'img/AC.svg',
      },
      {
        id: 2,
        url: 'img/AD.svg',
      },
      {
        id: 3,
        url: 'img/AH.svg',
      },
      {
        id: 4,
        url: 'img/AS.svg',
      },
      {
        id: 5,
        url: 'img/2C.svg',
      },
      {
        id: 6,
        url: 'img/2D.svg',
      },
      {
        id: 7,
        url: 'img/2H.svg',
      },
      {
        id: 8,
        url: 'img/2S.svg',
      },
      {
        id: 9,
        url: 'img/3C.svg',
      },
      {
        id: 10,
        url: 'img/3D.svg',
      },
      {
        id: 11,
        url: 'img/3H.svg',
      },
      {
        id: 12,
        url: 'img/3S.svg',
      },
      {
        id: 13,
        url: 'img/4C.svg',
      },
      {
        id: 14,
        url: 'img/4D.svg',
      },
      {
        id: 15,
        url: 'img/4H.svg',
      },
      {
        id: 16,
        url: 'img/4S.svg',
      },
      {
        id: 17,
        url: 'img/5C.svg',
      },
      {
        id: 18,
        url: 'img/5D.svg',
      },
      {
        id: 19,
        url: 'img/5H.svg',
      },
      {
        id: 20,
        url: 'img/5S.svg',
      },
      {
        id: 21,
        url: 'img/6C.svg',
      },
      {
        id: 22,
        url: 'img/6D.svg',
      },
      {
        id: 23,
        url: 'img/6H.svg',
      },
      {
        id: 24,
        url: 'img/6S.svg',
      },
      {
        id: 25,
        url: 'img/7C.svg',
      },
      {
        id: 26,
        url: 'img/7D.svg',
      },
      {
        id: 27,
        url: 'img/7H.svg',
      },
      {
        id: 28,
        url: 'img/7S.svg',
      },
      {
        id: 29,
        url: 'img/8C.svg',
      },
      {
        id: 30,
        url: 'img/8D.svg',
      },
      {
        id: 31,
        url: 'img/8H.svg',
      },
      {
        id: 32,
        url: 'img/8S.svg',
      },
      {
        id: 33,
        url: 'img/9C.svg',
      },
      {
        id: 34,
        url: 'img/9D.svg',
      },
      {
        id: 35,
        url: 'img/9H.svg',
      },
      {
        id: 36,
        url: 'img/9S.svg',
      },
      {
        id: 37,
        url: 'img/TC.svg',
      },
      {
        id: 38,
        url: 'img/TD.svg',
      },
      {
        id: 39,
        url: 'img/TH.svg',
      },
      {
        id: 40,
        url: 'img/TS.svg',
      },
      {
        id: 41,
        url: 'img/JC.svg',
      },
      {
        id: 42,
        url: 'img/JD.svg',
      },
      {
        id: 43,
        url: 'img/JH.svg',
      },
      {
        id: 44,
        url: 'img/JS.svg',
      },
      {
        id: 45,
        url: 'img/QC.svg',
      },
      {
        id: 46,
        url: 'img/QD.svg',
      },
      {
        id: 47,
        url: 'img/QH.svg',
      },
      {
        id: 48,
        url: 'img/QS.svg',
      },
      {
        id: 49,
        url: 'img/KC.svg',
      },
      {
        id: 50,
        url: 'img/KD.svg',
      },
      {
        id: 51,
        url: 'img/KH.svg',
      },
      {
        id: 52,
        url: 'img/KS.svg',
      },
    ]
  }

  //delete the card
  deleteOneCard=(id)=>{
    this.setState(prvState=>{
      return {
        cards:prvState.cards.filter(oneCard=>{
          return oneCard.id !== id
        })
      }
    })

    // // make the hide button unavailable 
    // console.log(document.getElementsByClassName("hideMe").length() )
    
    
    // let cards= document.getElementsByClassName("hideMe")
    // for(let i=0; i<cards.length; i++){
    //   cards[i].style.visibility="hidden"

    // }

  }

  hideOneCard=(id)=>{
  
    let counter=0;
    this.state.cards.map(oneCard=>{
      
      if(oneCard.id == id){

        if( oneCard.url.localeCompare('img/AC.svg') ==0   || oneCard.url.localeCompare('img/AS.svg') == 0){
          this.setState(Object.assign(this.state.cards[counter],{url:'img/1B.svg'}))
        }else{
          this.setState(Object.assign(this.state.cards[counter],{url:'img/2B.svg'}))
        }
      }

      counter++


    })

  }


  render(){
    return(
      <div>
        
        {/* show the number of cards in here */}

        <Header
          numCards={this.state.cards.length}
        />

        {/* // need to make the cards stack  */}
        <div class="container"> 
        {
          this.state.cards.map(singleCard=>{
            return <Card 
              img={singleCard.url}
              id={singleCard.id}
              delete={this.deleteOneCard}
              hide={this.hideOneCard}
            />

          })
        }   
        </div>  


      </div>
    )
  }



}

// Data:
    // cards: [
    //   {
    //     id: 1,
    //     url: 'img/AC.svg',
    //   },
    //   {
    //     id: 2,
    //     url: 'img/AD.svg',
    //   },
    //   {
    //     id: 3,
    //     url: 'img/AH.svg',
    //   },
    //   {
    //     id: 4,
    //     url: 'img/AS.svg',
    //   },
    //   {
    //     id: 5,
    //     url: 'img/2C.svg',
    //   },
    //   {
    //     id: 6,
    //     url: 'img/2D.svg',
    //   },
    //   {
    //     id: 7,
    //     url: 'img/2H.svg',
    //   },
    //   {
    //     id: 8,
    //     url: 'img/2S.svg',
    //   },
    //   {
    //     id: 9,
    //     url: 'img/3C.svg',
    //   },
    //   {
    //     id: 10,
    //     url: 'img/3D.svg',
    //   },
    //   {
    //     id: 11,
    //     url: 'img/3H.svg',
    //   },
    //   {
    //     id: 12,
    //     url: 'img/3S.svg',
    //   },
    //   {
    //     id: 13,
    //     url: 'img/4C.svg',
    //   },
    //   {
    //     id: 14,
    //     url: 'img/4D.svg',
    //   },
    //   {
    //     id: 15,
    //     url: 'img/4H.svg',
    //   },
    //   {
    //     id: 16,
    //     url: 'img/4S.svg',
    //   },
    //   {
    //     id: 17,
    //     url: 'img/5C.svg',
    //   },
    //   {
    //     id: 18,
    //     url: 'img/5D.svg',
    //   },
    //   {
    //     id: 19,
    //     url: 'img/5H.svg',
    //   },
    //   {
    //     id: 20,
    //     url: 'img/5S.svg',
    //   },
    //   {
    //     id: 21,
    //     url: 'img/6C.svg',
    //   },
    //   {
    //     id: 22,
    //     url: 'img/6D.svg',
    //   },
    //   {
    //     id: 23,
    //     url: 'img/6H.svg',
    //   },
    //   {
    //     id: 24,
    //     url: 'img/6S.svg',
    //   },
    //   {
    //     id: 25,
    //     url: 'img/7C.svg',
    //   },
    //   {
    //     id: 26,
    //     url: 'img/7D.svg',
    //   },
    //   {
    //     id: 27,
    //     url: 'img/7H.svg',
    //   },
    //   {
    //     id: 28,
    //     url: 'img/7S.svg',
    //   },
    //   {
    //     id: 29,
    //     url: 'img/8C.svg',
    //   },
    //   {
    //     id: 30,
    //     url: 'img/8D.svg',
    //   },
    //   {
    //     id: 31,
    //     url: 'img/8H.svg',
    //   },
    //   {
    //     id: 32,
    //     url: 'img/8S.svg',
    //   },
    //   {
    //     id: 33,
    //     url: 'img/9C.svg',
    //   },
    //   {
    //     id: 34,
    //     url: 'img/9D.svg',
    //   },
    //   {
    //     id: 35,
    //     url: 'img/9H.svg',
    //   },
    //   {
    //     id: 36,
    //     url: 'img/9S.svg',
    //   },
    //   {
    //     id: 37,
    //     url: 'img/TC.svg',
    //   },
    //   {
    //     id: 38,
    //     url: 'img/TD.svg',
    //   },
    //   {
    //     id: 39,
    //     url: 'img/TH.svg',
    //   },
    //   {
    //     id: 40,
    //     url: 'img/TS.svg',
    //   },
    //   {
    //     id: 41,
    //     url: 'img/JC.svg',
    //   },
    //   {
    //     id: 42,
    //     url: 'img/JD.svg',
    //   },
    //   {
    //     id: 43,
    //     url: 'img/JH.svg',
    //   },
    //   {
    //     id: 44,
    //     url: 'img/JS.svg',
    //   },
    //   {
    //     id: 45,
    //     url: 'img/QC.svg',
    //   },
    //   {
    //     id: 46,
    //     url: 'img/QD.svg',
    //   },
    //   {
    //     id: 47,
    //     url: 'img/QH.svg',
    //   },
    //   {
    //     id: 48,
    //     url: 'img/QS.svg',
    //   },
    //   {
    //     id: 49,
    //     url: 'img/KC.svg',
    //   },
    //   {
    //     id: 50,
    //     url: 'img/KD.svg',
    //   },
    //   {
    //     id: 51,
    //     url: 'img/KH.svg',
    //   },
    //   {
    //     id: 52,
    //     url: 'img/KS.svg',
    //   },
    // ]
  

// Render the container component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
