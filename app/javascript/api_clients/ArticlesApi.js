import axios from 'axios'

class ArticlesApi {
  static articlesPath = 'api/v1/articles'

  static get = () => (
    axios.get(this.articlesPath)
         .then(response => response.data)
         .catch(error => console.log('ERROR: ', error))
  )
}

export default ArticlesApi
