// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).



- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
function createheading()
{
    let head1=document.createElement('h1');
    head1.textContent='Hey!!This is Imperative way of doing the task';
    head1.className="header";
    return head1;

}

let parent=document.getElementById("root")
parent.appendChild(createheading());