module Api::V1
  class ArticleSerializer < BaseSerializer
    def call
      {
        story: object.story.name,
        name: object.name,
        text: object.text,
        article_type: object.article_type,
        updated_at: object.updated_at,
        created_at: object.created_at
      }
    end
  end
end
