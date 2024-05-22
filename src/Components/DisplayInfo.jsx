import React from 'react'
import './DisplayInfo.scss'


// stateless and stateful


// class DisplayInfo extends React.Component{
    
//     // babel compiler  
//     state = {
//         isTheShowListUser: true
//     }

//     componentDidMount(){
//         console.log(">>> call me component did mount")
//         setTimeout(()=>{
//             document.title = "Nguyen Quang Diep"
//         },2000)
        
//     }

//     componentDidUpdate(prevProps, prevState,snapshot){
//        console.log(">>> call me component did update", this.props, prevProps)
//        if(this.props.listUsers !== prevState.listUsers){
//            if(this.props.listUsers.length === 5){
//             alert('Hello Eowlll');
//            }
//        }
//     }

//     handleShowHide = () => {
//         this.setState({
//             isTheShowListUser: !this.state.isTheShowListUser

//     })
//     }
//     render(){
//         // destructuring object
//         const { listUsers } = this.props;
//         console.log(this.props) 
//         // dieu kien && neu dung se xay ra neu sai khong xay ra
//         return(
//             <div className='display-info-container'>
//                 <div>
//                     <span onClick={()=> {this.handleShowHide()}}>{this.state.isTheShowListUser === true ? 'hide' : 'show'}listuser</span>
//                 </div>
//                 {this.state.isTheShowListUser && 
//                 <>
//                     {listUsers.map((user) =>{
//                         // console.log(user);
//                         return (
//                             <div key={user.id} className={user.age > 18 ? 'red' : 'green'}>
//                                 <div>
//                                     <div>My name is {user.name}</div>
//                                     <div>I'm {user.age} year's old</div>
//                                 </div>
//                                 <div>
//                                     <button onClick={() =>this.props.handleDeleteUser(user.id)}>Delete</button>
//                                 </div>
//                             </div>
                                    
//                                 )
//                         // convert nhanh tu kieu string sang kieu number them dau +
//                     //     if(+user.age > 18){
//                     //         return ( 
//                     //             <div key={user.id} className='green'>
//                     //               <div>My name is {user.name}</div>
//                     //               <div>I'm {user.age} year's old</div>
//                     //             </div>
//                     //             )
//                     //     }else{
//                     //         return ( 
//                     //             <div key={user.id} className='red'>
//                     //               <div>My name is {user.name}</div>
//                     //               <div>I'm {user.age} year's old</div>
//                     //             </div>
//                     //             )
//                     //     }
//                     })}
//                     {/*<div>My name is {this.props.name}</div>
//                     <div>I'm {this.props.age} year's old</div>*/}
//                 </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfo = (props) => {
    // destructuring object
    const { listUsers } = props //object
        // dieu kien && neu dung se xay ra neu sai khong xay ra
        return(
            <div className='display-info-container'>
                {true && 
                <>
                    {listUsers.map((user) =>{
                        // console.log(user);
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>I'm {user.age} year's old</div>
                                </div>
                                <div>
                                    <button onClick={() =>props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
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
                </>
                }
            </div>
        )
    }
export default DisplayInfo