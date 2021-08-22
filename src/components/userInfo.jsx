import React, { Component } from 'react';
import '../css/userInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'


class UserInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="d-flex flex-row">
                <div className="m-2">
                  <img src= { this.props.profilePicture } alt="DP" className="profile_picture" />
                </div>
                
                <div className="profile_name m-2">
                    <h6>{ this.props.profileName }</h6>
                    <span className="post_time">
                        1 hrs 
                        &nbsp; 
                        <FontAwesomeIcon icon={faGlobeAsia} />
                    </span>
                </div>
            </div>
         );
    }
}
 
export default UserInfo;