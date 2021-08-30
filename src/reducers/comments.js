const Comments = (state = [], action) => {
    switch (action.type) {               
        // case 'SET_ADD_COMMENTS':
        //     return Object.assign({}, state, {
        //         articles: action.payload.articles,
        //         articlesCount: action.payload.articlesCount,
        //     }) //assign 
        case 'RESET_STORE':
            console.log();
            return Object.assign({}, {...state, User:{}}) //assign           
        default:
            return state        
    }
}

export default Comments