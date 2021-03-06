import './Hub.scss';

import * as React from 'react';
import * as SDK from 'azure-devops-extension-sdk';

import { Page } from 'azure-devops-ui/Page';
import { Header, TitleSize } from 'azure-devops-ui/Header';

import { showRootComponent } from '../../Common';
import Column from './Components/Column/Column';

interface IHubContentState {
	selectedTabId: string;
	fullScreenMode: boolean;
	headerDescription?: string;
	useLargeTitle?: boolean;
	useCompactPivots?: boolean;
}

class HubContent extends React.Component<{}, IHubContentState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			selectedTabId: 'overview',
			fullScreenMode: false
		};
	}

	public componentDidMount() {
		SDK.init();
	}

	public render(): JSX.Element {
		const { selectedTabId, headerDescription, useCompactPivots, useLargeTitle } = this.state;

		return (
			<Page className="sample-hub flex-grow">
				<Header title="Story Mappin'" titleSize={useLargeTitle ? TitleSize.Large : TitleSize.Medium} />
				<div className="column-wapper">
					<Column isFirst="true" rows="3" />
					<Column isFirst="false" rows="3" />
					<Column isFirst="false" rows="3"/>
				</div>
			</Page>
		);
	}
}

showRootComponent(<HubContent />);
