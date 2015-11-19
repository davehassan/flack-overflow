json.extract! @question, :id, :asker_id, :title, :body, :answered

json.asker @question.asker.username

json.answers do
  json.array! @question.answers do |answer|
    json.body answer.body
    json.answerer answer.answerer.username
  end
end
