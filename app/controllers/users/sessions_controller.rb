# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController

  #get users/signin
  def new
    super
  end

  def create
    # passes block into devise create method
    # sets up a cookie so react can read frontend
    super do
      cookies[:current_user] = { user_id: current_user.id, email: current_user.email, expires: 24.hours.from_now }
    end
  end

  def destroy
    super do
      cookies.delete :current_user
    end

    # destroy user info when logged out
  end
end
