 export const sendMessage = messages => {
     return {
         type: 'SEND_MESSAGE',
         payload: messages
     }
 }

 export const editMessage = (roomId,text) => {
     return {
         type: 'EDIT_MESSAGE',
         payload: {roomId,text}
     }
 }

 export const textFlushMessage = () => {
     return {
         type: 'TEXT_FLUSH_MESSAGE'
     }
 }

 export const loadmessages = (roomId,messages) => {
     return {
         type: 'LOAD_MESSAGES',
         payload: {roomId,messages}
     }
 }