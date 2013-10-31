require 'sinatra'
require 'sinatra/content_for'

get '/' do
  erb :the_show
end

set :views, File.dirname(__FILE__) + "/views"
