module Api::V1
  class GroupedArticleCollectionSerializer < BaseSerializer
    def call
      object.map do |group_key, article_collection|
        # grouped by Story
        group_key = group_key.name if group_key.is_a? Story

        Hash[group_key, ArticleCollectionSerializer.new(article_collection).call]
      end
    end
  end
end
