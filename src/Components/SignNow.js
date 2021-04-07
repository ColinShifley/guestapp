import React, {Component} from 'react';
import './SignNow.css'

class SignNow extends Component {
    nameRef = React.createRef();
    titleRef = React.createRef();
    commentRef = React.createRef();

    createPost = (event) => {
        //1. Stop form from Submitting
        event.preventDefault();
        const post = {
            id: this.props.count,
            name: this.nameRef.current.value,
            title: this.titleRef.current.value,
            comment: this.commentRef.current.value
        };
        this.props.addToCount();
        this.props.addPost(post);
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className={'post-edit'} onSubmit={this.createPost}>
                <input name={'name'} className={'name1'} ref={this.nameRef} type={'text'} placeholder={'Name'}/>
                <input name={'title'} className={'title1'} ref={this.titleRef} type={'text'} placeholder={'Title'}/>
                <textarea name={'comment'} className={'comment1'} ref={this.commentRef} type={'text'} placeholder={'Comment'}/>
                <button type={'submit'}>Create New Post</button>
            </form>
        )
    }
}

export default SignNow;