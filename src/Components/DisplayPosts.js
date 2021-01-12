import React, {Component} from 'react';

class DisplayPosts extends Component {
    render() {
        return (
            <div>
                <div className={'PostItem'}>
                    <h1>
                        Name:{this.props.posts1.name}<br/>
                        Title:{this.props.posts1.title}<br/>
                        Comment:{this.props.posts1.comment}<br/>
                    </h1>
                </div>
            </div>
        );
    }
}

export default DisplayPosts;