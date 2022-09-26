import React from 'react';
import img from '../logo.svg';
function Header()
{
    return(
        <header><nav><div id="root1">
<img src={img} alt="logo image here" width='80px'/>
<h3>ReactFacts</h3></div>
<div id="root2">
<h4>React Course - Project 1</h4></div>

</nav>
</header>
  )
    
}

export default Header; 