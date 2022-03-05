class DownloadsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    respond_to do |format|
      format.pdf do
        locale = params[:specified_locale] || I18n.locale
        file_name = "DEMONGE_#{params[:champagne]}_#{locale}.pdf"
        file_path = "#{Rails.root}/public/technical_sheets/#{file_name}"
        file = File.read(file_path)
        send_data(file, filename: file_name, type: 'application/pdf')
      end
    end
  end
end
