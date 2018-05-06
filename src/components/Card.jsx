import React from 'react';


const Card = props => (
	 <div className="box border border-primary rounded">
		 <img className="img w-100" src={props.image} alt={props.name} />
	 </div>
)

export default Card