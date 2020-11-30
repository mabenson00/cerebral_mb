# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  #get users/signin
  def new
    super
  end

  def create
    super
  end

  def destroy
    super
  end
end
