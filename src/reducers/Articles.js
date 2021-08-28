const Articles = (state = [], action) => {
    console.log(action);
    switch (action.type) {               
        case 'SET_ARTICLES':
            return Object.assign({}, state, {
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
            }) //assign     
        case 'SET_SINGLE_ARTICLES':
            return Object.assign({}, state, {
                article: action.payload.article,
            }) //assign     
        case 'SET_SINGLE_ARTICLES_COMMENTS':
            return Object.assign({}, state, {
                comments: action.payload.comments,
            }) //assign     
        default:
            return state        
    }
}

export default Articles