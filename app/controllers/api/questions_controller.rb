class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all.includes(:asker)
  end

  def show
    @question = Question.includes(:asker).includes(answers: [:answerer]).find(params[:id])
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save!
      render :show
    end
  end

  def question_params
    params.require(:question).permit(:title, :body)
  end
end
