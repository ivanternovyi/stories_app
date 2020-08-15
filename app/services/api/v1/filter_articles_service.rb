module Api::V1
  class FilterArticlesService
    def initialize(params)
      @params = params
      @articles = Article.all
    end

    def call
      filtered_articles = ::ArticleQuery.new(articles, params).call

      if params[:group_by]
        GroupedArticleCollectionSerializer.new(filtered_articles).call
      else
        ArticleCollectionSerializer.new(filtered_articles).call
      end
    end

    private

    attr_reader :params, :articles
  end
end
