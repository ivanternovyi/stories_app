class ArticlesController < ApplicationController
  def index
    render component: 'App'
  end
end
