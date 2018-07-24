import { BASE_URL } from '../constants/url';

const sendApi = method => (url, options = {}) => {
  /*let init = {
    method: method,
    body: options.body ? JSON.stringify(options.body) : null,
    headers: { 'Content-Type': 'application/json' }
  };*/
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  options = {
    method: method,
    header: { 'Content-Type': 'application/json' }
  };
  return fetch(`${BASE_URL}/${url}`, options).then(response => response.json());
};

export default {
  get: sendApi('GET'),
  post: sendApi('POST'),
  put: sendApi('PUT'),
  delete: sendApi('DELETE')
};
