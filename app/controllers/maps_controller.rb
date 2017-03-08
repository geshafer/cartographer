class MapsController < ApplicationController
  def new
  end

  def show
    @map = Map.find(params[:id])
  end

  def update
    @map = Map.find(params[:id])

    @map.update(map_params)
  end

  private

  def map_params
    params.require(:map).permit(tiles: [ :q, :r ])
  end
end
