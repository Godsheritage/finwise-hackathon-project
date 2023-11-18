import "./chat.scss";
import React, { useState } from "react";


import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your FinWise AI! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App">
      <button className="open-chat-button" onClick={togglePopup}>
        Chat with FinWise AI...
      </button>
      {isVisible && (
        <>
          <div className="overlay" onClick={togglePopup}></div>
          <div className="popup">
            <div
              style={{
                backgroundColor: "#70627e",
                position: "relative",
                height: "500px",
                width: "500px",
              }}
            >
              <MainContainer style={{ backgroundColor: "#70627e" }}>
                <ChatContainer style={{ backgroundColor: "#70627e" }}>
                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={
                      isTyping ? (
                        <TypingIndicator content="Roofe is typing" />
                      ) : null
                    }
                  >
                    {messages.map((message, i) => {
                      console.log(message);
                      return <Message key={i} model={message} />;
                    })}
                  </MessageList>
                  <MessageInput
                    style={{ backgroundColor: "#011E6C" }}
                    placeholder="Type message here"
                    onSend={handleSend}
                  />
                </ChatContainer>
              </MainContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatBot;