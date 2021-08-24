import React, { Component } from 'react';
import '../css/userInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'


class UserInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="d-flex flex-row ">
            <div className="m-2">
            <img src= { this.props.profilePicture } alt="DP" className="profile_picture" />
            </div>
            
            <div className="profile_name m-2">
                <h6>{ this.props.profileName }</h6>
                <span className="post_time">
                    1 hr
                    &nbsp; 
                    <FontAwesomeIcon icon={faGlobeAsia} />
                </span>
            </div>
            <div class="dropstart">
                <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    ...
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onClick={() => this.props.editPost(this.props.id)}>Edit Post</a></li>
                    <li><a class="dropdown-item" onClick={() => this.props.hidePost(this.props.id)}>Hide Post</a></li>
                </ul>
                </div>
        </div>
         );
    }
}
 
export default UserInfo;