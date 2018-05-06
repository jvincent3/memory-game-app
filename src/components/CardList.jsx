import React, { Component } from 'react';



export default class CardList extends Component {


	state = {}


	render () {
		return (
			<p>{JSON.stringify(this.props)}</p>
		)
	}

}