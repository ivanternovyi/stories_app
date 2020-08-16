module Api::V1
  class ArticlesController < ActionController::API
    def index
      render json: FilterArticlesService.new(params).call
    end
  end
end
