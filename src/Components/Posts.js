import React, {Component} from 'react';
import './Posts.css';
import Icon from "./Icon";

class Posts extends Component {

    render() {
        return (
            <div>
                <div className={'PostItem'}>
                    <div className={'cBox'}>
                        <Icon className={'icon'}></Icon>
                        <div className={'cmt'}>
                            <div className={'name'}>Name:{this.props.fCPosts.post.name}<br/></div>
                            <div className={'title'}>Title:{this.props.fCPosts.post.title}<br/></div>
                            <div className={'comment'}>Comment:{this.props.fCPosts.post.comment}<br/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;