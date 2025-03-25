// User types
export interface UserType {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'expert' | 'admin';
  avatar?: string;
  phone?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

// Expert types
export interface ExpertType {
  id: string;
  userId: string;
  title: string;
  bio: string;
  skills: string[];
  experience: number; // in years
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: AvailabilityType;
  portfolio: PortfolioItemType[];
  services: ServiceType[];
  location: LocationType;
  verified: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AvailabilityType {
  monday: TimeSlotType[];
  tuesday: TimeSlotType[];
  wednesday: TimeSlotType[];
  thursday: TimeSlotType[];
  friday: TimeSlotType[];
  saturday: TimeSlotType[];
  sunday: TimeSlotType[];
}

export interface TimeSlotType {
  start: string; // HH:MM format
  end: string; // HH:MM format
}

export interface PortfolioItemType {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  completedDate: string;
  clientName?: string;
}

// Service types
export interface ServiceType {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  priceUnit: 'hourly' | 'fixed' | 'daily';
  duration?: number; // in hours
  images?: string[];
  expertId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceCategoryType {
  id: number;
  name: string;
  icon: string;
  link: string;
}

// Job types
export interface JobType {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  duration?: number; // in days
  location: LocationType;
  skills: string[];
  attachments?: string[];
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  postedBy: string; // userId
  assignedTo?: string; // expertId
  createdAt: string;
  updatedAt: string;
}

// Material types
export interface MaterialType {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  currency: string;
  unit: string; // e.g., kg, piece, meter
  stock: number;
  images?: string[];
  sellerId: string;
  rating?: number;
  reviews?: number;
  createdAt: string;
  updatedAt: string;
}

// Location type
export interface LocationType {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

// Review types
export interface ReviewType {
  id: string;
  rating: number;
  comment: string;
  reviewerId: string; // userId
  revieweeId: string; // userId or expertId or materialId
  reviewType: 'expert' | 'service' | 'material';
  createdAt: string;
  updatedAt: string;
}

// Notification types
export interface NotificationType {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  link?: string;
  createdAt: string;
}

// Chat and messaging types
export interface MessageType {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachments?: string[];
  read: boolean;
  createdAt: string;
}

export interface ConversationType {
  id: string;
  participants: string[]; // userIds
  lastMessage?: MessageType;
  createdAt: string;
  updatedAt: string;
}

// Payment types
export interface PaymentType {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'card' | 'bank' | 'mobile_money' | 'cash';
  payerId: string; // userId
  payeeId: string; // userId or expertId
  jobId?: string;
  serviceId?: string;
  materialId?: string;
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

// Search types
export interface SearchResultType {
  id: string;
  title: string;
  description: string;
  type: 'expert' | 'service' | 'job' | 'material';
  image?: string;
  rating?: number;
  price?: number;
  location?: string;
  relevanceScore: number;
}

// Form types
export interface FormFieldType {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'file' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // For select, checkbox, radio
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    errorMessage?: string;
  };
}

// API response types
export interface ApiResponseType<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  meta?: {
    pagination?: {
      total: number;
      perPage: number;
      currentPage: number;
      lastPage: number;
    };
  };
}
