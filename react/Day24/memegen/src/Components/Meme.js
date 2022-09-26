import React from 'react'
import memesData from '../memesData';
export default function Meme() {
    const [memeImage1, setMemeImage] = React.useState({
        but: "http://i.imgflip.com/1bij.jpg",
        topText: "You are a complete",
        bottomText: "Zero"
    })

    function getMemeData(event) {
        setMemeImage(prevFormData => {
            if (event.target.name == 'but') {
                const memesArray = memesData.data.memes;
                const randomNumber = Math.floor(Math.random() * (memesArray.length + 1))
                //console.log(randomNumber,Math.random()*memesArray.length);
                const url = memesArray[randomNumber].url
            

            return {
                ...prevFormData,
                [event.target.name]: url

            }
              
            }

            return {
                ...prevFormData,
                [event.target.name]: event.target.value

            }
        }

        )

    }
    return (
        <main>
            <div className="form">
                <input className="form--input" onChange={getMemeData} placeholder="Top text" type="text" name="topText" id='fi' />
                <input className="form--input" onChange={getMemeData} type="text" placeholder="Bottom text" name="bottomText" />
                <button className="form--button" onClick={getMemeData} name="but" >Get a new meme image </button>

            </div>
            <div >
                <img className='img1' src={memeImage1.but} alt="" />
                <p className="Top">{memeImage1.topText}</p>
                <p className="Bottom">{memeImage1.bottomText}</p>
            </div>
        </main>

    )
}
