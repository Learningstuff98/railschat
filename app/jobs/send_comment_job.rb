class SendCommentJob < ApplicationJob
  queue_as :default

  def perform(chatroom)
    ActionCable.server.broadcast(
      "chatroom_channel",
      chatroom: chatroom,
      comments: chatroom.comments
    )
  end

end
