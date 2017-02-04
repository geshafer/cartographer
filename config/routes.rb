Rails.application.routes.draw do
  root to: 'maps#new'

  namespace :admin do
    root to: 'words#index'
  end
end
