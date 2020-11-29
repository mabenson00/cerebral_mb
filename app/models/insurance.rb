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
class Insurance < ApplicationRecord
  STATES = %w[AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WV WI WY ].freeze;

  validates_inclusion_of :state, in: STATES
  validates :name, length: { minimum: 3 }, presence: true
  validates :group_name, length: { minimum: 3 }, presence: true
  validates :policy_id, format: { with: /\A[A-Za-z0-9]+\z/ }, presence: true
  validates :group_id, presence: true
  belongs_to :user
  enum relationship: %i[spouse self other child]
end
