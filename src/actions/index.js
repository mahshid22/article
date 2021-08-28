// article actions  process.env.REACT_APP_ACTION_URL
export function getArticles() {
    return apiAction({
      url: `${process.env.REACT_APP_ACTION_URL}/articles`,
      onSuccess: setArticles,
      onFailure: failedArticles,
      label: 'FETCH_ARTICLES'
    });
  }
  
  function setArticles(data) {
    return {
      type: 'SET_ARTICLES',
      payload: data
    };
  }
  function failedArticles(data) {
    return {
      type: 'FAILED_ARTICLES',
      payload: data
    };
  }

  // get signle article
export function getSingleArticles(slug) {
    return apiAction({
      url: `${process.env.REACT_APP_ACTION_URL}/articles/${slug}`,
      onSuccess: setSingleArticles,
      onFailure: failedSingleArticles,
      label: 'FETCH_SINGLE_ARTICLES'
    });
  }
  
  function setSingleArticles(data) {
    return {
      type: 'SET_SINGLE_ARTICLES',
      payload: data
    };
  }
  function failedSingleArticles(data) {
    return {
      type: 'FAILED_SINGLE_ARTICLES',
      payload: data
    };
  }

  // get signle article comments
export function getSingleArticlesComments(slug) {
    return apiAction({ 
      url: `${process.env.REACT_APP_ACTION_URL}/articles/${slug}/comments`,
      onSuccess: setSingleArticlesComments,
      onFailure: failedSingleArticlesComments,
      label: 'FETCH_SINGLE_ARTICLES_COMMENTS'
    });
  }
  
  function setSingleArticlesComments(data) {
    return {
      type: 'SET_SINGLE_ARTICLES_COMMENTS',
      payload: data
    };
  }
  function failedSingleArticlesComments(data) {
    return {
      type: 'FAILED_SINGLE_ARTICLES_COMMENTS',
      payload: data
    };
  }

  // sign in USER
export function signInUsers(data) {
    return apiAction({
      url: `${process.env.REACT_APP_ACTION_URL}/users/login`,
      method: 'post',
      data: data,
      onSuccess: setSignInUsers,
      onFailure: failedSignInUsers,
      label: 'FETCH_SIGN_IN_USER'
    });
  }
  
  function setSignInUsers(data) {
    return {
      type: 'SET_SIGN_IN_USER',
      payload: data
    };
  }
  function failedSignInUsers(data) {
    return {
      type: 'FAILED_SIGN_IN_USER',
      payload: data
    };
  }


///////////////////////////// API FUNC
function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => {},
    onFailure = () => {},
    label = "",
    headersOverride = null
  }) {
    return {
      type: 'API',
      payload: {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headersOverride
      }
    };
  }