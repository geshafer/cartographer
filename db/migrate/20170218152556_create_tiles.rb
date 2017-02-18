class CreateTiles < ActiveRecord::Migration[5.0]
  def change
    create_table :tiles do |t|
      t.belongs_to :map, index: true
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
