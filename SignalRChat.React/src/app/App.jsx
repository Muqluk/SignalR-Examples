/* eslint-disable */
import React from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

export default class App extends React.Component {
  HubConnectionBuilder = HubConnectionBuilder;
  state = {
    nick: '',
    message: '',
    messages: [],
    hubConnection: null,
  }

  componentDidMount = () => {
    const nick = window.prompt('Your name:', 'John');
    const hubConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/chathub")
      .build();

    this.setState({ hubConnection, nick }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

      this.state.hubConnection.on('sendToAll', (nick, receivedMessage) => {
        const text = `${nick}: ${receivedMessage}`;
        const messages = this.state.messages.concat([text]);
        this.setState({ messages });
      });
    });
  };

  sendMessage = () => {
    this.state.hubConnection
      .invoke('sendToAll', this.state.nick, this.state.message)
      .catch(err => console.error(err));

    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <br />
        <input
          type="text"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />

        <button onClick={this.sendMessage}>Send</button>

        <div>
          {this.state.messages.map((message, index) => (
            <span style={{ display: 'block' }} key={index}> {message} </span>
          ))}
        </div>
      </div>
    );
  }
}
