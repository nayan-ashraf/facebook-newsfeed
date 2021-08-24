import React, { Component } from 'react';
import Posts from './posts';
import Header from './header';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header />
            <Posts />
            </div>
         );
    }
}
 
export default App;