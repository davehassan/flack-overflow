json.extract! @question, :id, :asker_id, :title, :body, :answered
json.asker @question.asker

json.answers do
  json.array! @question.answers do |answer|
    json.id answer.id
    json.body answer.body
    json.answerer answer.answerer
  end
end
