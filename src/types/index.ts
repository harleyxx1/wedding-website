export interface HeroData {
  bride: string;
  groom: string;
  date: Date;
  venue: string;
  location: string;
  welcomeMessage: string;
  heroImage: string;
}

export interface StoryMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface EventDetails {
  type: 'ceremony' | 'reception';
  date: Date;
  time: string;
  venueName: string;
  address: string;
  mapUrl: string;
  description?: string;
}

export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface RSVPFormData {
  fullName: string;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  guestCount: number;
  mealPreference?: string;
  dietaryRestrictions?: string;
  songRequest?: string;
  message?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  address: string;
  phone: string;
  bookingUrl: string;
  bookingCode?: string;
  distance: string;
  amenities: string[];
}

export interface TravelInfo {
  nearestAirport: string;
  airportCode: string;
  distanceFromVenue: string;
  parkingInfo: string;
  shuttleInfo?: string;
}

export interface RegistryLink {
  id: string;
  store: string;
  url: string;
  logo?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DressCode {
  type: string;
  description: string;
  examples: string[];
  dos: string[];
  donts: string[];
  colorPalette?: string[];
}
