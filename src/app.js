import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Buttons from './components/initialPage.js';
import Game from './components/game.js';
import InitialPage from './components/initialPage.js';


class App extends Component {
	constructor(){
		super();
		this.state ={
			displayHeader: true,
			displayButtons: true,
			displayGame: true,
			game:[
				["A", "id1"],
				["A1", "id1"],
				["B", "id2"],
				["B1", "id2"],
				["C", "id3"],
				["C1", "id3"],
				["D", "id4"],
				["D1", "id4"],
				["E", "id5"],
				["E1", "id5"],
				["F", "id6"],
				["F1", "id6"]
			],
			cardContent:{
				indexOne: false,
				indexTWo: false,
				indexThree: false,
				indexFour: false,
				indexFive: false,
				indexSix: false,
				indexSeven: false,
				indexEight: false,
				indexNine: false,
				indexTen: false,
				indexEleven: false,
				indexTwelve: false,
			},
			time:"00",
			minutes:"0",
			seconds: "00",
		};
		this.timer = this.timer.bind(this);
		this.setTimer = this.setTimer.bind(this);
		this.selectedEasy = this.selectedEasy.bind(this);
		this.selectedModerate = this.selectedModerate.bind(this);
		this.selectedDifficult = this.selectedDifficult.bind(this);
		this.displayCard = this.displayCard.bind(this);
	}

	setTimer(){
		if(this.state.time > "60"){
			var calcTime = this.state.time; 
			var secondsReminder = calcTime % 60;
			var numberMinutes = (calcTime - secondsReminder)/60;
			this.setState({
				minutes: numberMinutes,
				seconds: secondsReminder,
			});
		}
		if(this.state.time === "60"){
			this.setState({
				minutes: "1",
				seconds: "00",
			});
		}

		if(this.state.time < "60"){
			let secondsTime = this.state.time;
			this.setState({
				seconds: secondsTime,
			});
		}
	}

	selectedEasy(){
		this.setState({
			time:"90",
		});
	}

	selectedModerate(){
		this.setState({
			time:"60",
		});
	}

	selectedDifficult(){
		this.setState({
			time:"30",
		});
	}

	timer(){
		this.setTimer();
		var timerInterval = window.setInterval(() => {
			console.log("this is happening!");
			var seconds = this.state.seconds;
			var minutes = this.state.minutes;
			if(minutes >= "1"){
				if(seconds==="00"){
					minutes--;
					seconds="59";
				} else{
					seconds--;
					if(seconds <"10"){
						seconds = "0"+seconds;
					}
				}
			} else{
				if(seconds === "00"){
					console.log("ran outta time!");
					clearInterval(timerInterval);
				}else{
					seconds--;
					if(seconds <"10"){
						seconds = "0"+seconds;
					}
				}
			}
			this.setState({
				minutes: minutes,
				seconds: seconds,
			});
		}
		,1000);
	}

	displayCard(){
		this.setState({
			cardContent:{
				indexOne:true,
			},
		});
	}

	clickedOne(){
		console.log("I am being clicked");
		console.log(this);
	}

    render() {
    	let showHeader = "";
    	if(this.state.displayHeader === true){
    		showHeader = (
    			<Header secondsVal={this.state.seconds} minutesVal={this.state.minutes}/>
    		)
    	}
    	
    	let showButtons= "";
    	if(this.state.displayButtons === true){
    		showButtons = (
    			<Buttons
    				easy={this.selectedEasy}
    				moderate={this.selectedModerate}
    				difficult={this.selectedDifficult}
    			/>
    		)
    	}

    	let showGame= "";
    	if(this.state.displayGame === true){
    		showGame = (
    			<Game 
    				startGame={this.timer}
    				stateCard={this.state.cardContent.indexOne}
    				displayContent={this.displayCard}
    				thisGame={this.state.game}
    			/>
    		)
    	}
        return (
        	<div>
            	{showHeader}
            	{showButtons}
            	{showGame}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));