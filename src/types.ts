export type NavTab = 'about' | 'courses' | 'gallery' | 'contact';

export interface Course {
  id: string;
  title: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary';
  grades: string;
  category: 'english' | 'ict' | 'preschool' | 'vocab';
  description: string;
  imageUrl: string;
  features: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'animals' | 'letters' | 'games' | 'ocean' | 'phonics' | 'teacher';
  imageUrl: string;
  tag: string;
  tagColor: string;
  mediaType: 'image' | 'video' | 'interactive';
  colSpan?: string;
  aspect?: string;
}

export interface EnrollmentFormData {
  studentName: string;
  parentName: string;
  phone: string;
  grade: string;
  subject: 'english' | 'ict' | 'both';
  preferredTime: string;
  message?: string;
}
