import React from 'react';
import './App.css';
import logo from "./Components/images/logo.png";
import Wrapper from "./Components/Wrapper";


class App extends React.Component {
    state = {
            posts: {},
            page: {}
        }



    //Custom Functions
    //     addPost = post => {
    //         //1. Take a copy of existing Posts
    //         const posts = {...this.state.posts};
    //         //2. add our new Posts to the Posts
    //         posts[`post${Date.now()}`] = post;
    //         //3. Set the new Posts objest to state
    //         this.setState({posts});
    //         console.log(post);
    //     }

        activePage = whichPage => {
                //trying to fix Asynchronous issue with Page
                this.setState(() => ({
                    page: whichPage
                }), () => {
                    console.log(this.state.page)
                });

console.log(this.state.page)
                // Code below works kind of
                // this.setState({page: whichPage})
                // console.log(this.state.page)
        }


    render() {
        return (
            <div className="App">
                    <header className="App-header">
                        <img className={'LogoHeader'} src={logo} alt={'logo'}/>
                    </header>
                    <Wrapper activePage={this.activePage}></Wrapper>
                <h1>{Object.keys(this.state.page).map(key => <p key={key}>{key}</p> )}</h1>
            </div>
        );
    }
}

export default App;
