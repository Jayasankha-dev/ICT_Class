import { GalleryItem } from '../types';

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'teacher-deshani-portrait',
    title: 'Meet Teacher Deshani Bandara',
    subtitle: 'Lead Instructor & Founder guiding 1-on-1 English & ICT classes with warmth and patience.',
    category: 'teacher',
    imageUrl: 'https://raw.githubusercontent.com/DeshaniBandara/English-Class/refs/heads/main/src/assets/images/IMG-20260820-WA0108.jpg',
    tag: 'Teacher Profile',
    tagColor: 'bg-[#0061a4] text-white',
    mediaType: 'image'
  },
  {
    id: 'teacher-ict-collaboration',
    title: 'Interactive ICT & Coding Guidance',
    subtitle: 'Mentoring young learners and peers hands-on at the workstation with modern software & logic.',
    category: 'teacher',
    imageUrl: 'https://raw.githubusercontent.com/DeshaniBandara/English-Class/refs/heads/main/src/assets/images/teacher_ict_lab_1788133712882.jpg',
    tag: 'ICT & Tech Mentoring',
    tagColor: 'bg-[#2E7D32] text-white',
    mediaType: 'image',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'ocean-clownfish',
    title: 'Learning about Clownfish!',
    subtitle: 'We discovered where Nemo lives and learned new ocean vocabulary today.',
    category: 'ocean',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    tag: 'Ocean Life',
    tagColor: 'bg-[#ff5748] text-white',
    mediaType: 'image',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'letter-k',
    title: 'The Letter K!',
    subtitle: 'Practicing our sounds with Sinhala character comparison ක(ක්) & interactive videos.',
    category: 'letters',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85',
    tag: 'Phonics & Letters',
    tagColor: 'bg-[#f9e534] text-[#706500]',
    mediaType: 'video'
  },
  {
    id: 'sounding-it-out',
    title: 'Sounding it out',
    subtitle: 'Practicing blends, vowel sounds, and cheerful reading aloud exercises.',
    category: 'phonics',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85',
    tag: 'Phonics',
    tagColor: 'bg-[#d1e4ff] text-[#00497d]',
    mediaType: 'image'
  },
  {
    id: 'building-sentences',
    title: 'Building Sentences',
    subtitle: 'Connecting subject, verb, and fun descriptors through colorful building blocks.',
    category: 'games',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
    tag: 'Grammar',
    tagColor: 'bg-[#2196f3] text-white',
    mediaType: 'image'
  },
  {
    id: 'meeting-tree-frog',
    title: 'Meeting the Tree Frog!',
    subtitle: 'We hopped around learning dynamic action verbs, adjectives, and animal habitats.',
    category: 'animals',
    imageUrl: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=1200&q=85',
    tag: 'Action Verbs',
    tagColor: 'bg-[#2E7D32] text-white',
    mediaType: 'interactive',
    colSpan: 'md:col-span-2'
  }
];
