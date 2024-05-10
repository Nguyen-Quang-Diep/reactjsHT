import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfo from './DisplayInfo'

class MyComponents extends React.Component {
    // dry 

    state = {
        listUsers: [
            {id: 1, name: 'Hoi Dan IT', age: "30"},
            {id: 2, name: 'pah', age: "18"},
            {id: 3, name: 'PhamManhQuynh', age: "29"}  
        ]
    }
 render(){    
    return(
        <div>
            <UserInfo/>
            <hr/>
            <DisplayInfo listUsers = {this.state.listUsers} users ={this.state.listUsers}/>

        </div>
    )
 }
}
export default MyComponents