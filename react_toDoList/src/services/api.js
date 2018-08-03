import { BASE_URL } from '../constants/urls';

const headerOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const sendApi = method => (url, options = {}) => {
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  return myFetch(`${BASE_URL}/${url}`, {
    ...headerOptions,
    ...options,
    method
  }).then(response => response.json());
};

function myFetch(url, options) {
  return fetch(url, options).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText || response.status);
      return Promise.reject({ ...error, response: response });
    }
  });
}

export default {
  get: sendApi('GET'),
  post: sendApi('POST'),
  put: sendApi('PUT'),
  delete: sendApi('DELETE')
};
