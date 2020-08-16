class ArticleQuery
  STORY_NAME_ORDER_PARAM = 'story_name'.freeze

  def initialize(relation, params)
    @relation = relation
    @params = params
  end

  def call
    articles = filtered_articles

    return articles if params[:group_by].blank?

    articles.group_by(&(symbolize_group_param))
  end

  private

  attr_reader :params

  def filtered_articles
    @relation
      .includes(:story)
      .by_keyword(params[:keyword])
      .order(order_query_str)
  end

  def order_query_str
    return if params[:order_field].blank?

    # stories.name for ordering by story_name
    order_field = if params[:order_field] == STORY_NAME_ORDER_PARAM
                    'stories.name'
                  else
                    params[:order_field]
                  end

    "#{order_field} #{params[:order_direction]}"
  end

  def symbolize_group_param
    params[:group_by].to_sym
  end

  def group_by_story_with_totals
    # TODO:
    # grouped by story with totals:
    #         article count
    #         article type count
    #         last created article
  end
end
