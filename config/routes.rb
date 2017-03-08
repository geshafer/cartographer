Rails.application.routes.draw do
  root to: 'maps#new'

  resources :maps, only: [:show, :new, :update]

  namespace :admin do
    root to: 'words#index'
  end
end
