class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|

      t.string :name
      t.text :assemblage
      t.text :style
      t.text :conservation


      t.timestamps
    end
  end
end
