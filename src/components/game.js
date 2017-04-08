import React, {Component} from 'react';

export default class Game extends Component{
	render(){
		return(
			<section>
				<div className="cardsWrapper">
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
					<div className="card">
					</div>
				</div>
				<div className="buttonsWrapper">
					<button onClick={this.props.startGame}>Start</button>
				</div>
			</section>
		)
	}
}