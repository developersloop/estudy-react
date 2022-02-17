import { combineReducers } from "redux";
import { combineForms } from 'react-redux-form';
import loginReducer from "./loginReducer";

export default combineReducers(
	{ 
		formModel: combineForms(
		{
			login: loginReducer,
		}, 'formModel'),
	}
);