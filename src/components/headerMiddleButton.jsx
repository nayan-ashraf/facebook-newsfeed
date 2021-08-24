import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faIgloo, faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

class HeaderMiddleButton extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <button className="header_button btn w-100">
                <FontAwesomeIcon icon={this.props.icon}  style={{'fontSize': '25px', 'color': 'gray'}}/>
                </button>
            </>
         );
    }
}
 
export default HeaderMiddleButton;