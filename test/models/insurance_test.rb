# == Schema Information
#
# Table name: insurances
#
#  id           :bigint           not null, primary key
#  group_name   :string           not null
#  name         :string           not null
#  relationship :integer          not null
#  state        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  group_id     :integer          not null
#  policy_id    :string           not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_insurances_on_user_id  (user_id)
#
require 'test_helper'

class InsuranceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
