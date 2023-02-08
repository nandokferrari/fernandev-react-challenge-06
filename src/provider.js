import axios from 'axios';

// se você não conseguir usar esse endpoint, é porque outros usuários estão usando também e o limite gratuito esgotou.
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/9b50b300323644098292fa5371b04457/',
  timeout: 10000,
});
