import React from 'react';
import CommentContainerBox from "./CommentContainerBox";

const Wrapper = (props) => {
    return (
        <div className={'wrapper'}>
            <CommentContainerBox {...props}/>
        </div>
    );
};

export default Wrapper;