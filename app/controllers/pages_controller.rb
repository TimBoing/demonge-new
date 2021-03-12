class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :champagnes, :contact ]

  def home
  end

  def champagnes
  end

  def contact
  end

end
