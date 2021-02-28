class Island < ApplicationRecord
  has_many :tribes, dependent: :destroy
end
