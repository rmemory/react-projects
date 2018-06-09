/* eslint-disable react/no-did-mount-set-state */
import React, { Fragment } from 'react';
import {
	BrowserRouter as
	Router, // Switch, Route, Link,
} from 'react-router-dom';

import { Toggle, Portal, Modal } from '../Utilities';

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
							<Fragment>
								<button onClick={toggle}>Login</button>
								<Modal on={on} toggle={toggle}>
									<h1>This is modal stuff</h1>
								</Modal>
							</Fragment>
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

				<Portal>
					<h1>Hi, I am in a portal</h1>
				</Portal>
			</body>
		</div>
	</Router>
);

export default App;

