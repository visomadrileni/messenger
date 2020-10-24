const initialState = {
    collection: [],
    text: '',
    search: ''
}

export default (state=initialState,action) => {
    let pl = action.payload;
    switch(action.type){
        case 'SEND_MESSAGE':
            return {
                ...state,
                collection: pl,
                text: ''
            }

         case 'EDIT_MESSAGE':
             return {
                 ...state,
                 text: pl.text
             }  
             
         case 'TEXT_FLUSH_MESSAGE':
             return {
                 ...state,
                 text: ''
             }   
             
          case 'LOAD_MESSAGES':
              return {
                  ...state,
                  collection: pl.messages
              } 
              
          default:
              return state;    
    }
}