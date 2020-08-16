import axios from 'axios'

class ArticlesApi {
  static articlesPath = 'api/v1/articles'

  static get = (queryParams) => (
    axios
      .get(
        this.articlesPath,
        {
          params: {
            order_field: queryParams.order_field,
            order_direction: queryParams.order_direction,
            keyword: queryParams.keyword,
            group_by: queryParams.group_by
          }
        }
      )
      .then(response => response.data)
      .catch(error => console.log('ERROR: ', error))
  )
}

export default ArticlesApi
