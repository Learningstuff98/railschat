class SendCommentJob < ApplicationJob
  queue_as :default

  def perform(comment)
    ActionCable.server.broadcast("chatroom_channel", comment: comment)
  end

end
