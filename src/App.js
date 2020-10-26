import React, { useState } from 'react';
import './App.css';
import logo from "./Components/images/logo.png";
import Wrapper from "./Components/Wrapper";
import SignNow from "./Components/SignNow";
import DisplayPosts from "./Components/DisplayPosts";


export default function App() {
    const [post, setPost] = useState('');
    const [page, setPage] = useState('SignNow');


    // Custom Functions
    function addPost(post) {
        setPost(post);
        console.log(post);
    }


    function activePage(whichPage)  {
        setPage(whichPage)
        console.log(page)
        console.log(post)
    }


let dpage;
    if (page === 'SignNow') {
        dpage = <SignNow addPost={addPost}></SignNow>
    };

let dPosts;
    if (page === 'DisplayPosts') {
        dPosts = <DisplayPosts post={post}></DisplayPosts>
    }


    // useEffect(() => {
    //     function displaySignPage() {
    //         if (page === 'SignNow') {
    //             const sNPage = (
    //                 <div>
    //                     <SignNow addPost={addPost}>{post}</SignNow>
    //                 </div>
    //             )
    //             console.log('This is the SignNow Display Data')
    //             return sNPage
    //         } else
    //         {
    //             return null
    //         }
    //     }
    //     displaySignPage()
    //     console.log('effect is working')
    // }, [page, post])




    return (
        <div className="App">
            <header className="App-header">
                <img className={'LogoHeader'} src={logo} alt={'logo'}/>
            </header>

            <Wrapper activePage={activePage} dpage={dpage} dPosts={dPosts}>

            </Wrapper>
        </div>
    );


}

