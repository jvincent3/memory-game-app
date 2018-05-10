import React, { Component } from 'react';
import Card from './Card'

import { Consumer } from '../'

export default class CardList extends Component {

	render () {
		
		
		
		//const cards = this.props.cards.map((card, index) => <Card key={index} {...card} />)
		
		return (
			<div className="box-container">
				<Consumer>
					{ cards => cards.map((card, index) => <Card key={index} {...card} />) }
				</Consumer>
			</div>
		)
	}

}