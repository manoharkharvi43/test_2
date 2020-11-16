import React from 'react'
import './Accounts.css'

function Accounts(props) {

    const click_handler = () =>{
        props.clickable()
    }
 
    return (
        <>
        <div className='account_container' onClick={click_handler}>

           <img src={props.img_url} width='35px' height='35px' style={{borderRadius:'50%',marginTop:'10px'}}></img>
           
            <div className='name_container'>
            <p style={{cursor:'pointer'}}>{props.name}</p>
            </div>
        </div>
        </>
    )
}

export default Accounts
