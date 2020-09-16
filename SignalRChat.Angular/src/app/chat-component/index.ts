import { Component } from "@angular/core";

import { HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  selector: 'chat-component',
  styleUrls: ['chat.scss'],
  templateUrl: 'chat.html',
})
export class Chat {
  public _nick: string;
  set nick(v) {
    this._nick = v;
  }

  private HubConnectionBuilder = HubConnectionBuilder;
  private connection;
  public message: string;
  public messages = [];

  ngOnInit() {
    this.nick = window.prompt('Your name:', 'John');
    this.connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/chathub")
      .build();

    this.connection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this.connection.on('sendToAll', this.recMessage);
  }

  sendMessage = () => {
    this.connection
      .invoke('sendToAll', this._nick, this.message)
      .catch(err => console.error(err));
    this.message = '';
  };

  recMessage = (nick, receivedMessage) => {
    const text = `${nick}: ${receivedMessage}`;
    const messages = this.messages.push(text);
  }

}