json.array! @questions do |question|
  json.extract! question, :id, :asker_id, :title, :body, :answered
end
