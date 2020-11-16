import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Accountpage.css'
import Accounts from './Accounts'
import axios from 'axios';
import  {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';



function Accountpage(props) {
    const [users ,setusers] = useState([])
    const history = useHistory()

  

    const fetchdata = () =>{
            axios.get('https://panorbit.in/api/users.json')
          .then(response =>{ setusers(response.data.users)
        console.log(response.data.users)})
    .then(err =>console.log(err))
                    }

    useEffect(() =>{ 
        fetchdata()
    },[])


  const click_handler = (name) =>{
    props.acc_selected()
   
  }

    return (
        <>
        <div className='container'> 
            <div className='accounts_container'>
                <div className='account_header'>
                     <h4>select an acccont</h4>
                </div>
                <div className='account_body' >
                    { users && users.map(user => 
                        <div key={user.id}  >
                         <Accounts name={user.name} 
              
                         clickable={()=>click_handler(user.name)}
                          img_url={user.profilepicture} />
                        </div>
                        )}
                </div>
             </div>
        </div>
        </>
    )
}

export default Accountpage
