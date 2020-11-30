# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include Response
  include ExceptionHandler
  # POST /users
  def create
    @user = User.create!(user_params)
    sign_in(@user)

  end

  # #  GET /resource/edit
  # def edit
  #   super
  # end

  # # PUT /resource
  # def update
  #   super
  # end

  # # DELETE /resource
  # def destroy
  #   super
  # end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end