import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {

    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick = (event) => {
    //     event.preventDefault();
    //     const page1 = event.target.id;
    //     this.props.activePage(page1)
    // }

    handleClick = (event) => {
        event.preventDefault()
        this.props.activePage(event.target.name)
    }


    render() {
        return (
            <div className={'btnContainer'}>
                {/*<button id={'Sign Now'} onClick={(e) => this.handleClick(e), id} className={'btn1'}>*/}
                <button name={'SignNow'} onClick={this.handleClick.bind(this)}>
                    <h1>Sign Now</h1>
                </button>
                <button name={'DisplayPosts'} onClick={this.handleClick.bind(this)} className={'btn2'}>
                    <h1>Display Posts</h1>
                </button>
                <button id={'Posts'} onClick={this.handleClick.bind(this)} className={'btn3'}>
                    <h1>Posts</h1>
                </button>
            </div>
        );
    };
}
export default Navbar;