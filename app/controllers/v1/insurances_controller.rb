class V1::InsurancesController < ApplicationController
  def index
    @insurances = Insurance.all
  end

  def show

  end
end