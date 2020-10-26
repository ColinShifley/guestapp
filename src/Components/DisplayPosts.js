import React, {Component} from 'react';

class DisplayPosts extends Component {
    render() {
        return (
            <div>
                {this.props.post.name}
                {this.props.post.title}
                {this.props.post.comment}
            </div>
        );
    }
}

export default DisplayPosts;