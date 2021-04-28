import React, {useState} from "react"
import {Link} from 'react-router-dom'

import Bars from '../../img/bars-solid.svg'
import Close from '../../img/window-close-regular.svg'

function Header(){


	const show = () => {
		document.getElementById("Header-ul").style.right = "0"
	}

	const close = () => {
		document.getElementById("Header-ul").style.right = "100vw"
	}

	return (
    <div className="Header">
      <img src={Bars} alt="" onClick={show} />
	<img src={Close} alt="" onClick={close}/>
      <ul id="Header-ul" >
        <Link to="/">Indice</Link>
        <Link to="/documentation">Documentation</Link>
        <Link>Otros</Link>
      </ul>
    </div>
  );
	
}

export default Header
