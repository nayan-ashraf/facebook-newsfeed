import React, { Component } from 'react';
import '../css/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faComment, faThumbsUp, faShareSquare } from '@fortawesome/free-solid-svg-icons'



class Button extends Component {
    state = {  }
     handleLike = () => {
         if(this.props.innerText == 'Like') {this.props.isLiked(this.props.id)}
     }
    render() { 
        return ( 
            
                <button type="button" className="btn btn-lg btn-block w-100 custom" onClick={this.handleLike}
                id = {this.props.innerText + this.props.id}
                >
                <FontAwesomeIcon icon={this.props.iconName} />   &nbsp;
                    {this.props.innerText}
                </button>

            

         );
    }
}
 
export default Button;