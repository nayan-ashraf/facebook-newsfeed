import React, { Component } from 'react';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faComment, faThumbsUp, faShareSquare } from '@fortawesome/free-solid-svg-icons'

class Actions extends Component { 


    render() { 
        return ( 
            <div className="d-flex flex-row border-bottom border-top">
                <Button
                    id = { this.props.id }
                    innerText = "Like" 
                    iconName = {faThumbsUp}
                    isLiked = { this.props.isLiked }                  
                 />

                 <Button
                    innerText = "Comment" 
                    iconName = {faComment}                  
                />
                <Button 
                    innerText = "Share" 
                    iconName = {faShareSquare}                   
                />
            </div>
         );
    }
}
 
export default Actions;