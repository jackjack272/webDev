const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const _name = 'Guil'; // this is a reserved word so need to change it 

const header =(
  <header>
    <h1 id={myTitleID}>{ _name }'s First React Element!</h1> {/* {java script inside here} */}
    <p className="main-desc">{ desc }</p> {/* to add a class property need className  */}
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

// this is a jsx file
  // only one element can be rendered so need to put eveything insie that element
