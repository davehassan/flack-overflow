class Question < ActiveRecord::Base
  validates :user, :title, :body, presence: true
  validates :answered, inclusion: { in: [true, false] }

  belongs_to :user, class_name: "User", foreign_key: :asker_id, primary_key: :id
end
