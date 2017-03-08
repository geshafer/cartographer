class StoreMapTilesAsJson < ActiveRecord::Migration[5.0]
  def change
    add_column :maps, :tiles, :text

    Map.all.each do |map|
      map.update(tiles: Tile.where(map_id: map.id).collect { |tile| { x: tile.x, y: tile.y } })
    end

    drop_table :tiles
  end
end
