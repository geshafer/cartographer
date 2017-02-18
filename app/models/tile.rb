class Tile < ApplicationRecord
  belongs_to :map, dependent: :destroy
end
