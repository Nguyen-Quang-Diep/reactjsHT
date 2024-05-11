import React from 'react'
import './DisplayInfo.scss'


class DisplayInfo extends React.Component{
    state = {
        isTheShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isTheShowListUser: !this.state.isTheShowListUser

    })
    }
    render(){
        // destructuring object
        const { listUsers } = this.props;
        console.log(this.props) 
        // dieu kien && neu dung se xay ra neu sai khong xay ra
        return(
            <div className='display-info-container'>
                <div>
                    <span onClick={()=> {this.handleShowHide()}}>{this.state.isTheShowListUser === true ? 'hide' : 'show'}listuser</span>
                </div>
                {this.state.isTheShowListUser && 
                <div>
                    {listUsers.map((user, index) =>{
                        console.log(user);
                        return (
                            <div key={user.id} className={user.age > 18 ? 'red' : 'green'}>
                                        <div>My name is {user.name}</div>
                                        <div>I'm {user.age} year's old</div>
                                        </div>
                                        )
                        // convert nhanh tu kieu string sang kieu number them dau +
                    //     if(+user.age > 18){
                    //         return ( 
                    //             <div key={user.id} className='green'>
                    //               <div>My name is {user.name}</div>
                    //               <div>I'm {user.age} year's old</div>
                    //             </div>
                    //             )
                    //     }else{
                    //         return ( 
                    //             <div key={user.id} className='red'>
                    //               <div>My name is {user.name}</div>
                    //               <div>I'm {user.age} year's old</div>
                    //             </div>
                    //             )
                    //     }
                    })}
                    {/*<div>My name is {this.props.name}</div>
                    <div>I'm {this.props.age} year's old</div>*/}
                </div>
                }
            </div>
        )
    }
}
export default DisplayInfo