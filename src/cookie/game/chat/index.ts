import Account from "@/account";
import { ChatChannelsMultiEnum } from "@/protocol/enums/ChatChannelsMultiEnum";

export default class Chat {
  private account: Account;

  constructor(account: Account) {
    this.account = account;
  }

  public sendMessage(
    message: string,
    channel: ChatChannelsMultiEnum = ChatChannelsMultiEnum.CHANNEL_GLOBAL
  ) {
    if (message.length > 0) {
      this.account.network.sendMessageFree("ChatClientMultiMessage", {
        channel,
        content: message
      });
    }
  }

  public sendMessageTo(message: string, receiver: string) {
    if (message.length > 0 && receiver.length > 0) {
      this.account.network.sendMessageFree("ChatClientPrivateMessage", {
        content: message,
        receiver
      });
    }
  }
}
