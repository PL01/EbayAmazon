import React, { Component, Fragment } from 'react';
import Header from './Header';
import Items from '../Items';

class index extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Items {...this.props} />
			</Fragment>
		);
	}
}

export default index;
