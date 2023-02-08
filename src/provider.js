import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/9b50b300323644098292fa5371b04457/',
  timeout: 10000,
});
