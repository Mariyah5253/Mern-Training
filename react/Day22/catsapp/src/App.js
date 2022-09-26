import React from "react";
import Card from "./Components/Card";

function App() {
    return (
       
    
        <div className="contacts">
           <Card
           img="../images/mr-whiskerson.png"
           name="Mr. Whiskerson"
           phone="(212) 555-2345"
           mail="mr.whiskaz@catnap.meow"

           
           />
            <Card
           img="../images/fluffykin.png"
           name="Fluffykins"
           phone="(212) 555-2345"
           mail="fluff@me.com"

           
           />
            <Card
           img="../images/felix.png"
           name="Mr. Whiskerson"
           phone="(212) 555-4567"
           mail="thecat@hotmail.com"

           
           />
            <Card
           img="../images/pumpkin.png"
           name="Pumpkin"
           phone="(212) 555-2345"
           mail="pumpkin@scrimba.com"

           
           />
          
              
       
            
        </div>
    )
}

export default App;