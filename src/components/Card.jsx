import React from 'react';


const Card = ({ image, name })=> (
	 <div className="box border border-primary rounded">
		 <img className="img w-100" src={image} alt={name} />
	 </div>
)

export default Card