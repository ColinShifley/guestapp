import React from 'react';
import './App.css';
import logo from "./Components/images/logo.png";
import Wrapper from "./Components/Wrapper";
//import SignNow from "./Components/SignNow";
//import DisplayPosts from "./Components/DisplayPosts";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: '',
            page: ''
        }
    }

    // Custom Functions
        addPost = post => {
            //1. Take a copy of existing Posts
            const posts = {...this.state.posts};
            //2. add our new Posts to the Posts
            posts[`post${Date.now()}`] = post;
            //3. Set the new Posts objest to state
            this.setState({posts});
            console.log(post);
        }

        activePage = whichPage => {
                let currentPage = {...this.state.page};
                //trying to fix Asynchronous issue with Page
                currentPage = whichPage;
                this.setState(() => ({
                    page: currentPage
                }), () => {
                    console.log(this.state.page)
                });
        }

    render() {

        return (
            <div className="App">
                    <header className="App-header">
                        <img className={'LogoHeader'} src={logo} alt={'logo'}/>
                    </header>

                    <Wrapper activePage={this.activePage}></Wrapper>

                {/* (This was to test if it worked)
                <h1>{Object.keys(this.state.page).map(key => <SignNow key={key} details={this.state.page[key]}/>)}</h1>
                */}
            </div>
        );
    }
}

export default App;
