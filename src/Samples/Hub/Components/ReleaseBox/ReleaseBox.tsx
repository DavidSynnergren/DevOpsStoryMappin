import * as React from 'react';
import './ReleaseBox.scss';

export default class ReleaseBox extends React.Component<any> {
	state = {};
	public render() {
		return (
			<div className="releasebox">
				<h2>{this.props.displayHeader}</h2>
			</div>
		);
	}
}
