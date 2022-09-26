import React from "react"

export default function App() {
    function clickMe()
    {
        console.log("I was Clicked!!");

    }
    function onHover()
    {
        console.log("You just Hover over Me!!");
    }
    
    
    return (
        <div className="container">
            <img className='img' alt="" src="https://picsum.photos/640/360" />
            <button className='btn' onClick={clickMe} onMouseOver={onHover}>Click me</button>
        </div>
    )
}
