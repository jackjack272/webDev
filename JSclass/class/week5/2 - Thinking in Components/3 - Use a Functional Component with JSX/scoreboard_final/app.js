  function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
} // this is a component

ReactDOM.render(
  <Header />, // this renders the component. 
      // this is a function call // functional component 
        
      document.getElementById('root')
);