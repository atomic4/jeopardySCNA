require 'sinatra'
require 'sinatra/content_for'

Dir.glob(File.join(File.dirname(__FILE__), 'lib/*.rb')).each {|f| require f }
set :views, File.dirname(__FILE__) + "/views"
