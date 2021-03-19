class SiteContact < ApplicationRecord

  def new_contact(site_contact_id)
    site_contact = SiteContact.find(site_contact_id)
    @name = site_contact.name
    @address = site_contact.address
    @email = site_contact.email
    @tel = site_contact.tel
    @subject = site_contact.subject
    @message = site_contact.message

    mail(to: "timboing@icloud.com", subject: 'Contact sur le site web')
  end

end
