import React, { useState, useEffect } from 'react';
import firebase from "./firebase";
import './App.css';
import logo from "./Components/images/logo.png";
import Wrapper from "./Components/Wrapper";
import SignNow from "./Components/SignNow";
import Posts from "./Components/Posts"
import DisplayPosts from "./Components/DisplayPosts";
import { FooterContainer} from "./container/footer";

export default function App() {
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState('SignNow');
    const [count, setCount] = useState(0)
    const [fCloud, setFCloud] = useState([])
console.log('its working')

    // Custom Functions
    function addPost(post) {
        // Using .concat(), wrapper function (recommended)
        setPost(posts => [...posts, post]);
        addToFire(post)
    }

    function addToFire(post) {
       const db = firebase.firestore();
                 db.collection('Posts').add({post: post})
    }

    useEffect(() => {
            const db = firebase.firestore();
            return db.collection('Posts').onSnapshot(snapshot => {
                const PostsData = []
                snapshot.forEach(doc => PostsData.push({...doc.data(), id: doc.id}))
                setFCloud(PostsData)
            });
    }, [])

    function addToCount() {
        setCount(count + 1)
    }

    function activePage(whichPage)  {
        setPage(whichPage)
        // console.log(page)
        // console.log("Post: ", posts)
        // console.log('FCloud: ', fCloud)
        // console.log('FStuff: ', fStuff)
    }

     useEffect(() => {
         localStorage.setItem('posts', JSON.stringify(posts))
     }, [posts]);

var dpage;
        if (page === 'SignNow') {
            dpage = <SignNow addPost={addPost} addToCount={addToCount} count={count}></SignNow>
        };

    var dPosts;
        if (page === 'DisplayPosts') {
            let postsCopy = [...posts];
            dPosts = postsCopy.map((posts1) => {
                    return (
                        <DisplayPosts posts1={posts1} key={posts1.id}></DisplayPosts>
                    );
                });
        };

    var fStuff;
    if (page === 'Posts') {
        let fCloudCopy = [...fCloud];
        fStuff = fCloudCopy.map((fCPosts) => {
            return (
                <Posts fCPosts={fCPosts} key={fCPosts.id}/>
            );
        });
        // console.log('FCloud: ', fCloud)
        // console.log('FStuff: ', fStuff)
        // console.log('Posts: ', posts)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img className={'LogoHeader'} src={logo} alt={'logo'}/>
            </header>

            <Wrapper activePage={activePage} dpage={dpage} dPosts={dPosts} fStuff={fStuff}>
            </Wrapper>
            <FooterContainer/>
        </div>
    );
}
