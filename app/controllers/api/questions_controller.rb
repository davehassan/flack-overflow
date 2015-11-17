class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save!
      render json: @question
    end
  end

  def question_params
    params.require(:question).permit(:title, :body)
  end
end
