/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
	BrowserRouter as
	Router, // Switch, Route, Link,
} from 'react-router-dom';
import Toggle from './Toggle.jsx';

import css from './App.css'; // eslint-disable-line no-unused-vars

const App = () => (
	<Router>
		<div className="App">
			<header>
				<h1>Hello World</h1>
			</header>
			<body className="Body">
				<Toggle />
				<Toggle>
					<h1>Wow this is neat</h1>
				</Toggle>
			</body>
		</div>
	</Router>
);

export default App;

