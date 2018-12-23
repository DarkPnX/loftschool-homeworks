import React from 'react';
import Message from '../Message';
import './Chat.css'

class Chat extends React.Component{
    state = {
        messageInput:'',
        messages:[]
    }

    changeInputMessage = e => {
        if(e.target.value !== ''){
            this.setState({messageInput: e.target.value});
        }else{
            return;
        }
    }

    sendMessageOnEnter = e =>{
        if (e.key === 'Enter'){
            this.setState({messages:[...this.state.messages, {text:this.state.messageInput}], messageInput: ''});
        }
    }

    render(){
        const {messages, messageInput} = this.state;
        return <div className="chat">
            <div className="message-list">
                <div className="messages">
                {
                    messages.map( (message,i) => {
                        return <Message key={i} text={message.text}/>;
                    })
                }
                </div>
            </div>
            <input 
                type="text" 
                onChange={this.changeInputMessage}
                onKeyPress={this.sendMessageOnEnter} 
                className="input-message"
                value={messageInput}/>
        </div>;
    }
}

export default Chat;