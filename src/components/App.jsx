/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
	BrowserRouter as
	Router, // Switch, Route, Link,
} from 'react-router-dom';
// import Toggle from './Toggle.jsx';
// import Toggle from './ToggleRenderProps.jsx';
import Toggle from './ToggleRPC.jsx';

import css from './App.css'; // eslint-disable-line no-unused-vars

const App = () => (
	<Router>
		<div className="App">
			<header>
				<h1>Hello World</h1>
			</header>
			<body className="Body">
				<Toggle>
					{
						({ on, toggle }) => (
							<div>
								{
									on &&
									<h1>Show me</h1>
								}
								<button onClick={toggle}>Show/Hide</button>
							</div>
						)
					}
				</Toggle>

				<Toggle>
					{
						({ on, toggle }) => (
							<div>
								{
									on &&
									<nav>Nav Item</nav>
								}
								<button onClick={toggle}>Menu</button>
							</div>
						)
					}
				</Toggle>
			</body>
		</div>
	</Router>
);

export default App;

