const BASE_URL = 'http://newsapi.org/v2';
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf';

export const GetNews = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: { 'X-Api-Key': API_KEY },
  });
};
