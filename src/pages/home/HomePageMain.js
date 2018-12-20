import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import previewImage from '../../public/Layer1.png'

class HomePageMain extends Component {

    state = {
        mobileTabValue: 0,
    };


    constructor() {
        super();
    }

    tabChanged = (event, value) => {
        this.setState({mobileTabValue: value});
    };

    render() {

        return (
            <main className={'home-main'}>
                <div className={'container main-container'}>
                    <div className={'main-tabs'}>
                        <Tabs
                            value={this.state.mobileTabValue}
                            onChange={this.tabChanged}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                        >
                            <Tab label="ANZEIGE"/>
                            <Tab label="FIRMENPROFILE"/>
                        </Tabs>
                    </div>

                    <div className={'main-image'}>
                        <img src={previewImage} className={'main-image__content'}></img>
                    </div>
                </div>
            </main>
        );
    }
}

export default HomePageMain;
