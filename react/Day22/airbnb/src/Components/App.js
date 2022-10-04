import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
function App(){
    
    return(
        <>
        <Navbar/>
        <Hero/>
        <Card
        img="../images/katie-zaferes.png"
        rating="5.0"
        review_count="(6)."
        title="Life Lessons with Katie Zaferes"
        price="136"
        country="USA"

        />
        </>
    )
}
export default App;