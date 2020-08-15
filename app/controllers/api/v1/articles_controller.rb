module Api::V1
  class ArticlesController < BaseController
    def index
      render json: FilterArticlesService.new(params).call
    end
  end
end
