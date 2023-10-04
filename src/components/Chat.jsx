import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      newMessage: '',
    };
    this.messagesRef = React.createRef();
  }

  handleInputChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSendMessage = () => {
    const { newMessage, messages } = this.state;
    if (newMessage.trim() !== '') {
      const sender = this.props.displayRight ? 'user' : 'other';
      const updatedMessages = [
        ...messages,
        { text: newMessage, sender, position: this.props.displayRight },
      ];
      this.setState({ messages: updatedMessages, newMessage: '' }, () => {
        if (this.messagesRef.current) {
          this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
        }
      });
    }
  };

  
  

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          <div className="group-avatar">
            <img src="url_de_la_imagen.jpg" alt="Avatar del grupo" />
          </div>
          <div className="group-info">
            <h2>Nombre del Grupo</h2>
          </div>
          <div className="icon-right">
            <SendIcon />
          </div>
        </div>
        <div className={`chat-messages ${this.props.displayRight ? 'right-messages' : 'left-messages'}`} ref={this.messagesRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user-message' : 'other-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <TextField
            variant="outlined"
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={this.handleInputChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={this.handleSendMessage}
                >
                  Enviar
                </Button>
              ),
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
