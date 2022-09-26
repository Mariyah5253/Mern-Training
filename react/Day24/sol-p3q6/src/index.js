import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function addItem(){
        const newthing=`Thing ${thingsArray.length+1}`
        thingsArray.push(newthing)
        thingsElements.push(newthing)
        console.log(thingsArray) 
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));