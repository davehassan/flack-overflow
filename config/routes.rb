Rails.application.routes.draw do

  resources :users, only: [:new, :create]
  resource :session, only: [:create, :destroy, :new]

  root "static_pages#root"
end
