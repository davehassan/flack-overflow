class Answer < ActiveRecord::Base
  validates :answerer, :question, :body, presence: true
  validates :accepted, inclusion: { in: [true, false] }

  belongs_to :question, class_name: "Question", foreign_key: :question_id
  belongs_to :answerer, class_name: "User", foreign_key: :answerer_id
end
