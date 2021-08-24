import React, { Component } from 'react';
import UserInfo from './userInfo';
import PostContent from './postContent';
import Actions from './actions';
import LikeCommentCounter from './likeCommentCounter';
import Comment from './comment';
import '../css/post.css';


class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="post">
            <UserInfo
                id = { this.props.id }
                profilePicture = { this.props.profilePicture }
                profileName = { this.props.profileName }
                editPost = { this.props.editPost }
                hidePost = { this.props.hidePost }
            />

            <PostContent 
                id = { this.props.id }
                postContent = { this.props.postContent }
            />
            <LikeCommentCounter 
                clickLiked = { this.props.clickLiked }
                totalReaction = { this.props.totalReaction }
                totalComment = { this.props.comments }
            />  
            <Actions 
                id = { this.props.id }
                isLiked = { this.props.isLiked }
            />
            <Comment 
                id = { this.props.id }
                comments = { this.props.comments }
                addComment = { this.props.addComment }
            />

            </div>
         );
    }
}
 
export default Post;