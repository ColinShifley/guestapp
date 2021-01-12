import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.activePage(event.target.name)
    }

    render() {
        return (
            <div className={'btnContainer'}>
                <button name={'SignNow'} onClick={this.handleClick.bind(this)}className={'btn1'}>
                    <h1>Sign Now</h1>
                </button>
                <button name={'DisplayPosts'} onClick={this.handleClick.bind(this)} className={'btn2'}>
                    <h1>Display Posts</h1>
                </button>
                <button name={'Posts'} onClick={this.handleClick.bind(this)} className={'btn3'}>
                    <h1>Posts</h1>
                </button>
            </div>
        );
    };
}
export default Navbar;