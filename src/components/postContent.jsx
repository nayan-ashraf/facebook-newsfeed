import React, { Component } from 'react';
import '../css/postContent.css';

class PostContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="post_content">
                <h6>
                     { this.props.postContent }
                </h6>
            </div>
         );
    }
}
 
export default PostContent;