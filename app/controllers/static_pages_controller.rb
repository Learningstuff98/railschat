class StaticPagesController < ApplicationController

  def index
    @chatrooms = Chatroom.all
  end

end
