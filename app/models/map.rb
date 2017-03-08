class Map < ApplicationRecord
  serialize :tiles, JSON

  def tiles
    super || []
  end
end
