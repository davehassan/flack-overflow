class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user.nil?
      render json: {errors: ["Wrong foolish mortal!"]}, status: 401
    else
      log_in!(@user)
      render "api/questions/index"
    end
  end

  def destroy
    log_out!
    render json: {}
  end
end
