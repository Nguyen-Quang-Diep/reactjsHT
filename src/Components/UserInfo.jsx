import React from 'react';

class UserInfo extends React.Component{
    state =  {
        id:'1',
        name: 'NguyenQuangDiep',
        Adress: 'NinhXuan.HoaLu.NinhBinh',
        age: '27'
       }
       handleOnchangeInput (event) {
          console.log('me')
          this.setState({
           name: event.target.value
          })
       }
       handleOnSubmit = (event) => {
         console.log(this.state)
         event.preventDefault();
       }
       handleOnchangeAge (event) {
           console.log('me')
           this.setState({
            age: event.target.value
           })
        }
      
    render(){
        return(
            <div>
                 My name is {this.state.name} and I'm {this.state.age}
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <label>Your Name: </label>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeInput(event)}/>

                <label>Your age: </label>
                <input value={this.state.age} type="text" onChange={(event) => this.handleOnchangeAge(event)}/>
                <button>submit</button>
            </form>
            </div>
        )
    }
}
export default UserInfo