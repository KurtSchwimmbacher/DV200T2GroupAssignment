import React, { useEffect } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  useEffect(() => {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");
    const chatboxToggler = document.querySelector(".chatbot-toggler");

    let userMessage;
    const API_KEY = "sk-proj-C9s56fK9mMCWjTPTpiqPT3BlbkFJ0t3xJ6F4n0fpczUPw6sV";

    const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      let chatContent =
        className === "outgoing"
          ? `<p>${message}</p>`
          : `<span class="material-icons">smart_toy</span><p>${message}</p>`;
      chatLi.innerHTML = chatContent;
      return chatLi;
    };

    const appendAndScroll = (element) => {
      chatbox.appendChild(element);
      chatbox.scrollTop = chatbox.scrollHeight;
    };

    const generateResponse = (thinkingLi) => {
      const API_URL = "https://api.openai.com/v1/chat/completions";
      const messageElement = thinkingLi.querySelector("p");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        }),
      };

      fetch(API_URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.error && data.error.code === "insufficient_quota") {
            console.error("Quota exceeded:", data.error.message);
            messageElement.textContent =
              "Quota exceeded. Please check your OpenAI account or try again later.";
          } else if (data.choices && data.choices.length > 0) {
            const botMessage = data.choices[0].message.content;
            messageElement.textContent = botMessage;
          } else {
            console.error("Unexpected response format:", data);
            messageElement.textContent = "An error occurred. Please try again."; 
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          messageElement.textContent = "An error occurred. Please try again.";
        });
    };

    const handleChat = () => {
      userMessage = chatInput.value.trim();
      if (!userMessage) return;

      appendAndScroll(createChatLi(userMessage, "outgoing"));

      chatInput.value = "";
      chatInput.focus();

      setTimeout(() => {
        const thinkingLi = createChatLi("Thinking...", "incoming");
        appendAndScroll(thinkingLi);
        generateResponse(thinkingLi);
      }, 600);
    };

    sendChatBtn.addEventListener("click", handleChat);
    chatboxToggler.addEventListener("click", () => {
      document.body.classList.toggle("show-chatbot");
    });
  }, []);

  return (
    <div className="chatbot-con">
      <button className="chatbot-toggler">
        <span className="material-icons">mode_comment</span>
        <span className="material-icons">close</span>
      </button>
      <div className="chatbot">
        <header className="chatbot-head">
          <h2>EQ Chatbot</h2>
          <span className="material-icons">close</span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-icons">smart_toy</span>
            <p>Hi there 👋<br />Welcome to the EQ Chatbot</p>
          </li>
          <li className="chat outgoing"></li>
        </ul>
        <div className="chat-input">
          <textarea placeholder="Enter a message..." required></textarea>
          <span id="send-btn" className="material-icons">send</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
