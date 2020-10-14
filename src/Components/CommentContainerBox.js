import React, {Component} from 'react';
import './CommentContainerBox.css';
import Navbar from "./Navbar";
import SignNow from "./SignNow";
import Comment from "./Comment";

class CommentContainerBox extends Component {
    render () {
        return (
        <div className={'CommentContainer'}>
            <Navbar {...this.props}/>
            <div className={'innerBlueBoxContainer'}>
                <div className={'blueBox'}>

                    {/*Having trouble gaining Access to function in App*/}
                    <SignNow addPost={this.props.addPost}></SignNow>

                    <Comment image={'image'} title={'title'} comment={'comment'}/>
                </div>
            </div>
        </div>
        )
    }
};

export default CommentContainerBox;