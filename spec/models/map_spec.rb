require 'rails_helper'

RSpec.describe Map, type: :model do
  let(:map) { Map.new }

  describe "#tiles" do
    it "returns an empty array when there are no tiles" do
      expect(map.tiles).to eql []
    end
  end
end
