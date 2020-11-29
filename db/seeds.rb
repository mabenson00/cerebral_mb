# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
insurance = Insurance.create!(state: "CA", name: "michael rulez", group_name: "groupname", policy_id: "123A", relationship: "self", user_id: 1, group_id: 1234)
user = User.create!({email: "test@example.com", password: "topsecret", insurance_id: 1})