Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  get '/champagnes', to: 'pages#champagnes'
  get '/contact', to: 'pages#contact'
  resources :site_contacts, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
