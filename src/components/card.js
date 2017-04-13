import React from 'react';

export default (props)=>{
	return(
		<li className="card" name={props.cardId} onClick={()=>console.log(props.cardId)}>{props.card}</li>
	)
}