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
    // Func Add a new User
    handleAddNewUser = (userObj) => {
        // spread syntax insert 
        console.log(" >>> check data from parent ",userObj)
        this.setState({
             listUsers: [userObj,...this.state.listUsers]
        })
    } 
    // Func Delete User
    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUserClone
        })
    }
 render(){    
    return(
        // syntax fragment
        <>
            <div className='a'>
                <AddUserInfo   handleAddNewUser = { this.handleAddNewUser }/>
                <hr/>
                <DisplayInfo listUsers = {this.state.listUsers}  handleDeleteUser ={ this.handleDeleteUser } />

            </div>
            <div className='b'></div>
        </>
    )
 }
}
export default MyComponents