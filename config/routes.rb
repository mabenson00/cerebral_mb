Rails.application.routes.draw do
  root 'homepage#index'

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  namespace :v1, defaults: { format: JSON } do
    resources :insurances
  end

  # send non api requests to react router
  get '*path', to: 'homepage#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
