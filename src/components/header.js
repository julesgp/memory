import React, {Component} from 'react';

export default class Header extends Component{
	render(){
		return(
			<header>
				<div className="headerWrapper">
					<h1>SocialMatch</h1>
					<p>{this.props.minutesVal}:{this.props.secondsVal}</p>
				</div>
			</header>
		)
	}
}