import React, {Component} from 'react';
import './Posts.css';

class Posts extends Component {

    render() {
        return (
            <div>
                <div className={'PostItem'}>
                    <div className={'cBox'}>
                        <div className={'name'}>Name:{this.props.fCPosts.post.name}<br/></div>
                        <div className={'title'}>Title:{this.props.fCPosts.post.title}<br/></div>
                        <div className={'comment'}>Comment:{this.props.fCPosts.post.comment}<br/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;