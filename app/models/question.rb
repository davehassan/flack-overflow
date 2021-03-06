class Question < ActiveRecord::Base
  validates :asker, :title, :body, presence: true
  validates :answered, inclusion: { in: [true, false] }

  belongs_to :asker, class_name: "User", foreign_key: :asker_id, primary_key: :id
  has_many :answers, class_name: "Answer", foreign_key: :question_id, primary_key: :id
end
