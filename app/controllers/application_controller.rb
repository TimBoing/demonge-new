class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_visit
  before_action :set_locale

  private

  def set_visit
    @f_visit = "hidden"
  end

  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end

  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end
end
