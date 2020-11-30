# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include Response
  include ExceptionHandler
  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end