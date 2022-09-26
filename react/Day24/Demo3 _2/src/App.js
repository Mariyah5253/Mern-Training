import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
   let starIcon=contact.isFavorite? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact =>{
            console.log(prevContact.isFavorite)
            return {
    
                isFavorite: !prevContact.isFavorite
            }
        } )
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" alt="" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} alt="" 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
                
            </article>
        </main>
    )
}
