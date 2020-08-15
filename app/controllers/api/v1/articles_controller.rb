module Api::V1
  class ArticlesController < BaseController
    def index
      # temp send all articles
      render json: ArticleCollectionSerializer.new(Article.all).call
    end
  end
end
