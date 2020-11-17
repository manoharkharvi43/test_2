import React from 'react'
import './Homepage.css'
import {Link,Route,Switch} from 'react-router-dom'
import Profile from '../main_comps/Profile'
import Todo from '../main_comps/Todo'
import Accountpage from '../Select_account_page/Accountpage'

function Homepage() {
    return (
        <>
        <div className='home_container'>
             <div className='user_display'>


                 
                    <div className='navigate_btn'>
                       <ul >
                          <h5><li className='list' key='1'><Link to='/profile' style={{color:'white' ,textDecoration:'none'}} className='navbar_item' >Profile</Link></li></h5>
                          <h5><li className='list' key='2'><Link to='/posts' style={{color:'white' ,textDecoration:'none'}} className='navbar_item'>Posts</Link></li></h5>
                          <h5><li className='list' key='3'><Link to='/gallery' style={{color:'white' ,textDecoration:'none'}} className='navbar_item'>Gallery</Link></li></h5>
                          <h5><li className='list' key='4'><Link to='/todo' style={{color:'white' ,textDecoration:'none'}} className='navbar_item'>Todo</Link></li></h5>
                       </ul>
                    </div>


                    <div className="display">
                    <Switch>
                     <Route path='/profile'> <Profile/></Route>
                     <Route path='/todo'> <Todo name='todo'/></Route>
                       <Route path='/posts'> <Todo name='posts' /></Route>
                     <Route path='/gallery'> <Todo name='gallery' /></Route>
                     <Route path='/selectaccount'><Accountpage/></Route>
                 </Switch>
                    </div>
             </div>
        </div>
        </>
    )
}

export default Homepage
