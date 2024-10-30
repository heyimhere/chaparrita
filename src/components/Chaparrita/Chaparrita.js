import React, { useState, useEffect } from 'react';
import './Chaparrita.css';

const Chaparrita = () => {
  const [text, setText] = useState('');
  const word = 'CHHAPARRITA NECIA \u2665';
  const typingSpeed = 150;

  useEffect(() => {
    console.log(`Para la Chaparrita Necia:
      Talking to you always makes my day better chaparrita, and I keep finding myself wanting to message you at all hours. 
      I know that opening up and getting closer can be a little scary, and I don’t want to rush you. 
      But I genuinely enjoy every moment we talk, and I find myself missing it when we don’t. 
      I’d love to have those conversations every night with the chaparrita I like. 
      Is that so bad to want?
      `)

    let timeoutId;
    let index = 0;
    const typeLetter = () => {
      if(index < word.length - 1) {
        setText((prev) => prev + word[index]);
        index++;
        timeoutId = setTimeout(typeLetter, typingSpeed);
      }
    }

    typeLetter();
      
    return () => clearTimeout(timeoutId);
  }, [word]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <h1 title={text} className="text-2xl md:text-5xl font-bold text-[#9370db] bg-clip-text 
        bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 animate-pulse 
        neon-text glitch-animation">
        {text} 
      </h1>
    </div>
  )
};

export default Chaparrita;