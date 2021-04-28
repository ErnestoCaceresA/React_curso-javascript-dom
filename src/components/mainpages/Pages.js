import React from "react"
import { Switch, Route } from 'react-router-dom'

// componentes
import Indice from './indice/Indice'
import Documentation from './documentation/Documentation'

function Pages(){
	return(
		<Switch>
			<Route path="/" exact component={Indice} />
			<Route path="/documentation" exact component={Documentation} />
		</Switch>
										
	)
	
}

export default Pages

