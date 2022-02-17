import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teste from './components/teste/teste'
import Login from './components/Login/login'
import RequireAuth from './components/GuardedRoute'
import { Provider } from 'react-redux'
import store from './store'

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/redux" element={
						<RequireAuth element={<App />} redirectTo="/"></RequireAuth>
					} />
					<Route
						path="/ariba"
						element={
							<RequireAuth element={<Teste />} redirectTo="/"></RequireAuth>
						}
					/>
					<Route path="/" element={<Navigate replace to="/login" />} />
				</Routes>
		</BrowserRouter>
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);

reportWebVitals();
