import React, { Component } from 'react';
import UserInfo from './userInfo';
import PostContent from './postContent';
import Actions from './actions';
import '../css/post.css';


class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="post">
            <UserInfo
                profilePicture = { this.props.profilePicture }
                profileName = { this.props.profileName }
            />

            <PostContent 
                postContent = { this.props.postContent }
            />
            <Actions 
                id = { this.props.id }
                isLiked = { this.props.isLiked }
            />

            </div>
         );
    }
}
 
export default Post;