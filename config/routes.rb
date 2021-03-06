Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#index'
  resources :chatrooms, only: [:new, :create, :show, :index] do
    resources :comments, only: [:create, :index]
  end
end
