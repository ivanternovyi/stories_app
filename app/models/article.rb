class Article < ApplicationRecord
  VALID_ARTICLE_TYPES = [
    'blog_post',
    'facebook_post',
    'tweet'
  ]

  belongs_to :story

  validates :name, presence: true
  validates :text, presence: true
  validates :article_type, inclusion: { in: VALID_ARTICLE_TYPES }
end
