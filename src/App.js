import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showAI, setShowAI] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAIMessage = () => {
    if (!userInput) return;
    // Add user message
    setAiMessages([...aiMessages, { type: "user", text: userInput }]);
    // Mock AI response
    setAiMessages(prev => [
      ...prev,
      { type: "ai", text: `AI Response to: "${userInput}"` }
    ]);
    setUserInput("");
  };

  return (
    <div>
      <Header />
      <Home />
      <Footer />

      {/* WhatsApp floating card */}
      <div className="floating-button whatsapp-button">
        <a
          href="https://wa.me/254729489713?text=Hi%20I%20came%20from%20your%20website%2C%20can%20you%20help%20me?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
        </a>
        <div className="floating-card-tooltip">
          Got any questions? <br /> Chat with us
        </div>
      </div>

      {/* AI floating card */}
      <div className="floating-button ai-button" onClick={() => setShowAI(!showAI)}>
        <img src="/ai-icon.png" alt="AI Chat" />
        <div className="floating-card-tooltip">Ask AI anything</div>

        {showAI && (
          <div className="floating-card ai-chat-card">
            <div className="chat-window">
              {aiMessages.map((msg, i) => (
                <div
                  key={i}
                  className={msg.type === "user" ? "user-msg" : "ai-msg"}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={userInput}
                placeholder="Type your question..."
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAIMessage()}
              />
              <button onClick={handleAIMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
