import React, {Component} from 'react';
import CardItem from './card.js';

export default class Game extends Component{
	render(){
		return(
			<section>
				<ul className="cardsWrapper">
					{this.props.thisGame.map((card,i) =>{
						return (
							<CardItem key={i} card={card[0]} cardId={card[1]}/>
						)
					})}
				</ul>
				<div className="buttonsWrapper">
					<button onClick={this.props.startGame}>Start</button>
				</div>
			</section>
		)
	}
}