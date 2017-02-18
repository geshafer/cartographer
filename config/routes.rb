Rails.application.routes.draw do
  root to: 'maps#new'

  resources :maps, only: [:show, :new]

  namespace :admin do
    root to: 'words#index'
  end
end
