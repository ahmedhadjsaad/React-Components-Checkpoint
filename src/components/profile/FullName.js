import React, { Component } from 'react'
import FirstName from '../fullname/FirstName';
import LastName from '../fullname/LastName';
class FullName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="name">
                <p>
               <FirstName/> 
               <LastName/>
                </p>
            </div>
         );
    }
}
 
export default FullName;