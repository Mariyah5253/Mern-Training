import React from "react"

export default function App() {
    const [isGoingOut,setIsGoingOut]=React.useState(true)
    function changeState()
    {
       
        setIsGoingOut(prevState => prevState ? false : true)
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeState} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
