import React from "react";
import './header.scss';
import { IoIosArrowBack, IoMdShare } from "react-icons/io";
import logo from '../../public/Logo.png'




class Header extends React.PureComponent {

    componentDidMount() {
    };

    render() {
        return (
            <header className="header">
                <div className={'d-sm-none row justify-content-between align-items-center mobile-header'}>
                    <div className={'col-1'}>
                        <IoIosArrowBack className={'icon'}></IoIosArrowBack>
                    </div>
                    <div className={'col-6'}>
                        <div className={'d-flex justify-content-center align-center logo-container'}>
                            <img src={logo} alt={'logo'}></img>
                        </div>
                    </div>
                    <div className={'col-1'}>
                        <IoMdShare className={'icon'}></IoMdShare>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;