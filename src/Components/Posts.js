import React, {Component} from 'react';

class Posts extends Component {
    render() {
        // Title:{this.props.fCPosts.posts.post.title}<br/>
        // Comment:{this.props.fCPosts.posts.post.comment}<br/>
        return (
            <div>
                <div className={'PostItem'}>
                    <h1>
                        Name:{this.props.fCPosts.posts.id}<br/>

                    </h1>
                </div>
            </div>
        );
    }
}

export default Posts;