import axios from "axios";
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/apiMode";

const apiMiddleware = (store) => next => action => {
  next(action);
  if (action.type !== 'API') return ;
  if(typeof action === 'function')
  return action(store.dispatch)
  next(action)

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  // axios.defaults.headers.common["Content-Type"] = "application/json";
  // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  if (label) {
    store.dispatch(apiStart(label));
  }
  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      store.dispatch(onSuccess(data));
    })
    .catch(error => {
      store.dispatch(apiError(error));
      if (error.response && (error.response.status === 403 || error.response.status === 422)) {
        store.dispatch(onFailure(error.response));
      }
      if (error.response && error.response.status === 400) {
        store.dispatch(onFailure(error));
      }
    })
    .finally(() => {
      if (label) {
        store.dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;