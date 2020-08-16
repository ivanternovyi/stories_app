import ArticlesApi from '../api_clients/ArticlesApi'
import { observable, toJS, computed, action, reaction } from 'mobx'

class ArticlesStore {
  @observable articlesArray = []
  @observable params = {
    order_field: null,
    order_direction: null,
    keyword: null
  }

  constructor() {
    this.handleParamsChange();
  }

  handleParamsChange() {
    reaction(
      () => this.queryParams,
      () => this.getArticles()
    );
  }

  @computed get queryParams() {
    return toJS(this.params)
  }

  @action setOrder(orderField, orderDirection) {
    this.params.order_field = orderField
    this.params.order_direction = orderDirection
  }

  @action setKeyword(keyword) {
    this.params.keyword = keyword
  }

  @action setArticles(articles) {
    this.articlesArray = articles;
  }

  getArticles() {
    ArticlesApi
      .get(this.queryParams)
      .then(response => this.setArticles(response))
  }
}

export default ArticlesStore
