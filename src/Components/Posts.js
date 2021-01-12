import React, {Component} from 'react';

class Posts extends Component {
    render() {
        return (
            <div>
                <div className={'PostItem'}>
                    <h1>
                        Name:{this.props.fCPosts.newPosts.name}<br/>
                        Title:{this.props.fCPosts.title}<br/>
                        Comment:{this.props.fCPosts.comment}<br/>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Posts;