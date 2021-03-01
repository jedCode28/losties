class Tribe < ApplicationRecord
  belongs_to :island
  has_many :members, dependent: :destroy      #I guessed here, delete if buggy
end
