import React from "react"

export default function Form() {
    const [firstName,setFristName]=React.useState("")
    console.log(firstName)
    function handleChange(event)
    {
        
    setFristName(event.target.value)
    }
    return (
        <form>
            <input
                id="fi"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />



         <label>First Name : {firstName}</label>
        </form>
    )
}
