import React, {Component} from 'react';
import './CommentContainerBox.css';
import Navbar from "./Navbar";
import Comment from "./Comment";

class CommentContainerBox extends Component {
    render () {
        return (
        <div className={'CommentContainer'}>
            <Navbar {...this.props}/>
            <div className={'innerBlueBoxContainer'}>
                <div className={'blueBox'}>

                    {/*Having trouble gaining Access to function in App*/}
                    {/*<SignNow addPost={this.props.addPost}></SignNow>*/}

                    <Comment image={''} title={''} comment={''}/>
                    {this.props.dpage}
                    {this.props.dPosts}
                </div>
            </div>
        </div>
        )
    }
};

export default CommentContainerBox;