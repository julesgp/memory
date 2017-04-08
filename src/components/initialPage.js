import React, {Component} from 'react';

export default class Buttons extends Component{
	render(){
		return(
			<section>
				<div className="buttonsWrapper">
					<button onClick={this.props.easy}>Easy</button>
					<button onClick={this.props.moderate}>Moderate</button>
					<button onClick={this.props.difficult}>Difficult</button>
				</div>
			</section>
		)
	}
}