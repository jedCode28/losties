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
    render component: "IslandNew"
  end

  def create
    @island=Island.new(name:"The Freighter")
    if @island.save
      redirect_to islands_path
    else 
      render :new
    end 
  end 

  def edit
    render component: "IslandEdit", props:{ island: @island}
  end

  def update
    #@island = Island.find(params[:id])
    @island.update(island_params)
    # if @island.update
    redirect_to root_path(@island)
    # else 
    #   render component: "IslandNew"
    # end 
  end 

  def destroy
    @island.destroy
    redirect_to islands_path
  end 

  private

  def set_island 
    @island = Island.find(params[:id])
  end 

  def island_params
    params.require(:island).permit(:name)
  end 


end
