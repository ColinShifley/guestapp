import React, {Component} from 'react';
import './CommentContainerBox.css';
import Navbar from "./Navbar";


class CommentContainerBox extends Component {
    render () {
        return (
        <div className={'CommentContainer'}>
            <Navbar {...this.props}/>
            <div className={'innerBlueBoxContainer'}>
                <div className={'blueBox'}>
                    {this.props.dpage}
                    {this.props.dPosts}
                    {this.props.fStuff}
                </div>
            </div>
        </div>
        )
    }
};

export default CommentContainerBox;