import React from 'react'
import './Homepage.css'
import {Link,Route,Switch} from 'react-router-dom'
import Profile from '../main_comps/Profile'
import Todo from '../main_comps/Todo'

function Homepage() {
    return (
        <>
        <div className='home_container'>
             <div className='user_display'>


                 
                    <div className='navigate_btn'>
                       <ul >
                          <h5><li className='list'><Link to='/profile' style={{color:'white' ,textDecoration:'none'}}>Profile</Link></li></h5>
                          <h5><li className='list'><Link to='/posts' style={{color:'white' ,textDecoration:'none'}}>Posts</Link></li></h5>
                          <h5><li className='list'><Link to='/gallery' style={{color:'white' ,textDecoration:'none'}}>Gallery</Link></li></h5>
                          <h5><li className='list'><Link to='/todo' style={{color:'white' ,textDecoration:'none'}}>Todo</Link></li></h5>
                       </ul>
                    </div>


                    <div className="display">
                    <Switch>
                     <Route path='/profile'> <Profile/></Route>
                     <Route path='/todo'> <Todo name='todo'/></Route>
                       <Route path='/posts'> <Todo name='posts' /></Route>
                     <Route path='/gallery'> <Todo name='gallery' /></Route>
                 </Switch>
                    </div>
             </div>
        </div>
        </>
    )
}

export default Homepage
