# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :string           not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  subtitle   :text
#  likes      :integer
#  topic_id   :integer
#

require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
