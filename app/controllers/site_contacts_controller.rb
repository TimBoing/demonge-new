class SiteContactsController < ApplicationController

  skip_before_action :authenticate_user!

  def create
    site_contact = SiteContact.new(site_contact_params)
    if site_contact.save!
      ContactMailer.new_contact(site_contact.id).deliver_now
      redirect_to contact_path, notice: "Merci, votre messages nous a été envoyé"
    else
      raise
    end
  end

  private

  def site_contact_params
    params.require(:site_contact).permit(:name, :address, :email, :tel, :subject, :message)
  end
end
