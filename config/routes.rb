Rails.application.routes.draw do

  resources :users, only: [:new, :create]
  resource :session, only: [:create, :destroy, :new]
  namespace :api, defaults: { format: :json } do
    resources :questions, only: [:index, :create, :show, :update] do
      resources :answers, only: [:create, :update]
    end
  end

  root "static_pages#root"
end
