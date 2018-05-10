import React from 'react';
import { render } from 'react-dom';
import cards from './data/cards.json';
import MemoryGame from './MemoryGame';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'

export const  { Provider, Consumer }  = React.createContext(cards)

render(
	 
	 <Provider value={cards}>
		 <Router>
			 <MemoryGame />
		 </Router>
	 </Provider>,
	document.getElementById('root')
);