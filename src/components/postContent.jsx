import React, { Component } from 'react';
import '../css/postContent.css';

class PostContent extends Component {
    generateId = 'post_content'+ this.props.id;
    generateContentId = 'post_content'+ this.props.id + this.props.id;
    render() { 
        return ( 
            <div className="post_content" id={this.generateContentId}>
                <h6 id={this.generateId}>
                     { this.props.postContent }
                    
                </h6>
            </div>
         );
    }
}
 
export default PostContent;