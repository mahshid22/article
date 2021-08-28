const User = (state = [], action) => {
    console.log(action);
    switch (action.type) {               
        case 'SET_SIGN_IN_USER':
            return Object.assign({}, state, {
                user: action.payload.user,
                logedIn: true
            }) //assign      
        case 'FAILED_SIGN_IN_USER':
            return Object.assign({}, state, {
                user: action.payload.response.data.errors ,
                logedIn: false
            }) //assign      
        default:
            return state        
    }
}

export default User