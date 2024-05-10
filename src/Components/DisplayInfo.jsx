import React from 'react'

class DisplayInfo extends React.Component{
    render(){
       
        // destructuring object
        const { listUsers } = this.props;
        console.log(this.props) 
        return(
            // Props dung de chuyen du lieu tu cha vao con
            <div>
                {listUsers.map((user, index) =>{
                    console.log(user);
                  return ( 
                  <div key={user.id}>
                    <div>My name is {user.name}</div>
                    <div>I'm {user.age} year's old</div>
                  </div>
                  )
                })}
                {/*<div>My name is {this.props.name}</div>
                <div>I'm {this.props.age} year's old</div>*/}
            </div>
        )
    }
}
export default DisplayInfo