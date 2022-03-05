Rails.application.routes.draw do

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users

    root to: 'pages#home'
    get '/champagnes', to: 'pages#champagnes'
    get '/contact', to: 'pages#contact'
    get '/mentions_legales', to: 'pages#mentions_legales'
    resources :site_contacts, only: [:create]
    resources :first_visits, only: [:create]

    get 'test', to: 'pages#test'
    post 'update_cookies', to: 'first_visits#update_cookies'
    resources :downloads, only: [:new]
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end

end
