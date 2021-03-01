class TribesController < ApplicationController

  def show
    @members = Member.all
    render component: "Members" #, props:{members: @members}
  end 




end
