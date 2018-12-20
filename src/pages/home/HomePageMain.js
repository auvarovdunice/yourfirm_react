import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {GoogleMap, Marker} from "react-google-maps"
import {MapComponent} from './components/MapComponent/MapComponent'

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
                    <div className={'tabs'}>
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

                    <div className={'main-image border'}>
                        <img src={previewImage} className={'main-image__content'}></img>
                    </div>

                    <div className={'info-section border'}>
                        <div className={'info-section__header'}>Einleitung</div>
                        <div className={'info-section__content'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    <div className={'info-section border'}>
                        <div className={'info-section__header'}>Ihre Aufgaben</div>
                        <div className={'info-section__content'}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={'info-section border'}>
                        <div className={'info-section__header'}>Ihr Profil</div>
                        <div className={'info-section__content'}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>

                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={'info-section border'}>
                        <div className={'info-section__header'}>Wir bieten</div>
                        <div className={'info-section__content'}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={'info-section border'}>
                        <div className={'info-section__header'}>Kontakt:</div>
                        <div className={'info-section__subheader'}>Haben wir Ihr Interesse geweckt?</div>

                        <div className={'info-section__content'}>
                            Wir freuen uns auf Ihre aussagekräftige Bewerbung unter Angabe Ihrer Gehaltsvorstellung und
                            des frühestmöglichen Eintrittstermins per E-Mail an: <a href="">job@musterfirma.de.</a> Bei
                            Rückfragen steht Ihnen Herr Max Mustermann gerne unter der Telefonnummer 0211 / 934 93 5802
                            zur Verfügung.
                        </div>
                        <div className={'info-section__content'}>
                            <p className={'info-section__credo'}>Musterfirma GmbH</p>
                            <p className={'info-section__credo'}> Musterstraße 24</p>
                            <p className={'info-section__credo'}>12345 Musterstadt</p>
                            <p className={'info-section__credo'}><a href="">www.musterfirma.de</a></p>
                        </div>
                    </div>

                    <div className="embed-responsive embed-responsive-16by9 video-section">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qWoXz-f6HUg"
                                allowFullScreen></iframe>
                    </div>

                    <div className={'row border mx-0 my-3 p-3 location-section'}>
                        <div className={'col-sm-12 col-md-6 location-section__col'}>
                            <div className={'map-container'}>
                                <MapComponent/>
                            </div>
                        </div>
                        <div className={'col-sm-12 col-md-6 location-section__col'}>

                        </div>
                    </div>

                </div>
            </main>
        );
    }
}

export default HomePageMain;
