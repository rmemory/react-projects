import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
	state = {
		on: false,
	}

	toggle = () => {
		this.setState({
			on: !this.state.on,
		});
	}

	render() {
		return (
			<div>
				{
					!this.props.children && this.state.on &&
						<h1>Toggle Me</h1>
				}
				{
					this.props.children && this.state.on &&
						this.props.children
				}

				<button onClick={this.toggle}>Show/Hide</button>
			</div>
		);
	}
}

Toggle.propTypes = {
	children: PropTypes.string,
};

Toggle.defaultProps = {
	children: undefined,
};
