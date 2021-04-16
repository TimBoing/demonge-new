class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_visit

  def set_visit
    @f_visit = "hidden"
  end

end
