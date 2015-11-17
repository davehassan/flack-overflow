class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :asker_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :answered, default: false

      t.timestamps null: false
    end
  end
end
