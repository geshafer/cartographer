class Map < ApplicationRecord
  has_many :tiles

  def to_json
    tiles.collect { |tile| { q: tile.x, r: tile.y } }.to_json
  end
end
