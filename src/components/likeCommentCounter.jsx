import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class LikeCommentCounter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "row">
                <div className = "col-md-6">
                    <span style = {{'display':'block', 'textAlign': 'left', 'alignSelf': 'stretch', 'padding': '10px' , 'color': '#65676B'}}>
                        {(this.props.totalReaction>0) 
                            ? (this.props.clickLiked == true)
                                ?<div>
                                <FontAwesomeIcon icon={faThumbsUp} className = "text-primary" style = {{'margin-right': '7px'}}/><span>You and {this.props.totalReaction-1} others</span>
                                </div>
                                : <div>
                                <FontAwesomeIcon icon={faThumbsUp} className = "text-primary" style = {{'margin-right': '7px'}}/>{this.props.totalReaction}
                                </div>
                            : ''  
                        } 
                    </span>
                </div>
                <div className = "col-md-6 text-right">
                    <span style = {{'display':'block', 'textAlign': 'right', 'alignSelf': 'stretch', 'padding': '10px' , 'color': '#65676B'}}>
                    {(this.props.totalComment.length>0) 
                            
                                ?<div>
                                <span> {this.props.totalComment.length} comments</span>
                                </div>                               
                            : ''  
                        }
                    </span>
                </div>
            </div>
         );
    }
}
 
export default LikeCommentCounter;