import { BASE_URL } from '../constants/urls';

const sendApi = method => (url, options = {}) => {
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  options.method = method;
  options.header = { 'Content-Type': 'application/json' };

  return fetch(`${BASE_URL}/${url}`, options).then(response => response.json());
};

export default {
  get: sendApi('GET'),
  post: sendApi('POST'),
  put: sendApi('PUT'),
  delete: sendApi('DELETE')
};
