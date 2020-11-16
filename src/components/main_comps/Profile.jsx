import React from 'react'
import './Profile.css'


const userdetails=[
    {
        name:'Bret',
        title:'Username'
    },
    {
        name:'sinsere@april.biz',
        title:'email'
    },
    {
        name:'999-999-999',
        title:'phone'
    },
    {
        name:'leanengraham',
        title:'website'
    }
]
const company_details=[{
            title:'Company'
        },
        {
            title:'Name',
            name:'Romaguera-Crona'
        },
        {
             title:'catchPhrase',
             name:'Multi-layered '   
        },
        { title:'bs',
        name:'harness e-market'
            
        }]
function Profile() {
    return (
        <>
        <div style={{  display: "block"}}>

       
        <div className='profile_container'>

            <div className='profile_header'>
            <h4 style={{marginLeft:'30px'}}>profile</h4> 

            <div className='profile_img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJm0gAXunXcm3HezBOW5XyULCkkdCxQ95_XA&usqp=CAU' 
                  alt='loading'width='30px' height='30px' style={{borderRadius:'100%',marginTop:'30px'}} />
                  <div className='profile_name'>
                  <h4 >name...</h4>
                  </div>
              
            </div>

            </div>

            <div className='profile_body_1'>
              
              
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJm0gAXunXcm3HezBOW5XyULCkkdCxQ95_XA&usqp=CAU' 
                  alt='loading'width='200px' height='200px' style={{borderRadius:'100%',marginTop:'30px'}} />

                  <h3 style={{color:'#424141'}} className='username'>user name</h3>
      

                  <div className='user_details'>
                      <table>
                          {userdetails.map(data=>
                            <>
                              <tr style={{marginBottom:'10px'}}>
                          <td style={{marginRight:'0px'}}><span style={{color:'grey',fontSize:'25px'}}>{data.title} :</span></td>
                          <th><span style={{color:'#474747',fontSize:'25px'}}>{data.name}</span></th>
                           </tr>
                            </>
                            )}  
                      </table>
                   
                  </div>
                  <div className='company_details'>
                  <table>
                          {company_details.map(data=>
                            <>
                              <tr style={{marginBottom:'10px'}}>
                          <td style={{marginRight:'10px'}}><span style={{color:'grey',fontSize:'25px'}}>{data.title}:</span></td>
                          <th><span style={{color:'#474747',fontSize:'25px'}}>{data.name}</span></th>
                           </tr>
                            </>
                            )}  
                      </table>
                  </div>
                </div>


               <div className='profile_body_2'>
                       
               </div>
     
     
        </div>
        </div>
        </>
    )
}

export default Profile

{/* <h4 style={{color:'grey',display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
username:  <h4 style={{color:'black'}}>jkhbv</h4></h4>
<span><p>username</p> <h6>ghfyudgf</h6></span>
<span><p>username</p> <h6>ghfyudgf</h6></span>
<span><p>username</p> <h6>ghfyudgf</h6></span> */}