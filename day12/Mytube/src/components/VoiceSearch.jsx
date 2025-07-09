import React, { useState } from 'react';

const VoiceSearch = ({ onVoiceSearch }) => {
  const [listening, setListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const handleVoice = () => {
  const speakPrompt = new SpeechSynthesisUtterance("क्या देखना चाहेंगे?");
  speakPrompt.lang = "hi-IN";

  setSpokenText('');
  setListening(false);

  
  speakPrompt.onend = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'hi-IN';
    recognition.start();
    setListening(true); // show mic animation now

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setSpokenText(text);
      onVoiceSearch(text);
      setListening(false);
    };

    recognition.onerror = (e) => {
      alert("Voice input failed: " + e.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

 
  speechSynthesis.speak(speakPrompt);
};


  return (
    <div
      className="container"
      style={{
        minHeight: '1vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h4>बोलिए, आप क्या देखना चाहेंगे?</h4>

      <button
        onClick={handleVoice}
        className={listening ? 'mic-button listening' : 'mic-button'}
      >
        <img
          src="audio.png"
          alt="Mic"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </button>

      {listening && (
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#444' }}>
          हम सुन रहे हैं...
        </p>
      )}
      {spokenText && !listening && (
  <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#333' }}>
    आपने कहा: “{spokenText}”
  </p>
)}
    </div>
  );
};

export default VoiceSearch;
