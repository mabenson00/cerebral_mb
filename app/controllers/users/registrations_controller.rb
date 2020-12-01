# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include Response
  include ExceptionHandler
  # POST /users
  def create
    # exceptions are handled in `concerns/exception_handler`
    @user = User.create!(user_params)

    # sign_in is a devise method
    # if it successeds, set a cookie for the front-end to read
    if sign_in(@user)
      user = { user_id: current_user.id, email: current_user.email }.to_json
      cookies[:current_user] = { value: user, expires: 24.hours.from_now }
    end

    json_response(@user, status = :created)
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