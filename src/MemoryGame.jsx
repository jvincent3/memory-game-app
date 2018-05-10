import React, {Component} from 'react'
import CardList from './components/CardList';
import { Switch, Route } from 'react-router-dom'
import ResultPage from './components/ResultPage'
import PageNotFound from './components/PageNotFound'


export default class MemoryGame extends Component {
	
	render () {
		return (
				 <div className="container mt-5">
					 <h1 className="display-4 bg-primary p-2 rounded text-white text-center mb-5">MemoryGame</h1>
					 <Switch>
						 <Route path="/" exact component={CardList} />
						 <Route path="/results" exact component={ResultPage} />
						 <Route exact component={PageNotFound} />
					 </Switch>
				 </div>
		)
	}


}