


const initialstate = {
      users:[]
}

const reducer = (state=initialstate , action)=>{
      switch(action.type){
          case 'ALL_USER':
                   return{
                         ...state,
                         users:action.payload
                   }
                    
          case 'ERROR':
                return{
                      ...state,
                      users:action.payload
                }    

            case 'SELECT_USER' :
                  const select_user = state.users.filter(data => data.id === action.payload.id) 
                   return{
                         users:select_user
                   } 
      }
}


export default reducer