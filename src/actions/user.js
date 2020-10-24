 export const authenticate = user => {
   return {
       type: 'AUTHENTICATE',
       payload: user
   }
 }

 export const updateUser = user => {
     return {
         type: 'UPDATE_USER',
         payload: user
     }
 }