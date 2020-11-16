import React, { useState } from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Accountpage from './components/Select_account_page/Accountpage'


function App() {
    const [ show_home , set_show_home] = useState(false)
    const account_selected =() =>{
       set_show_home(true)    
    }
    return (
        <div>
            {show_home ?<Homepage/> : <Accountpage acc_selected={ ()=> account_selected()}/>}

           
    
            
        </div>
    )
}

export default App
