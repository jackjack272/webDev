const Head=()=>{
    return(
        <header>
            <h1>Something something </h1>
            <p>something something </p>
        </header>
    );
}

// const SomeThing=()=> {
//     return (
//       <header>
//         <h1>Scoreboard</h1>
//         <span className="stats">Players: 1</span>
//       </header>
//     );
//     } // this is a component
    



// ReactDOM.render(
//     <head />,
//     document.getElementById('root')
// )
ReactDOM.render(
    <Head />, // this renders the component. 
    // this is a function call // functional component 
        
    document.getElementById('root')
);




// const SomeThing=()=> {
//     return (
//       <header>
//         <h1>Scoreboard</h1>
//         <span className="stats">Players: 1</span>
//       </header>
//     );
//     } // this is a component
    
// ReactDOM.render(
//     <SomeThing />, // this renders the component. 
//     // this is a function call // functional component 
        
//     document.getElementById('root')
// );