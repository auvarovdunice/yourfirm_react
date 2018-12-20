import React from "react";
import './header.scss';
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoMdShare } from "react-icons/io";
import logo from '../../public/Logo.png'




class Header extends React.PureComponent {

    componentDidMount() {
    };

    render() {
        return (
            <header className="header">
                <div className={'row justify-content-between mobile-header'}>
                    <div className={'col-1'}>
                        <IoIosArrowBack className={'icon'}></IoIosArrowBack>
                    </div>
                    <div className={'col-6'}>
                        <div className={'logo-container'}>
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