import React, { Component } from 'react';
import Card from './Card'


export default class CardList extends Component {

	render () {
		return (
			<div className="box-container">
				{
					this.props.cards.map((card, index) =>
						 <Card key={index} {...card} />
					)
				}
			</div>
		)
	}

}