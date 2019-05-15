import * as React from 'react';
import './Column.scss';
import GoalBox from '../GoalBox/GoalBox';
import ReleaseBox from '../ReleaseBox/ReleaseBox';

export default class Column extends React.Component<any> {
	state = {};

	public render(): JSX.Element {
		if (this.props.isFirst === "true") {
			return (
				<div className="column">
					<GoalBox />
	
					<ReleaseBox displayHeader="Release 1" />
					<ReleaseBox displayHeader="Release 2" />
					<ReleaseBox displayHeader="Release 3" />
					<ReleaseBox displayHeader="Future" />
				</div>
			);
		}
		return (
			<div className="column">
				<GoalBox />

				<ReleaseBox displayHeader="" />
				<ReleaseBox displayHeader="" />
				<ReleaseBox displayHeader="" />
				<ReleaseBox displayHeader="" />
			</div>
		);
	}
}
