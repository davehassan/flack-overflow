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

  def update
    @question = Question.find(params[:id])
    if params[:acceptedId]
      @question.answered = true
      answer = @question.answers.find(params[:acceptedId]).accepted = true
      @question.save!
      answer.save!
    else
      
    end

    render :show
  end

  def question_params
    params.require(:question).permit(:title, :body)
  end
end
