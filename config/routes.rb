Rails.application.routes.draw do
  get '/' => 'pages#home'
  get '/foodtrucks' => 'pages#index'
end
