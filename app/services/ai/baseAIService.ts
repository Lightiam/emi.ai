import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Define the base API configuration
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.emilist.com',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

// Define response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// Error handling interface
export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

// Language support
export const SUPPORTED_LANGUAGES = [
  'en', 'fr', 'es', 'de', 'zh', 'ar', 'hi', 'ja', 'ru', 'pt', 'bn', 'ur', 'id', 
  'tr', 'vi', 'th', 'ko', 'fa', 'it', 'pl', 'uk', 'nl', 'el', 'cs', 'ro', 'hu', 
  'sv', 'bg', 'da', 'fi', 'sk', 'no', 'hr', 'lt', 'sl', 'et', 'lv', 'mt', 'sq', 
  'mk', 'sw', 'yo', 'ha', 'ig'
  // ... 189 languages total
];

// Mock response generator with multilingual support
const generateMockResponse = <T>(data: T, language = 'en'): ApiResponse<T> => {
  const successMessages: Record<string, string> = {
    en: 'Request successful',
    fr: 'Requête réussie',
    es: 'Solicitud exitosa',
    de: 'Anfrage erfolgreich',
    zh: '请求成功',
    // ... other languages
  };

  return {
    data,
    status: 200,
    message: successMessages[language] || successMessages.en,
    success: true,
  };
};

// Base API service class
class BaseApiService {
  private axiosInstance = axios.create(API_CONFIG);
  private language: string = 'en';

  constructor() {
    // Add request interceptor for authentication
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Add language header
        config.headers['Accept-Language'] = this.language;
        
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for error handling
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => this.handleApiError(error)
    );
  }

  // Set the language for API requests
  public setLanguage(language: string): void {
    if (SUPPORTED_LANGUAGES.includes(language)) {
      this.language = language;
    } else {
      console.warn(`Language ${language} not supported. Defaulting to English.`);
      this.language = 'en';
    }
  }

  // Get the current language
  public getLanguage(): string {
    return this.language;
  }

  // Handle API errors
  private handleApiError(error: any): Promise<never> {
    const errorMessages: Record<string, Record<number, string>> = {
      en: {
        400: 'Bad request. Please check your input.',
        401: 'Unauthorized. Please log in again.',
        403: 'Forbidden. You do not have permission to access this resource.',
        404: 'Resource not found.',
        500: 'Server error. Please try again later.',
      },
      fr: {
        400: 'Mauvaise requête. Veuillez vérifier vos données.',
        401: 'Non autorisé. Veuillez vous reconnecter.',
        403: 'Interdit. Vous n\'avez pas la permission d\'accéder à cette ressource.',
        404: 'Ressource non trouvée.',
        500: 'Erreur serveur. Veuillez réessayer plus tard.',
      },
      // ... other languages
    };

    const apiError: ApiError = {
      status: error.response?.status || 500,
      message: 
        errorMessages[this.language]?.[error.response?.status] || 
        errorMessages.en[error.response?.status] || 
        error.response?.data?.message || 
        'An unexpected error occurred',
      errors: error.response?.data?.errors,
    };

    console.error('API Error:', apiError);
    return Promise.reject(apiError);
  }

  // Enhanced GET request with retries
  protected async get<T>(
    url: string, 
    params?: Record<string, any>, 
    config?: AxiosRequestConfig,
    retries = 3
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(
        url, 
        { ...config, params }
      );
      return response.data;
    } catch (error) {
      if (retries > 0 && (error as ApiError).status >= 500) {
        console.log(`Retrying GET request to ${url}. Retries left: ${retries - 1}`);
        return this.get<T>(url, params, config, retries - 1);
      }
      throw error;
    }
  }

  // Enhanced POST request with retries
  protected async post<T>(
    url: string, 
    data?: any, 
    config?: AxiosRequestConfig,
    retries = 3
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(
        url, 
        data, 
        config
      );
      return response.data;
    } catch (error) {
      if (retries > 0 && (error as ApiError).status >= 500) {
        console.log(`Retrying POST request to ${url}. Retries left: ${retries - 1}`);
        return this.post<T>(url, data, config, retries - 1);
      }
      throw error;
    }
  }

  // Enhanced PUT request with retries
  protected async put<T>(
    url: string, 
    data?: any, 
    config?: AxiosRequestConfig,
    retries = 3
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.put(
        url, 
        data, 
        config
      );
      return response.data;
    } catch (error) {
      if (retries > 0 && (error as ApiError).status >= 500) {
        console.log(`Retrying PUT request to ${url}. Retries left: ${retries - 1}`);
        return this.put<T>(url, data, config, retries - 1);
      }
      throw error;
    }
  }

  // Enhanced DELETE request with retries
  protected async delete<T>(
    url: string, 
    config?: AxiosRequestConfig,
    retries = 3
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.delete(
        url, 
        config
      );
      return response.data;
    } catch (error) {
      if (retries > 0 && (error as ApiError).status >= 500) {
        console.log(`Retrying DELETE request to ${url}. Retries left: ${retries - 1}`);
        return this.delete<T>(url, config, retries - 1);
      }
      throw error;
    }
  }

  // Mock API response for development/testing
  protected mockResponse<T>(data: T): ApiResponse<T> {
    return generateMockResponse(data, this.language);
  }
}

export default BaseApiService;
