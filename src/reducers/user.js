const User = (state = [], action) => {
    switch (action.type) {               
        case 'SET_SIGN_IN_USER':
            return Object.assign({}, state, {
                user: action.payload.user,
                logedIn: true
            }) //assign 
            break     
        case 'SET_SIGN_UP_USER':
            return Object.assign({}, state, {
                user: action.payload.user,
            }) //assign      
            break
        case 'SET_CHECK_USER':
            return Object.assign({}, state, {
                user: action.payload.user,
            }) //assign      
            break
        case 'SET_UPDATE_USER':
            return Object.assign({}, state, {
                updateUser: action.payload.user,
            }) //assign      
            break
        case 'FAILED_SIGN_UP_USER': 
            return Object.assign({}, state, {
                userError: action.payload ,
            }) //assign
            break    
        case 'FAILED_SIGN_IN_USER': 
            return Object.assign({}, state, {
                userError: action.payload ,
            }) //assign  
            case 'RESET_STORE':
            return state=[] //assign      
        default:
            return state        
    }
}

export default User