Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # 
  root "departments#index"
  get "/departments", to: "departments#index"
  get "/departments/new", to: "departments#new"
  post "/departments", to: "departments#create"
  get "/departments/:id", to: "departments#show"
end
