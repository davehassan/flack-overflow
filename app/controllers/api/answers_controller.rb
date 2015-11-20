class Api::AnswersController < ApplicationController
  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)
    @answer.answerer = current_user
    if @answer.save!
      render :show
    end
  end

  def answer_params
    params.require(:answer).permit(:body)
  end
end
