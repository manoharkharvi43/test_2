import axios from 'axios'
const initialstate = []

const reducer = (state=initialstate , action)=>{
      switch(action.type){
          case 'ALL_USER':
                   axios.get('https://panorbit.in/api/users.json') 
                   .then(response =>{ 
                          return[
                       response.data
                    ]},
                    console.log('state',state) ) 
                 
      }
}


export default reducer