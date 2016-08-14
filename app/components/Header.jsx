import React, { Component } from 'react';

import Logo from '../assets/sdaml_logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="grid-centered">
                <div className="col-8_sm-10_xs-11 off-3_xs-1 grid-12 center-vertical animated fadeInLeft">
                    <div className="vertical-wrapper">
                        <div className="logo col-12 pb0">
                            <img srcSet={Logo} className="animated fadeIn" />
                        </div>
                        <div className="copy col-12">
                            <p className="f3 mt0 mb0 measure">
                                software development &
                                applied machine learning
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
