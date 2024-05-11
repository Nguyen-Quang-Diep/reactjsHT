import React from 'react'
import AddUserInfo from './AddUserInfo'
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

    handleAddNewUser = (userObj) => {
        // spread syntax insert 
        console.log(" >>> check data from parent ",userObj)
        this.setState({
             listUsers: [userObj,...this.state.listUsers]
        })
    } 
 render(){    
    return(
        <div>
            <AddUserInfo   handleAddNewUser = { this.handleAddNewUser }/>
            <hr/>
            <DisplayInfo listUsers = {this.state.listUsers} users ={this.state.listUsers}
            />

        </div>
    )
 }
}
export default MyComponents