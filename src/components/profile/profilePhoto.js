import React, { Component } from 'react'
class ProfilePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="photo">
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" height="300px" width="200px" />
            </div>
         );
    }
}
 
export default ProfilePhoto;