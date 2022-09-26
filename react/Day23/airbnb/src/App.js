import React from 'react';
import Navbar from './Components/Navbar';

import Card from './Components/Card';
import data from  './data';


function App(){
    //
    console.log("hello");
    const cards=data.map(card=>{
        return(

   <Card
   key={card.id}
   item={card}
   
   />
            )

    })
    return(<div>
         <Navbar/>
       
       <section className="cards-list">
       
        {cards}
        </section>
       
    
        </div>
    )
    
}
export default App;