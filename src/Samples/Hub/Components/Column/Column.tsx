import * as React from 'react';
import GoalBox from '../GoalBox/GoalBox';
import ReleaseBox from '../ReleaseBox/ReleaseBox';

export default class Column extends React.Component<any> {
	state = {};

	public render(): JSX.Element {
		return (
			<div>
				<GoalBox />

				<ReleaseBox />
			</div>
		);
	}
}
