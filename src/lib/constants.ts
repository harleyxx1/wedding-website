import type {
  HeroData,
  StoryMilestone,
  EventDetails,
  ScheduleEvent,
  Accommodation,
  TravelInfo,
  RegistryLink,
  FAQItem,
  DressCode,
} from '@/types';

export const WEDDING_DATA = {
  hero: {
    bride: 'Angelica',
    groom: 'Harley',
    date: new Date('2027-05-01'),
    venue: 'Beautiful Garden Estate',
    location: 'Sta. Maria, Bulacan, Philippines',
    welcomeMessage: 'Join us as we celebrate our love and commitment',
    heroImage: '/images/hero.jpg',
  } as HeroData,

  story: [
    {
      id: '1',
      title: 'How We Met',
      date: 'January 2020',
      description: 'We met at a mutual friend\'s party and instantly connected over our shared love of travel and adventure. What started as a simple conversation turned into hours of laughter and stories.',
      image: '/images/couple/met.jpg',
    },
    {
      id: '2',
      title: 'First Date',
      date: 'February 2020',
      description: 'Our first official date was at a cozy Italian restaurant. We talked until closing time, and we both knew this was the beginning of something special.',
      image: '/images/couple/first-date.jpg',
    },
    {
      id: '3',
      title: 'The Proposal',
      date: 'December 2025',
      description: 'During a sunset walk on the beach in Boracay, Harley got down on one knee and asked the most important question. Of course, Angelica said yes!',
      image: '/images/couple/proposal.jpg',
    },
  ] as StoryMilestone[],

  ceremony: {
    type: 'ceremony',
    date: new Date('2027-05-01'),
    time: '4:00 PM',
    venueName: 'Beautiful Garden Estate',
    address: '123 Garden Road, Sta. Maria, Bulacan',
    mapUrl: 'https://maps.google.com/?q=Sta.+Maria+Bulacan',
    description: 'Join us for an intimate garden ceremony surrounded by nature.',
  } as EventDetails,

  reception: {
    type: 'reception',
    date: new Date('2027-05-01'),
    time: '6:00 PM',
    venueName: 'Beautiful Garden Estate',
    address: '123 Garden Road, Sta. Maria, Bulacan',
    mapUrl: 'https://maps.google.com/?q=Sta.+Maria+Bulacan',
    description: 'Celebrate with us at the reception with dinner, dancing, and festivities.',
  } as EventDetails,

  schedule: [
    {
      id: '1',
      time: '3:30 PM',
      title: 'Guest Arrival',
      description: 'Please arrive early to find your seats and enjoy the garden atmosphere.',
      icon: 'users',
      duration: '30 min',
    },
    {
      id: '2',
      time: '4:00 PM',
      title: 'Ceremony Begins',
      description: 'The wedding ceremony begins. Please be seated.',
      icon: 'heart',
      duration: '45 min',
    },
    {
      id: '3',
      time: '5:00 PM',
      title: 'Cocktail Hour',
      description: 'Enjoy drinks and appetizers while we take photos.',
      icon: 'glass',
      duration: '1 hour',
    },
    {
      id: '4',
      time: '6:00 PM',
      title: 'Reception & Dinner',
      description: 'Join us for a delicious dinner and celebration.',
      icon: 'utensils',
      duration: '2 hours',
    },
    {
      id: '5',
      time: '8:00 PM',
      title: 'First Dance & Dancing',
      description: 'Dance the night away with us!',
      icon: 'music',
      duration: '3 hours',
    },
    {
      id: '6',
      time: '11:00 PM',
      title: 'Send Off',
      description: 'A sparkler send-off to end the perfect evening.',
      icon: 'sparkles',
      duration: '15 min',
    },
  ] as ScheduleEvent[],

  accommodations: [
    {
      id: '1',
      name: 'Microtel by Wyndham Sta. Maria',
      address: 'MacArthur Highway, Sta. Maria, Bulacan',
      phone: '+63 44 815 5555',
      bookingUrl: 'https://www.wyndhamhotels.com',
      bookingCode: 'HARLEYANGELICA2027',
      distance: '5 km from venue',
      amenities: ['Free WiFi', 'Pool', 'Restaurant', 'Free Parking'],
    },
    {
      id: '2',
      name: 'Hotel Sogo Sta. Maria',
      address: 'MacArthur Highway, Sta. Maria, Bulacan',
      phone: '+63 44 815 6666',
      bookingUrl: 'https://www.hotelsogo.com',
      bookingCode: 'HARLEYANGELICA2027',
      distance: '3 km from venue',
      amenities: ['Free WiFi', 'Restaurant', 'Free Parking'],
    },
    {
      id: '3',
      name: 'Nearby Hotels in Bulacan',
      address: 'Various locations in Sta. Maria and nearby areas',
      phone: '+63 44 815 7777',
      bookingUrl: 'https://www.booking.com',
      distance: 'Within 10 km from venue',
      amenities: ['Free WiFi', 'Restaurant', 'Free Parking'],
    },
  ] as Accommodation[],

  travel: {
    nearestAirport: 'Ninoy Aquino International Airport (Manila)',
    airportCode: 'MNL',
    distanceFromVenue: '45 km (1-1.5 hours drive via NLEX)',
    parkingInfo: 'Free parking available at the venue for all guests.',
    shuttleInfo: 'Complimentary shuttle service from selected hotels. Please RSVP to reserve your spot.',
  } as TravelInfo,

  registry: [
    {
      id: '1',
      store: 'SM Home',
      url: 'https://www.smhome.com.ph',
      logo: '/images/registry/sm.png',
    },
    {
      id: '2',
      store: 'Rustan\'s',
      url: 'https://www.rustans.com',
      logo: '/images/registry/rustans.png',
    },
    {
      id: '3',
      store: 'Honeymoon Fund',
      url: '#',
      logo: '/images/registry/honeymoon.png',
    },
  ] as RegistryLink[],

  faqs: [
    {
      id: '1',
      question: 'What is the dress code?',
      answer: 'The dress code is Formal/Cocktail attire. Please see the Dress Code section for more details and examples.',
      category: 'Attire',
    },
    {
      id: '2',
      question: 'Are children welcome?',
      answer: 'While we love your little ones, we have decided to make this an adults-only celebration. We hope this gives you a chance to enjoy a night off!',
      category: 'General',
    },
    {
      id: '3',
      question: 'Is the ceremony unplugged?',
      answer: 'Yes, we kindly ask that you keep your phones and cameras away during the ceremony. Our professional photographer will capture all the special moments, and we\'ll share them with you afterward.',
      category: 'General',
    },
    {
      id: '4',
      question: 'What time should I arrive?',
      answer: 'Please arrive by 3:30 PM to allow time to find parking, be seated, and enjoy the pre-ceremony atmosphere. The ceremony will begin promptly at 4:00 PM.',
      category: 'General',
    },
    {
      id: '5',
      question: 'Where can I park?',
      answer: 'Free parking is available at the venue. Attendants will be on-site to direct you to parking areas.',
      category: 'Travel',
    },
    {
      id: '6',
      question: 'Will there be food and drinks?',
      answer: 'Yes! We will have a cocktail hour with appetizers, followed by a full dinner reception. An open bar will be available throughout the evening.',
      category: 'General',
    },
    {
      id: '7',
      question: 'Can I bring a plus-one?',
      answer: 'Due to venue capacity, we can only accommodate guests formally invited on your invitation. If you received a plus-one, it will be indicated on your invitation.',
      category: 'General',
    },
    {
      id: '8',
      question: 'What if it rains?',
      answer: 'The venue has a beautiful covered pavilion as a backup plan. Rain or shine, the celebration will go on!',
      category: 'General',
    },
    {
      id: '9',
      question: 'When is the RSVP deadline?',
      answer: 'Please RSVP by April 1st, 2027. This helps us finalize catering and seating arrangements.',
      category: 'RSVP',
    },
    {
      id: '10',
      question: 'How do I get to Sta. Maria, Bulacan from Manila?',
      answer: 'Sta. Maria, Bulacan is about 1-1.5 hours from Manila via NLEX (North Luzon Expressway). Take the Sta. Maria exit. We recommend using Waze or Google Maps for real-time directions.',
      category: 'Travel',
    },
  ] as FAQItem[],

  dressCode: {
    type: 'Formal / Cocktail Attire',
    description: 'We want you to feel comfortable and look your best! Think elegant and sophisticated.',
    examples: [
      'Floor-length gowns or cocktail dresses',
      'Suits or dress shirts with slacks',
      'Dress shoes (heels or flats)',
    ],
    dos: [
      'Wear elegant, formal attire',
      'Consider the garden setting (avoid stiletto heels)',
      'Bring a light jacket or shawl for the evening',
      'Feel free to add your personal style',
    ],
    donts: [
      'Avoid wearing white, cream, or ivory (reserved for the bride)',
      'Skip overly casual attire (jeans, t-shirts, sneakers)',
      'Avoid overly revealing outfits',
      'Don\'t wear anything too flashy that might distract',
    ],
    colorPalette: ['#9B7EBD', '#D4B5E8', '#D4AF37', '#E8D4A0', '#8B7355', '#A89080'],
  } as DressCode,
};

export const RSVP_DEADLINE = new Date('2027-04-01');
