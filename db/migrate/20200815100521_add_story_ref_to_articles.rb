class AddStoryRefToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :story, foreign_key: true
  end
end
