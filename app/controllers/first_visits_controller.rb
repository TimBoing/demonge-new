class FirstVisitsController < ApplicationController
   skip_before_action :authenticate_user!, only: [:update_cookies]


   def update_cookies

    cookies.permanent[:age_legal] = true

    response_hash = {status: "done"}
    render json: response_hash.to_json
   end

end
