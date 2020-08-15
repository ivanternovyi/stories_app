class ArticlesController < ApplicationController
  def index
    render component: 'App', props: { articles: {} }
  end
end
