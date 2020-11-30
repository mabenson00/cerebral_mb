# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController

  #get users/signin
  def new
    super
  end

  def create
    byebug
    super
  end

  def destroy
    super
  end
end
