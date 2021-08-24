import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTh, faCommentDots, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons'


class HeaderRightButton extends Component {
    state = {  }
    render() { 
        return ( 
           <div style={{'width': '20%','padding': '5px'}}>
            <button className="header_right_button btn w-100">
            <FontAwesomeIcon icon={this.props.icon} style={{'fontSize': '20px'}} />
            </button>
          </div>
         );
    }
}
 
export default HeaderRightButton;