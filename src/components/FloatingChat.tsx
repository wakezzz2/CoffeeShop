import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const initialBotMessages = [
  "Hello! Welcome to Almira May's Caffeine Bloom. How can I help you today?",
  "Would you like to know about our menu, events, or make a reservation?",
  "I can also help you with our loyalty program or answer any questions about our coffee."
];

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: initialBotMessages[0],
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = initialBotMessages[Math.floor(Math.random() * initialBotMessages.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {getIcon('comment')({ className: 'w-8 h-8' })}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-8 z-50 w-96 h-[32rem] bg-neutral-800 rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-primary-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getIcon('comment')({ className: 'w-6 h-6' })}
                <span className="font-medium text-lg">Chat with us</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full"
              >
                {getIcon('close')({ className: 'w-5 h-5' })}
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-neutral-700 text-neutral-100 rounded-bl-none'
                    }`}
                  >
                    <p className="text-base">{message.text}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-neutral-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-neutral-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                >
                  {getIcon('share')({ className: 'w-6 h-6' })}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat; 