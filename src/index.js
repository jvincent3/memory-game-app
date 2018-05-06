import React from 'react';
import { render } from 'react-dom';
import MemoryGame from './MemoryGame';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'



render(
	<Router>
		<MemoryGame />
	</Router>,
	document.getElementById('root')
);