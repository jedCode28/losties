class IslandsController < ApplicationController
  before_action :set_island, only: [:show, :update, :edit, :destroy]
  def index
    @islands = Island.all
    render component: "Islands", props:{islands: @islands}
  end

  def show
    @tribes = @island.tribes.all
    render component: "Island", props:{island: @island, tribes: @tribes}
  end

  def new
  end

  def edit
  end

  private

  def set_island 
    @island = Island.find(params[:id])
  end 


end
