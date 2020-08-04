class ChatroomsController < ApplicationController

  def new
    @chatroom = Chatroom.new
  end

  def create
    @chatroom = Chatroom.create(chatroom_params)
    redirect_to chatroom_path(@chatroom)
  end

  def show
    @chatroom = Chatroom.find(params[:id])
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:name)
  end

end
