class CreateInsurances < ActiveRecord::Migration[6.0]
  def change
    create_table :insurances do |t|
      t.string :name, null: false
      t.string :state, null: false
      t.string :policy_id, null: false
      t.integer :group_id, null: false
      t.string :group_name, null: false
      t.integer :relationship, null: false
      t.references :user, null: false, index: true
      t.timestamps
    end
  end
end
