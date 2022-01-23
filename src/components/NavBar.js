import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends Component {
    render() {

        let { title } = this.props;
        return (

            <div>
                <nav className={`navbar navbar-expand-lg ${this.props.mode==='light'?"navBarLight":"navBarDark"}`}>
                    <div className="container-fluid">
                        <Link className={`navbar-brand ${this.props.mode==='light'?"navbarTitleLight":"navbarTitleDark"}`} to="/">&#127752;{title}</Link>
                        <button className={`navbar-toggler navbar-${this.props.mode} `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light">
                                <li className="nav-item">
                                    <Link className={`nav-link active navBarItem ${this.props.mode==='light'?"":"lightText"}`} aria-current="page" to="/">Home</Link>
                                </li>
           
                                <li className="nav-item dropdown navbar-light">
                                    <Link className={`${this.props.mode==='light'?"nav-link dropdown-toggle navBarItem":" nav-link dropdown-toggle navBarItem lightText"}`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu navbar-light navBarDark" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item navbar-light lightText" to="/business">Business</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light lightText" to="/entertainment">Entertainment</Link></li>
                                        <li><hr className="dropdown-divider lightText"/></li>
                                        <li><Link className="dropdown-item navbar-light lightText" to="/sports">Sports</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light lightText" to="/health">Health</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light lightText" to="/technology">Technology</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light lightText" to="/health">Health</Link></li>
                    
                                    </ul>

                                </li>
                               
                            </ul>
                            <div className="form-check form-switch switchButton">
                            <input className="form-check-input" onClick={this.props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label ${this.props.mode === 'light' ? "darkText" : "lightText"}`} htmlFor="flexSwitchCheckDefault" >{this.props.modeType}</label>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
