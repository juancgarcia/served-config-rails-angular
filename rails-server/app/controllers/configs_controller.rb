class ConfigsController < ApplicationController

    def index
        @config = {
            :api_key => ENV["APIKEY"]
        }
        render json: @config
    end

end
