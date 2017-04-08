import React, {Component} from 'react';

export default class Game extends Component{
	render(){
		return(
			<section>
				<div className="buttonsWrapper">
					<button onClick={this.props.startGame}>Start</button>
				</div>
			</section>
		)
	}
}