import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
    state = { 
        posts: [
            {
                id:0,
                userName: 'Abraham Lincoln',
                profilePicture: 'images/lincoln.jpg',
                content: '"Leave nothing for tomorrow which can be done today." ',
                isLiked: false            
            },
            {
                id:1,
                userName: 'Theodore Roosevelt',
                profilePicture: 'images/Roosevelt.jpg',
                content: 'It is hard to fail, but it is worse never to have tried to succeed ',
                isLiked: false            
            },
            {
                id:2,
                userName: 'Barack Obama',
                profilePicture: 'images/obama.jpg',
                content: 'Change will not come if we wait for some other person, or if we wait for some other time. ',
                isLiked: false            
            },
            {
                id:3,
                userName: 'Harry S. Truman',
                profilePicture: 'images/truman.jpg',
                content: " It's amazing what you can accomplish if you do not care who gets the credit. ",
                isLiked: false            
            },

        ]
     }

     handleLikeButton = (id) => {
        
        const likeButtonId = 'Like'+ id;
       const button = document.getElementById(likeButtonId);
       button.removeAttribute("class");

       const post = this.state.posts.map( post => {
            if( post.id == id) {
                if( post.isLiked == false) {
                    const newData = {...post, isLiked: true};
                    button.setAttribute("class", "btn btn-lg btn-block w-100 text-primary");
                    return newData;
                }
                else {
                    const newData = {...post, isLiked: false};
                    button.setAttribute("class", "btn btn-lg btn-block w-100 custom");
                    return newData;
                }
               
            }
            else return post;            
       })
       
     this.setState(
         {
             posts: post
         }
     );
   }


    render() { 
        return ( 
              <>
              {
                  this.state.posts.map( post =>
                  <Post 
                        id = { post.id }
                        profileName = { post.userName }
                        profilePicture = { post.profilePicture }
                        postContent = { post.content }
                        isLiked = { this.handleLikeButton }
                  />
                  )
              }
          </>

         );
    }
}
 
export default Posts;