"use client";

import React, { useState, useEffect, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface VoiceSearchProps {
  onResult: (transcript: string) => void;
  onListeningChange: (isListening: boolean) => void;
}

const VoiceSearch: React.FC<VoiceSearchProps> = ({ onResult, onListeningChange }) => {
  const [language, setLanguage] = useState<string>('en-US');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // Effect to detect user's language based on browser settings or geolocation
  useEffect(() => {
    // Get browser language as fallback
    const browserLang = navigator.language || 'en-US';
    
    // In a real implementation, we would:
    // 1. Use geolocation to determine user's country
    // 2. Map country to preferred language
    // 3. Set the appropriate language code from the 189 supported languages
    
    setLanguage(browserLang);
  }, []);

  // Effect to handle transcript processing
  useEffect(() => {
    if (transcript && !isProcessing) {
      const lowerTranscript = transcript.toLowerCase();
      
      // Check if the transcript starts with "hi emi" or similar variations
      if (lowerTranscript.includes('hi emi') || 
          lowerTranscript.includes('hey emi') || 
          lowerTranscript.includes('hi emmy') || 
          lowerTranscript.includes('hey emmy')) {
        
        setIsProcessing(true);
        
        // Process the command - remove the "hi emi" prefix
        const commandStart = Math.max(
          lowerTranscript.indexOf('hi emi') + 6,
          lowerTranscript.indexOf('hey emi') + 7,
          lowerTranscript.indexOf('hi emmy') + 7,
          lowerTranscript.indexOf('hey emmy') + 8
        );
        
        const command = transcript.slice(commandStart).trim();
        
        // Pass the processed command to the parent component
        if (command) {
          onResult(command);
        }
        
        // Reset for next command
        resetTranscript();
        setIsProcessing(false);
      }
    }
  }, [transcript, isProcessing, resetTranscript, onResult]);

  // Update parent component when listening state changes
  useEffect(() => {
    onListeningChange(listening);
  }, [listening, onListeningChange]);

  // Start listening when component mounts
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.error('Your browser does not support speech recognition.');
      return;
    }
    
    if (!isMicrophoneAvailable) {
      console.error('Please allow microphone access to use voice search.');
      return;
    }
    
    resetTranscript();
    SpeechRecognition.startListening({ 
      continuous: true,
      language: language
    });
    
    // Clean up when component unmounts
    return () => {
      SpeechRecognition.stopListening();
    };
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable, language, resetTranscript]);

  return (
    <div className="hidden">
      {/* This component doesn't render anything visible */}
      {/* It just provides the speech recognition functionality */}
    </div>
  );
};

export default VoiceSearch;
