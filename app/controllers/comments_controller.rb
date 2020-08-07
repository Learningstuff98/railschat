class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  
  def create
    chatroom = Chatroom.find(params[:chatroom_id])
    comment = chatroom.comments.create(comment_params)
    SendCommentJob.perform_later(comment)
  end

  def index
    chatroom = Chatroom.find(params[:chatroom_id])
    render json: chatroom.comments
  end

  private

  def comment_params
    params.require(:comment).permit(:message)
  end

end
