import React from 'react';
import CommentContent from "./CommentContent";

const Comment = (props) => {
    return (
        <div className={'cc'}>
            <div className={'image'}>{props.image}</div>
            <CommentContent {...props}/>
        </div>
    );
};

export default Comment;