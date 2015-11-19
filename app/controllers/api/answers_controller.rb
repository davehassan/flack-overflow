class Api::AnswersController < ApplicationController
  def create
    @answer = Question.find(params[:question_id]).answers.new(answer_params)
    @answer.answerer = current_user
    if @answer.save!
      render json: @answer
    end
  end

  def answer_params
    params.require(:answer).permit()
end
