import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div>
             <div className='comps_container'>
                 <h2>{props.name}</h2>
                 <div className='coming_soon'> 
                      <h1 style={{fontSize:'130px',color:'#f0e9e9'}}> coming soon</h1>
                 </div>
             </div>
        </div>
    )
}

export default Todo
