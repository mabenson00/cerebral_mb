class V1::InsurancesController < ApplicationController
  include Response
  include ExceptionHandler

  def index
    @insurances = Insurance.all
  end

  def show

  end

  def create
    @insurance = Insurance.create(insurance_params)
    current_user.insurance_id = @insurance.id
    current_user.save
    json_response(@insurance, status = :created)
  end

  private

  def insurance_params
    params.require(:insurance).permit(:name, :state, :group_name, :group_id, :policy_id, :relationship, :user_id)
  end
end