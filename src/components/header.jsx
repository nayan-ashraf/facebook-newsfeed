import React, { Component } from 'react';
import '../css/header.css';
import HeaderMiddleButton from './headerMiddleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faIgloo, faUsers, faCalendarCheck, faTh, faCommentDots, faBell, faSortDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import HeaderRightButton from './headerRightButton';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="header sticky-top">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-row">
                        <img src="images/facebook-logo.png" width="70px" height="40px" style={{'margin-top':'10px'}}/>
                        <FontAwesomeIcon icon={faSearch} style={{'fontSize': '20px','margin-top':'20px'}} />
                        </div>
                       
                        
                       
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-row">
                            <HeaderMiddleButton 
                                icon ={faHome}
                            />
                              <HeaderMiddleButton 
                                icon ={faFilm}
                            />
                              <HeaderMiddleButton 
                                icon ={faIgloo}
                            />
                              <HeaderMiddleButton 
                                icon ={faUsers}
                            />
                              <HeaderMiddleButton 
                                icon ={faCalendarCheck}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="d-flex flex-row">
                            <HeaderRightButton 
                                icon ={faTh}
                            />
                              <HeaderRightButton 
                                icon ={faCommentDots}
                            />
                              <HeaderRightButton 
                                icon ={faBell}
                            />
                              <HeaderRightButton 
                                icon ={faSortDown}
                            />
                          
                        </div>
                    </div>
                </div>
             
            </div>
         );
    }
}
 
export default Header;