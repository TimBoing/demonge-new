class CreateSiteContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :site_contacts do |t|

      t.string :name
      t.string :address
      t.string :email
      t.string :tel
      t.string :subject
      t.string :message
      t.boolean :accept_conf, default: true

      t.timestamps
    end
  end
end
