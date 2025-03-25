"use client";

import React from 'react';
import dynamic from 'next/dynamic';

interface VoiceSearchProps {
  onResult: (transcript: string) => void;
  onListeningChange: (isListening: boolean) => void;
}

// Dynamically import VoiceSearch component with SSR disabled
// This prevents regeneratorRuntime errors during server-side rendering
const DynamicVoiceSearch = dynamic(
  () => import('./VoiceSearch'),
  { ssr: false }
);

const VoiceSearchWrapper: React.FC<VoiceSearchProps> = (props) => {
  return <DynamicVoiceSearch {...props} />;
};

export default VoiceSearchWrapper;
