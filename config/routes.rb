Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "islands#index"
  
  resources :islands do
    resources :tribes
  end 

  resources :tribes do
    resources :members
  end 


end
