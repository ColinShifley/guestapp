import React, { useState, useEffect } from 'react';
import './App.css';
import logo from "./Components/images/logo.png";
import Wrapper from "./Components/Wrapper";
import SignNow from "./Components/SignNow";
import DisplayPosts from "./Components/DisplayPosts";


export default function App() {
    const [post, setPost] = useState('No Posts Yet');
    const [page, setPage] = useState('SignNow');


    // Custom Functions
    function addPost(post) {
        setPost(post);
        console.log('post');
    }


    function activePage(whichPage)  {
        setPage(whichPage)
        console.log(page)
    }

    function displaySignPage() {
        if (page === 'SignNow') {
            console.log('This is the SignNow Display Data')
            return  <SignNow addPost={addPost}/>
        }
    }

useEffect(() => {
    displaySignPage()
    console.log('effect is working')
}, [page])


    return (
        <div className="App">
            <header className="App-header">
                <img className={'LogoHeader'} src={logo} alt={'logo'}/>
            </header>
            <h1>{displaySignPage}</h1>
            <Wrapper activePage={activePage}>

                <DisplayPosts post={post}/>
                {page}
            </Wrapper>

            {/* (This was to test if it worked)
                <h1>{Object.keys(this.state.page).map(key => <SignNow key={key} details={this.state.page[key]}/>)}</h1>
                */}
        </div>
    );


}

