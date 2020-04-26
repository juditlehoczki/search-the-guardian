import axios from 'axios';
import apiKey from './config.js';

const fetchArticles = (page, keyword, section, orderBy, pageSize) => {
  const params = {
    'show-fields': 'all',
    'api-key': apiKey,
  };

  page === undefined ? (params.page = 1) : (params.page = page);
  keyword === undefined ? null : (params.q = keyword);
  section === undefined ? null : (params.section = section);
  orderBy === undefined
    ? (params['order-by'] = 'relevance')
    : (params['order-by'] = orderBy);
  pageSize === undefined
    ? (params['page-size'] = 10)
    : (params['page-size'] = pageSize);
  return axios.get('https://content.guardianapis.com/search', {params});
};

export {fetchArticles};
