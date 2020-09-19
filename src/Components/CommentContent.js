import React from 'react';

const CommentContent = (props) => {
    return (
        <div>
            <div className={'cTitle'}>{props.title}</div>
            <div >{props.comment}</div>
        </div>
    );
};

export default CommentContent;