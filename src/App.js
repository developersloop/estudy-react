import React from "react";
import { Control, Form,Errors } from 'react-redux-form';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { isEmail, required } from './utils/utils'

import './App.scss';

// const mapStateToProps = (state) => (
// 	{ 
// 		name: state.redux.user.name,
// 		last: state.redux.user.lastname
// 	}
// );
function App(props) {

	let { name, last } = props
	
	function handleSubmit(payload) {
		props.dispatch({ type: 'INCREMENT', payload, })
	}
	return (
		//<div>
		//	<Form model="deep.usuario" onSubmit={(val) => handleSubmit(val)}>
			// 	<label>Your name?</label>
			// 	<div>
			// 		<Control
			// 			type="text"
			// 			model=".name"   
			// 			validators={{
			// 				required,
			// 				isEmail,
			// 			}}
			// 		/>
			// 		<Errors
			// 			className="errors"
			// 			model=".name"
			// 			show="touched"
			// 			messages={{
			// 				required: 'Campo requirido',
			// 				isEmail: (val) => { if (val) return 'isso nao é um email'}
			// 			}}
			// 		>
			// 		</Errors>
			// 	</div>
			// 	<button>Submit!</button>
			// </Form>
			// <div>
			//</div>
			// </div>
		<Link to="/ariba">Ariba</Link>
	);
}

export default App;
