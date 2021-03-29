import React, {Component} from 'react';

class DisplayPosts extends Component {
    render() {
        return (
            <div>
                <div className={'PostItem'}>
                    <div className={'cBox'}>
                        <div className={'name'}>Name:{this.props.posts1.name}<br/></div>
                        <div className={'title'}>Title:{this.props.posts1.title}<br/></div>
                        <div className={'comment'}>Comment:{this.props.posts1.comment}<br/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayPosts;