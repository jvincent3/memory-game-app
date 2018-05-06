import React, { Component } from 'react';
import cards from './data/cards.json';
import CardList from './components/CardList';


export default class MemoryGame extends Component {


	state = {
		cards
	}


	render () {
		console.log(this.state)
		return (
			<div className="container mt-5">
				<h1 className="display-4 bg-primary p-2 rounded text-white text-center">MemoryGame</h1>
				<CardList {...this.state} />
			</div>
		)
	}


}