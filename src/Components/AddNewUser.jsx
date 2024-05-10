import React from 'react'
class AddNewUser extends React.Component {
    state = {
        name: 'pham van manh',
        age: 23,
        address: 'NinhXuan-HoaLu-NinhBinh'
    }
    AddNewUsers = (event) => {
      
    }
    render() {
        return (
            <div>
                AddNewUser
                <h1>Hi My name is {this.state.name} and I'm {this.state.age}</h1>
                <div>
                    <input type="text" />
                    <button>submit</button>
                </div>
            </div>
        )
    }
}
export default AddNewUser