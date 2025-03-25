"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import VoiceSearch from "../VoiceSearch/VoiceSearch";

interface HeroSectionSearchProps {
  currentLink: number;
}

const HeroSectionSearch = ({ currentLink }: HeroSectionSearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isListening, setIsListening] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation: Ensure input is provided
    if (!searchQuery.trim()) {
      return;
    }

    // Navigate to the search page with the query
    router.push(`/catalog/services?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleVoiceSearch = useCallback(() => {
    // Toggle voice listening state
    setIsListening(prev => !prev);
  }, []);
  
  // Handle voice search results
  const handleVoiceResult = useCallback((transcript: string) => {
    if (transcript) {
      setSearchQuery(transcript);
      
      // Auto-submit search after receiving voice command
      setTimeout(() => {
        router.push(`/catalog/services?q=${encodeURIComponent(transcript.trim())}`);
      }, 1000);
    }
  }, [router]);
  
  // Handle listening state changes from VoiceSearch component
  const handleListeningChange = useCallback((listening: boolean) => {
    setIsListening(listening);
  }, []);
  
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <form
        className="relative flex items-center"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="search"
          name="search"
          placeholder={
            currentLink === 0
              ? "Search for skilled workers..."
              : currentLink === 1
              ? "Search for job opportunities..."
              : "Search for construction materials..."
          }
          className="w-full h-12 pl-5 pr-24 rounded-full border border-gray-200 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] text-gray-600 shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search input"
        />
        <div className="absolute right-2 flex items-center h-full">
          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`flex items-center justify-center h-8 w-8 rounded-full ${
              isListening ? 'text-white bg-red-500 animate-pulse' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
            } mr-1`}
            aria-label="Voice search"
            title="Voice search - say 'Hi Emi' followed by your request"
          >
            <FaMicrophone className="text-lg" />
          </button>
          <button
            type="submit"
            className="h-8 w-8 flex items-center justify-center bg-[#035d4d] rounded-full hover:bg-[#024a3d] transition-colors shadow-sm"
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1 3.09C21.9506 2.94051 21.7636 2.83641 21.5587 2.78915C21.3538 2.74189 21.1394 2.75323 20.94 2.82L2.94 9.83C2.7353 9.90095 2.55472 10.0269 2.42379 10.1943C2.29285 10.3618 2.21736 10.5639 2.20702 10.7743C2.19669 10.9847 2.25198 11.1929 2.36581 11.3717C2.47963 11.5504 2.64648 11.6923 2.84 11.78L10.05 14.84L10.05 14.85L13.11 22.06C13.1947 22.2485 13.3341 22.4095 13.5111 22.5236C13.688 22.6378 13.8947 22.7005 14.107 22.705C14.3207 22.7056 14.5297 22.6438 14.7082 22.5277C14.8868 22.4116 15.0264 22.2463 15.11 22.055L22.12 4.06C22.1932 3.86229 22.2101 3.64777 22.1686 3.44087C22.127 3.23397 22.0287 3.04402 21.885 2.9C21.8733 2.9 21.8733 2.9 21.86 2.9L22.1 3.09Z" fill="white"/>
            </svg>
          </button>
        </div>
      </form>
      <div className="text-xs text-gray-500 mt-2 text-center">
        Try voice search with &quot;Hi Emi&quot; - supports 189 languages for dialect and local language searching
      </div>
      
      {/* Voice Search Component */}
      {isListening && (
        <VoiceSearch 
          onResult={handleVoiceResult}
          onListeningChange={handleListeningChange}
        />
      )}
    </div>
  );
};

export default HeroSectionSearch;
