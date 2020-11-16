import React from 'react'
import { useSelector } from 'react-redux'
import './Todo.css'

function Todo(props) {

    const single_user = useSelector(state => state)
    return (
        <div>
             <div className='comps_container'>

                 <div className="todo_head">
                 <h4>{props.name}</h4>

                <div className="todo_profile">
                  
                    <img src={single_user.users.map(data=>data.profilepicture)} 
                    alt='loading'width='40px' height='40px' style={{borderRadius:'100%'}} />
                  
                    <div className='profile_name'>
                    <h6 >{single_user.users.map(data=>data.name)} </h6>
                    </div>

                </div>
                 </div>

                 <div className='coming_soon'> 
                      <h1 style={{fontSize:'110px',color:'#bfbaba'}}> coming soon</h1>
                 </div>
             </div>
        </div>
    )
}

export default Todo
