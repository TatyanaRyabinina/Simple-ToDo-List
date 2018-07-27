import { BASE_URL } from '../constants/urls';

const sendApi = method => (url, options = {}) => {
  /*let init = {
    method: method,
    body: options.body ? JSON.stringify(options.body) : null,
    headers: { 'Content-Type': 'application/json' }
  };*/
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  options.method = method;
  options.header = { 'Content-Type': 'application/json' };

  return myFetch(`${BASE_URL}/${url}`, options).then(response =>
    response.json()
  );
};

function myFetch(url, options) {
  if (options == null) {
    options = {};
  }
  if (options.credentials == null) {
    options.credentials = 'same-origin';
  }
  return fetch(url, options).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      var error = new Error(response.statusText || response.status);
      error.response = response;
      return Promise.reject(error);
    }
  });
}

export default {
  get: sendApi('GET'),
  post: sendApi('POST'),
  put: sendApi('PUT'),
  delete: sendApi('DELETE')
};
