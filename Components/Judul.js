import	React , {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return (
			<Text style= {salon.Judul}>login</Text>
		)
	}
}

const salon = {
	Judul : {
		color : "#7D1313",
		fontSize: 75,
		fontWeight : 'bold'
	}
}

export default Judul ;