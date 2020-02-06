
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MYtinerayLogo from '../images/MYtineraryLogo.png'
import arrowIcon from '../images/arrowIcon.png'
import homeIcon from '../images/homeIcon.png'

class Landing extends Component {
    render() {
        return (
            <div className="flex-container">

                <div className="headerItem">
                    <img src={MYtinerayLogo} alt="headerImage" />
                </div>

                <div className="infoItem">
                    <p>Find your perfect trip, designed by insiders
                    who know and love their cities</p>
                </div>

                <div className="nextItem">
                    <h1>Start browsing</h1>
                    <Link to="/cities">
                        <img src={arrowIcon} alt="arrowIcon" />
                    </Link>
                </div>

                <div className="linksItem">

                </div>

                <div className="footerItem">

                </div>

            </div>
        )
    }
}

export default Landing;