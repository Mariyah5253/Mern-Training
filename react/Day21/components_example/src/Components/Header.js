import React from 'react';
import img from '../logo.png';
function Header()
{
  return(
    <header><nav>
<img src={img} alt="logo image here" width='150px'/>
<ul>
  <li>Tutorials</li>
  <li>About</li>
  <li>Contact</li>
</ul>
</nav>
</header>
  )
}
export default Header;