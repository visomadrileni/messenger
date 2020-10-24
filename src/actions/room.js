 export const searchRoom = name => {
     return {
         type: 'SEARCH_ROOM',
         payload: name
     }
 }

 export const selectRoom = room => {
     return {
         type: 'SELECT_ROOM',
         payload: room
     }
 }

 export const loadedRoom = (collection,selected) => {
     return {
         type: 'LOADED_ROOM',
         payload: {collection,selected}
     }
 }

 export const updateRoom = collection => {
    return {
        type: 'UPDATE_ROOM',
        payload: collection
    }
 }