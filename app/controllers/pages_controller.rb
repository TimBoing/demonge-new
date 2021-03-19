class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :champagnes, :contact ]

  def home
  end

  def champagnes
  end

  def contact
    # ContactMailer.new_contact.deliver_now
    @site_contact = SiteContact.new
  end

end
