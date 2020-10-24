 const initailState = {
     collection: [],
     search: '',
     selected: {}
 }

 export default (state=initailState,action) => {
     let pl = action.payload;
     switch(action.type){
         case 'SEARCH_ROOM':
             return {
                 ...state,
                 collection: state.collection.filter(item => item.name.toLowerCase()).match(pl.toLowerCase),
                 search: pl
             }

          case 'SELECT_ROOM':
              return {
                  ...state,
                  selected: pl
              }   

           case 'LOADED_ROOM':
               return{
                   ...state,
                   collection: pl.collection,
                   selected: pl.selected
               }   

           case 'UPDATE_ROOM':
               return {
                   ...state,
                   collection: pl
               } 
               
            default: 
              return state;    
     }
 }