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
		const { render } = this.props;
		return (
			<div>
				{render({
					on: this.state.on,
					toggle: this.toggle,
				})}
			</div>
		);
	}
}

Toggle.propTypes = {
	render: PropTypes.func.isRequired,
};

