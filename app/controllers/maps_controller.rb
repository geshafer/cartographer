class MapsController < ApplicationController
  def new
  end

  def show
    @map = Map.find(params[:id])
  end
end
