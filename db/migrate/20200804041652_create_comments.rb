class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :chatroom_id
      t.text :message
    end
  end
end
