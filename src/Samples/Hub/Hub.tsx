import "./Hub.scss";

import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Page } from "azure-devops-ui/Page";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { Card } from "azure-devops-ui/Card";
import { SplitterElementPosition, Splitter } from "azure-devops-ui/Splitter";

import { showRootComponent } from "../../Common";

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
            selectedTabId: "overview",
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
                <Header
                    title="Story Mappin'"
                    titleSize={useLargeTitle ? TitleSize.Large : TitleSize.Medium} />            
                <Card>
                    <Splitter
                        fixedElement={SplitterElementPosition.Near}
                        splitterDirection={0}
                        initialFixedSize={300}
                        minFixedSize={100}
                        nearElementClassName="v-scroll-auto custom-scrollbar"
                        farElementClassName="v-scroll-auto custom-scrollbar"
                        onRenderNearElement={this._renderNearContent}
                        onRenderFarElement={this._renderFarContent} />  
                </Card>
            </Page>
        );
    }

    private _renderNearContent(): JSX.Element {
        return (
            <div style={{ padding: "16px" }}>
                <Header
                    title="Release 1"
                    titleSize={TitleSize.Small} />   
                <p>Lägg kort här typ...</p>
            </div>
        );
    }

    private _renderFarContent(): JSX.Element {
        return (
            <div style={{ padding: "16px" }}>
                <Header
                    title="Release 2"
                    titleSize={TitleSize.Small} />   
                <p>... och några här kanske.</p>
            </div>
        );
    }
}

showRootComponent(<HubContent />);