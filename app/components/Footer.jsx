import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="grid-centered mt0 mb0">
                <div className="col-8_sm-10_xs-11 off-3_xs-1 pb0 center-vertical">
                    <p className="f5 mt1 mb1 tracked">
                        Follow us on <a href='https://twitter.com/uvicsdaml'>Twitter
                        <i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
