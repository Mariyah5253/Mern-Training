const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

const page=<div className="head">
    <h1>This Is JSX</h1>
<p>'We are 
learning JSX too...'</p></div>

console.log(page);
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(page, document.getElementById("root"))