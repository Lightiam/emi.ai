import BaseApiService, { ApiResponse } from './baseAIService';

// Define the voice search response interface
export interface VoiceSearchResult {
  query: string;
  results: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    relevanceScore: number;
  }>;
  language: string;
  processingTimeMs: number;
}

// Define the voice search options interface
export interface VoiceSearchOptions {
  language?: string;
  maxResults?: number;
  filterByCategory?: string;
  location?: {
    latitude: number;
    longitude: number;
    radius?: number; // in kilometers
  };
}

class VoiceSearchService extends BaseApiService {
  private static instance: VoiceSearchService;

  private constructor() {
    super();
  }

  // Singleton pattern to ensure only one instance exists
  public static getInstance(): VoiceSearchService {
    if (!VoiceSearchService.instance) {
      VoiceSearchService.instance = new VoiceSearchService();
    }
    return VoiceSearchService.instance;
  }

  // Process voice search query
  public async processVoiceSearch(
    query: string,
    options: VoiceSearchOptions = {}
  ): Promise<ApiResponse<VoiceSearchResult>> {
    try {
      // In production, this would call the actual API
      // For now, we'll use the mock response
      
      // Set language from options if provided
      if (options.language) {
        this.setLanguage(options.language);
      }
      
      // Process the query to extract intent and entities
      const processedQuery = this.preprocessQuery(query);
      
      // Generate mock search results based on the query
      const mockResults = this.generateMockResults(processedQuery, options);
      
      return this.mockResponse<VoiceSearchResult>({
        query: processedQuery,
        results: mockResults,
        language: this.getLanguage(),
        processingTimeMs: Math.floor(Math.random() * 300) + 100, // Random processing time between 100-400ms
      });
      
      // In production, this would be:
      // return this.post<VoiceSearchResult>('/api/voice-search', {
      //   query,
      //   options
      // });
    } catch (error) {
      console.error('Voice search error:', error);
      throw error;
    }
  }
  
  // Preprocess the query to handle common patterns and extract intent
  private preprocessQuery(query: string): string {
    // Remove "Hi Emi" prefix if present
    const hiEmiPattern = /^(hi|hey)\s+(emi|emmy)/i;
    return query.replace(hiEmiPattern, '').trim();
  }
  
  // Generate mock search results based on the query
  private generateMockResults(
    query: string, 
    options: VoiceSearchOptions
  ): VoiceSearchResult['results'] {
    const maxResults = options.maxResults || 10;
    const results: VoiceSearchResult['results'] = [];
    
    // Extract keywords from query
    const keywords = query.toLowerCase().split(' ');
    
    // Check for service type keywords
    const isPlumber = keywords.some(word => 
      ['plumber', 'plumbing', 'pipe', 'water', 'leak', 'tap', 'faucet'].includes(word)
    );
    
    const isElectrician = keywords.some(word => 
      ['electrician', 'electrical', 'wiring', 'power', 'light', 'socket'].includes(word)
    );
    
    const isCarpenter = keywords.some(word => 
      ['carpenter', 'wood', 'furniture', 'cabinet', 'door', 'chair', 'table'].includes(word)
    );
    
    // Check for location keywords
    const locationKeywords = [
      'lagos', 'abuja', 'ibadan', 'kano', 'port harcourt', 
      'benin', 'ikoyi', 'lekki', 'ikeja', 'yaba'
    ];
    
    const mentionedLocations = locationKeywords.filter(location => 
      query.toLowerCase().includes(location)
    );
    
    // Generate appropriate mock results based on query analysis
    if (isPlumber) {
      results.push(
        {
          id: 'p1',
          title: 'Expert Plumbing Services',
          description: 'Professional plumbing solutions for residential and commercial properties.',
          category: 'Plumbing',
          relevanceScore: 0.95,
        },
        {
          id: 'p2',
          title: 'Emergency Plumbing Repairs',
          description: '24/7 emergency plumbing service for leaks, bursts, and blockages.',
          category: 'Plumbing',
          relevanceScore: 0.92,
        },
        {
          id: 'p3',
          title: 'Bathroom & Kitchen Plumbing',
          description: 'Specialized plumbing services for bathroom and kitchen installations.',
          category: 'Plumbing',
          relevanceScore: 0.88,
        }
      );
    }
    
    if (isElectrician) {
      results.push(
        {
          id: 'e1',
          title: 'Certified Electrical Services',
          description: 'Licensed electricians for all your electrical needs.',
          category: 'Electrical',
          relevanceScore: 0.94,
        },
        {
          id: 'e2',
          title: 'Electrical Installations & Repairs',
          description: 'Professional installation and repair of electrical systems.',
          category: 'Electrical',
          relevanceScore: 0.91,
        },
        {
          id: 'e3',
          title: 'Emergency Electrical Services',
          description: '24/7 emergency electrical repairs and troubleshooting.',
          category: 'Electrical',
          relevanceScore: 0.87,
        }
      );
    }
    
    if (isCarpenter) {
      results.push(
        {
          id: 'c1',
          title: 'Custom Carpentry Solutions',
          description: 'Skilled carpenters for custom furniture and woodwork.',
          category: 'Carpentry',
          relevanceScore: 0.93,
        },
        {
          id: 'c2',
          title: 'Furniture Repair & Restoration',
          description: 'Expert furniture repair, refinishing, and restoration services.',
          category: 'Carpentry',
          relevanceScore: 0.89,
        },
        {
          id: 'c3',
          title: 'Cabinet & Shelving Installation',
          description: 'Professional cabinet and shelving design and installation.',
          category: 'Carpentry',
          relevanceScore: 0.85,
        }
      );
    }
    
    // If no specific service type is detected, provide general results
    if (results.length === 0) {
      results.push(
        {
          id: 'g1',
          title: 'Home Maintenance Services',
          description: 'General home maintenance and repair services.',
          category: 'General',
          relevanceScore: 0.80,
        },
        {
          id: 'g2',
          title: 'Handyman Services',
          description: 'Professional handyman for various home repair tasks.',
          category: 'General',
          relevanceScore: 0.78,
        },
        {
          id: 'g3',
          title: 'Home Improvement Experts',
          description: 'Skilled professionals for home improvement projects.',
          category: 'General',
          relevanceScore: 0.75,
        }
      );
    }
    
    // Add location-specific results if locations are mentioned
    if (mentionedLocations.length > 0) {
      const location = mentionedLocations[0];
      results.push(
        {
          id: `loc1-${location}`,
          title: `Top Service Providers in ${location.charAt(0).toUpperCase() + location.slice(1)}`,
          description: `Highly rated service providers serving the ${location} area.`,
          category: 'Location-based',
          relevanceScore: 0.96,
        }
      );
    }
    
    // Apply category filter if specified
    let filteredResults = results;
    if (options.filterByCategory) {
      filteredResults = results.filter(
        result => result.category.toLowerCase() === options.filterByCategory?.toLowerCase()
      );
    }
    
    // Sort by relevance and limit to maxResults
    return filteredResults
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxResults);
  }
}

export default VoiceSearchService;
