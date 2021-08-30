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


  // add  comments
export function addComment(slug,data) {
    return apiAction({ 
      url: `${process.env.REACT_APP_ACTION_URL}/articles/${slug}/comments`,
      method: 'POST',
      data: data,
      onSuccess: setAddComments,
      onFailure: failedAddComments,
      label: 'FETCH_ADD_COMMENTS'
    });
  }
  
  function setAddComments(data) {
    return {
      type: 'SET_ADD_COMMENTS',
      payload: data
    };
  }
  function failedAddComments(data) {
    return {
      type: 'FAILED_ADD_COMMENTS',
      payload: data
    };
  }


  // add  comments
export function addArticle(data) {
  console.log(data);
    return apiAction({ 
      url: `${process.env.REACT_APP_ACTION_URL}/articles`,
      method: 'POST',
      data: data.article,
      onSuccess: setAddAtricle,
      onFailure: failedAtricle,
      label: 'FETCH_ADD_ARTICLE',
      headers:{'Authorization': `Token ${data.jwt}`}
    });
  }
  
  function setAddAtricle(data) {
    return {
      type: 'SET_ADD_ARTICLE',
      payload: data
    };
  }
  function failedAtricle(data) {
    return {
      type: 'FAILED_ADD_ARTICLE',
      payload: data
    };
  }

  // sign in USER
export function signUpUsers(data) {
    return apiAction({
      url: `${process.env.REACT_APP_ACTION_URL}/users/`,
      method: 'post',
      data: data,
      onSuccess: setSignUpUsers,
      onFailure: failedSignUpUsers,
      label: 'FETCH_SIGN_UP_USER'
    });
  }
  
  function setSignUpUsers(data) {
    return {
      type: 'SET_SIGN_UP_USER',
      payload: data
    };
  }
  function failedSignUpUsers(data) {
    console.log('111',data);
    return {
      type: 'FAILED_SIGN_UP_USER',
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
    console.log('data 1', data);
    return {
      type: 'FAILED_SIGN_IN_USER',
      payload: data
    };
  }




// store reset actions
  export function resetStore() {
    return {
      type: 'RESET_STORE',
    };
  }

  export function checkUser(jwt) {
      return apiAction({ 
        url: `${process.env.REACT_APP_ACTION_URL}/user`,
        onSuccess: setcheckUser,
        onFailure: failedcheckUser,
        label: 'FETCH_CHECK_USER',
        headers:{'Authorization': `Token ${jwt}`}
      });
    }
    
    function setcheckUser(data) {
      return {
        type: 'SET_CHECK_USER',
        payload: data
      };
    }
    function failedcheckUser(data) {
      return {
        type: 'FAILED_CHECK_USER',
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
    headers = null
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
        headers
      }
    };
  }