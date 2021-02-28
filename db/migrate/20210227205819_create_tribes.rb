class CreateTribes < ActiveRecord::Migration[6.1]
  def change
    create_table :tribes do |t|
      t.string :name
      t.belongs_to :island, null: false, foreign_key: true

      t.timestamps
    end
  end
end
