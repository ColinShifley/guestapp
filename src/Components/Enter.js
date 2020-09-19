import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import logo from "./images/logo.png";
import './Enter.css';


class Enter extends Component {


    render() {
        return (
            <div className={'l'}>
                <header className="App-header">
                    <img className={'LogoHeader'} src={logo} alt={'logo'}/>
                </header>
                <h1>Please Sign The Book</h1>
                <Link to={'/App'}>
                <button>Enter</button>
                </Link>
            </div>
        );
    }
}

export default Enter;