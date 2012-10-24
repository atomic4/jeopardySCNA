module GameController

  get '/' do
    round_one = File.open('config/round_one.json').read
    round_two = File.open('config/round_two.json').read
    erb :the_show, locals: {round_one: round_one, round_two: round_two}
  end

end
