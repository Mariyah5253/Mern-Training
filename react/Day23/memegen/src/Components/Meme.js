import React from 'react'
function Meme()
{
    return(
        <main>
    <form className="form">
        <input className="form--input" placeholder="Top text" type="text" name="first"/>
        <input className="form--input" type="text" placeholder="Bottom text" name="second"/>
        <input className="form--button" type="button"value="Get a new meme image"/>
    </form>
    </main>

    )
}
export default Meme;