import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {MapComponent} from './components/MapComponent/MapComponent'
import Slider from "react-slick";
import { MdVideocam, MdInsertDriveFile } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import actions from './actions';

import previewImage from '../../public/Layer1.png'

import award1 from '../../public/Award1.png'
import award2 from '../../public/Award2.png'
import award3 from '../../public/Award3.png'
import award4 from '../../public/Award4.png'
import award5 from '../../public/Award5.png'


function SlickNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "grey", 'border-radius': "50%", 'background-color':"grey", margin:"0 10px"}}
            onClick={onClick}
        />
    );
}

function SlickPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "grey", 'border-radius': "50%", 'background-color':"grey", margin:"0 10px"}}
            onClick={onClick}
        />
    );
}

class HomePageMain extends Component {

    state = {
        mobileTabValue: 0,
        awards: [
            {id: 1, src: award1},
            {id: 2, src: award2},
            {id: 3, src: award3},
            {id: 4, src: award4},
            {id: 5, src: award5},
        ]
    };

    sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />
    };

    constructor(props) {
        super(props);
    }

    tabChanged = (event, value) => {
        this.setState({mobileTabValue: value});
    };

    render() {
        return (
            <main className={'home-main'}>
                <div className={'container main-container'}>
                    <div className={'tabs d-block d-sm-none'}>
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

                    <div className={'files-section d-block d-sm-none border-top border-bottom'}>
                        <div className={'files-section__row row p-0 m-0 h-100'}>
                            <div className={'files-section__col col-9'}>
                                <div className={'files-section__text h-100 d-flex justify-content-around align-items-center'}>
                                    <span className={'files-section__label d-flex align-items-center justify-content-between text-secondary'}>
                                        <MdInsertDriveFile className={'mr-1'}/>
                                        REF.-NR.
                                    </span>
                                    <span className={'files-section__file'}>YF1919054</span>
                                </div>
                            </div>
                            <div className={'files-section__col col-3'}>
                                <div className={'files-section__controls h-100 d-flex justify-content-between align-items-center'}>
                                    <IoIosArrowBack/>
                                    <IoIosArrowForward/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'main-image border my-5 my-sm-0'}>
                        <img src={previewImage} className={'main-image__content'}></img>
                    </div>

                    <div className={'info-section my-5 p-4 border'}>
                        <div className={'info-section__header'}>Einleitung</div>
                        <div className={'info-section__content'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    <div className={'info-section my-5 p-4 border'}>
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


                    <div className={'info-section my-5 p-4 border'}>
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

                    <div className={'info-section my-5 p-4 border'}>
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

                    <div className={'info-section my-5 p-4 border'}>
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

                    <div className={'row border mx-0 my-5 p-0 location-section'}>
                        <div className={'col-sm-12 col-md-6 p-0 p-md-4 order-2 order-md-1 location-section__col'}>
                            <div className={'map-container position-relative'}>
                                <MapComponent/>
                                <div className={'map-button d-flex justify-content-center align-items-center position-absolute'}>
                                    <span>KARTEN ANZEIGEN</span>
                                </div>
                            </div>
                        </div>
                        <div className={'col-sm-12 col-md-6 p-4 order-1 order-md-2 location-section__col'}>
                            <div className={'location-section__standort'}>
                                <p className={'location-section__header'}>Standort</p>
                                <p className={'location-section__subheader'}>Musterfirma GmbH</p>
                                <p className={'location-section__content'}>Völklinger Str. 1, 40219 Düsseldorf,
                                    Deutschland</p>
                            </div>
                        </div>
                    </div>

                    <div className={'awards-section my-5 p-4 border'}>
                        <p className={'awards-section__header'}>Auszeichnungen</p>
                        <div className={'d-none d-sm-flex justify-content-start m-0'}>
                            {this.props.awards && this.props.awards.map((item) =>
                                <div key={item.id} className={'mr-3'}>
                                    <img src={item.src}  alt={'award'}></img>
                                </div>)}
                        </div>
                        <div className={'d-sm-none m-0 awards-section__slick'}>
                            <Slider {...this.sliderSettings}>
                                {this.props.awards && this.props.awards.map((item) =>
                                    <div key={item.id} className={'awards-section__slick-container d-flex align-items-center justify-content-center'}>
                                        <img src={item.src}  alt={'award'} className={'awards-section__slick-img'}></img>
                                    </div>)
                                }
                            </Slider>
                        </div>
                    </div>

                    <div className={'mobile-actions row mt-5 p-0 border d-sm-none border-top'}>
                        <div className={'mobile-actions__col col-6 p-0'}>
                            <div className={'mobile-actions__button h-100 d-flex justify-content-center align-items-center text-white bg-success'}>
                                <span>BEWERBEN</span>
                            </div>
                        </div>
                        <div className={'mobile-actions__col col-6 p-0'}>
                            <div className={'mobile-actions__button h-100 d-flex justify-content-center align-items-center text-success bg-white'}>
                                <span>PER <MdVideocam className={'h-100 '}/> BEWERBEN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    componentDidMount() {
        this.props.getAwards();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        awards: state.home.awards
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAwards: actions.getAwards,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePageMain);

