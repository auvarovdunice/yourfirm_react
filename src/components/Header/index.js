import React from "react";
import './header.scss';



class Header extends React.PureComponent {

    componentDidMount() {
    };

    render() {
        return (
            <header className="header">
                <div className={'row justify-content-beetween'}>
                    <div className={'col-2'}>
                        1
                    </div>
                    <div className={'col-8'}>
                        <img src={''}></img>
                    </div>
                    <div className={'col-2'}>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;