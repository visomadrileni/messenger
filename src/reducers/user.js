const initialState = {
    me: []
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'AUTHENTICATE':
            return {
                ...state,
                me: action.payload
            }

       default:
           return state;     
    }
}