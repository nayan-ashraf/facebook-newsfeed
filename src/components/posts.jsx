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
                isLiked: false,
                totalReaction: 101,
                totalComment: 0 ,
                comment: [
                    {
                        userName: 'Theodore Roosevelt',
                        profilePicture: 'images/Roosevelt.jpg',
                        content: 'I am too lazy to do this today. ', 
                    },
                    {
                        userName: 'Harry S. Truman',
                        profilePicture: 'images/truman.jpg',
                        content: 'Trade not aid. ', 
                    },
                    {
                        userName: 'Barack Obama',
                        profilePicture: 'images/obama.jpg',
                        content: 'ha ha ha . ', 
                    },
                ]           
            },
            {
                id:1,
                userName: 'Theodore Roosevelt',
                profilePicture: 'images/Roosevelt.jpg',
                content: 'It is hard to fail, but it is worse never to have tried to succeed ',
                isLiked: false,
                totalReaction: 52,
                totalComment: 0,
                comment: [
                    {
                        userName: 'Theodore Roosevelt',
                        profilePicture: 'images/Roosevelt.jpg',
                        content: 'I am too lazy to do this today. ', 
                    },
                    {
                        userName: 'Harry S. Truman',
                        profilePicture: 'images/truman.jpg',
                        content: 'Trade not aid. ', 
                    },
                    {
                        userName: 'Barack Obama',
                        profilePicture: 'images/obama.jpg',
                        content: 'ha ha ha . ', 
                    },
                ]            
            },
            {
                id:2,
                userName: 'Barack Obama',
                profilePicture: 'images/obama.jpg',
                content: 'Change will not come if we wait for some other person, or if we wait for some other time. ',
                isLiked: false,
                totalReaction: 9 ,
                totalComment: 0 ,
                comment: [
                    {
                        userName: 'Theodore Roosevelt',
                        profilePicture: 'images/Roosevelt.jpg',
                        content: 'I am too lazy to do this today. ', 
                    },
                    {
                        userName: 'Harry S. Truman',
                        profilePicture: 'images/truman.jpg',
                        content: 'Trade not aid. ', 
                    },
                    {
                        userName: 'Barack Obama',
                        profilePicture: 'images/obama.jpg',
                        content: 'ha ha ha . ', 
                    },
                ]           
            },
            {
                id:3,
                userName: 'Harry S. Truman',
                profilePicture: 'images/truman.jpg',
                content: " It's amazing what you can accomplish if you do not care who gets the credit. ",
                isLiked: false,
                totalReaction: 2,                
                comment: [
                  
                ],
                           
            }

        ]
     }
 
     total_comment = this.state.posts[0].comment.length;
     
     handleLikeButton = (id) => {
        const likeButtonId = 'Like'+ id;
       const button = document.getElementById(likeButtonId);
       button.removeAttribute("class");

       const post = this.state.posts.map( post => {
            if( post.id == id) {
                if( post.isLiked == false) {
                    // const count = post.totalReaction++;
                    // console.log(count)
                    const newData = {...post, isLiked: true, totalReaction: post.totalReaction+1 };
                    button.setAttribute("class", "btn btn-lg btn-block w-100 text-primary");                    
                    console.log(newData)
                    return newData;
                }
                else {
                    const newData = {...post, isLiked: false, totalReaction: post.totalReaction-1 };
                    button.setAttribute("class", "btn btn-lg btn-block w-100 custom");
                    console.log(newData)
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

   addCommentHandler = (id) => {
    // if(event.key === 'Enter'){
    //     console.log('enter press here! ')
    //   }
    let data = document.getElementById(id).value;
    if(data !=''){
        const post = this.state.posts.map( post => {
            if( post.id == id) {
                const createComment = { id: post.comment.length , userName: 'Ashraful Alam', profilePicture: 'images/nayan.jpg', content: data}
                // const newComment = {comment:[...post.comment , createComment]};
                // console.log(newComment)
                const newData = {...post, comment: [...post.comment , createComment]};
                

                return newData;             

            }
            else return post;
        });
        this.setState({
            posts: post
        })
        
        document.getElementById(id).value = '';
    }
   }

   editPostHandler = ( id ) => {
       const post = this.state.posts.map( post => {
           if(post.id == id) {
                const generateId = "post_content" + id;
                const generateContentId = "post_content" + id + id;
                

                const postContent = document.getElementById(generateId).innerText;
                //removig h6 
                const postElement = document.getElementById(generateId);
                postElement.remove();
                
                //create a new input field to edit
                const createInput = document.createElement("input");
                document.getElementById(generateContentId).append(createInput);

                createInput.setAttribute("value", postContent);
                createInput.setAttribute("id", 'id'+id);
                createInput.style.width = "100%";
                createInput.style.height = "100px";

              

                const createButton = document.createElement("button");
                document.getElementById(generateContentId).append(createButton);
                createButton.innerText = "Update";
                createButton.setAttribute("class", "btn btn-sm btn-primary");            
                createButton.addEventListener('click', () => {
                    const newPost = document.getElementById('id'+id).value;
             
                    const PostPreviousMode = document.createElement("h6");
                    PostPreviousMode.setAttribute("id", 'post_content'+ id);
                    PostPreviousMode.innerHTML = newPost;
                    document.getElementById(generateContentId).append(PostPreviousMode);
                    createInput.remove();
                    createButton.remove();

                    
                });

                
                
            
           }
       })
   }

  hidePostHandler = (id) => {
      const post = this.state.posts.filter( (post) => {
          if(post.id !== id) return true;
      });
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
                        clickLiked = { post.isLiked }
                        totalReaction = { post.totalReaction }
                        comments = { post.comment }
                        addComment = { this.addCommentHandler }
                        editPost = { this.editPostHandler }
                        hidePost = { this.hidePostHandler }
                  />
                  )
              }
          </>

         );
    }
}
 
export default Posts;