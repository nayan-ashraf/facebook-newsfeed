import React, { Component } from 'react';
import '../css/comment.css';

class Comment extends Component {
     

    render() { 
        return (
          <div>
            {(this.props.comments.length>0)?
                <>
                    {this.props.comments.map( comment =>
                        <div className="d-flex flex-row">
                        <div className="m-2 mb-0">
                        <img src= { comment.profilePicture } alt="DP" className="comment_profile" />
                        </div>
                        
                        <div className="comment_body m-2 mb-0">
                            <span>{ comment.userName }</span>
                            <p>{ comment.content }</p>
                        </div>
                        </div>
                    )}
                </>:''
             
        }
            <div className="d-flex flex-row">
              <div className="m-2">
                <img
                  src="images/nayan.jpg"
                  alt="DP"
                  className="comment_profile"
                />
              </div>
             
              <div className="comment_input m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Write a comment..."
                  id={this.props.id}
                  autocomplete="off"
                  onKeyPress ={(event) => {
                    
                    if(event.key === 'Enter'){                        
                     
                            return this.props.addComment(this.props.id);

                        }
                      }
                  }
                  
                />
              </div>
            </div>
          </div>
        );
    }
}
 
export default Comment;