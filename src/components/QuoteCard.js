import React from 'react';
import axios from 'axios';


class QuoteCard extends React.Component{
	state = {
		quote :[
        {
        "quote": "By chilling my loins I increase the chances of impregnating my wife.",
        "character": "Apu Nahasapeemapetilon",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
        }
	  ]
	}

	getSimpsonsQuotes = () => {
		axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
		  .then(res => {
			this.setState({
			  quote: res.data[0],
			});
		});
	  }

	  componentDidMount() {
        this.getSimpsonsQuotes()
    }

	render(){
		return(
			<div>
				<div>
					<p>{this.state.quote.character}</p>
					<img src={this.state.quote.image}></img>
					<p>{this.state.quote.quote}</p>
					<p></p>
				</div>
				<button onClick={this.getSimpsonsQuotes}> click me!</button>
			</div>
		)
	}
}

export default QuoteCard;