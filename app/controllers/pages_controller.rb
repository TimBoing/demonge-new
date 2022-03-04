class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :champagnes, :contact, :test, :mentions_legales]
  before_action :first_visit
  # before_action :first_time_visit, unless: -> {cookies[:first_visit]}

  def first_visit
    # cookies.permanent[:age_legal] = true
    # cookies.delete :age_legal
    # puts cookies[:age_legal]
    puts "yo----------------"
    puts cookies[:age_legal]
    unless cookies[:age_legal] == "true"
      @f_visit = "active"
    end
    # cookies.permanent[:first_visit] = 1
  end

  def home
  end

  def champagnes
  end

  def contact
    # ContactMailer.new_contact.deliver_now
    @site_contact = SiteContact.new
  end

  def mentions_legales
  end

  def test
  end

end
