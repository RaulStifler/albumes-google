import React,{Component} from 'react';
import firebase from '../initializers/firebase';
import AuthElements from '../components/AuthElements';

import { saveToken, clearToken } from '../actions/'

import { connect } from 'react-redux';


class Login extends Component {

	constructor(props){
		super(props)
		this.iniciarSesion = this.iniciarSesion.bind(this);
		this.cerrarSesion = this.cerrarSesion.bind(this);
	}

	iniciarSesion(){
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
		firebase.auth().signInWithPopup(provider).then(
			result => {
				let token = result.credential.accessToken;
				this.props.saveToken(token);
			}).catch(
				err => {
					console.log(err);
				}
			)
	}
	cerrarSesion(){
		firebase.auth().signOut().then(()=>{
			this.props.clearToken()
		});
	}

	render(){
		return (
			<div>
				<AuthElements
					logIn={this.iniciarSesion}
					logOut={this.cerrarSesion}
					token={this.props.token}
					user={this.props.user}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		token: state.token,
		user: state.user
	}
};

const mapDispatchToProps = {
	saveToken,
	clearToken
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);