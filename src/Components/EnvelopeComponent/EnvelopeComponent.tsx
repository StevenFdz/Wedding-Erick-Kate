import React, { useRef, useState } from 'react';
import './EnvelopeComponent.css';
import { Container } from 'react-bootstrap';
import musicFile from "../../asseets/Quedate.mp3";
import tapMe from "../../asseets/logo.gif"
import logo from "../../asseets/Logo_Envelope.png"

const EnvelopeComponent: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsMoved(!isMoved);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      document.body.style.overflowY = '';
    }
    setTimeout(() => {
      setIsVisible(true)
    }, 2000); // 2000 milisegundos = 2 segundos
  };

  return (
    <Container fluid className={`container-envelope ${isMoved ? 'transparent-background' : ''} ${isVisible ? 'absolute' : ''}`}>
      <div className={`square-envelope background-envelope-bottom ${isMoved ? 'move-right' : ''} ${isVisible ? 'not-visible' : ''}`}></div>
      <div className={`triangle ${isMoved ? 'move-left' : ''} ${isVisible ? 'not-visible' : ''}`} style={{ display: "flex", alignItems: "center", justifyContent: "right", position: 'absolute'}}></div>
      <img onClick={handleClick} src={logo} alt={""} className={`logo-envelope ${isMoved ? 'move-left' : ''}`} />
      <img onClick={handleClick} src={tapMe} alt={""} className={`tap-me-logo ${isMoved ? 'move-left' : ''}`} />
      
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Container>
  );
};

export default EnvelopeComponent;