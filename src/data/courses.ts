import { Course } from '../types';
import englishCourseImg from '../assets/images/english_grades_course_1788130677606.jpg';
import ictCourseImg from '../assets/images/ict_grades_course_1788130691985.jpg';
import preschoolImg from '../assets/images/preschool_english_1788130710450.jpg';

export const COURSES_DATA: Course[] = [
  {
    id: 'english-grades-1-13',
    title: 'English for Grades 1-13',
    badge: 'Core',
    badgeColor: 'secondary',
    grades: 'Grades 1-13',
    category: 'english',
    description: 'A comprehensive journey through the English language, from basic phonics for primary students to advanced literature and composition for older students. Building confidence at every step.',
    imageUrl: englishCourseImg,
    features: [
      'Personalized 1-on-1 attention',
      'School syllabus + Spoken English fluency',
      'Grammar, Vocabulary & Creative Writing',
      'Exam preparation for O/L & A/L'
    ],
    isFeatured: true
  },
  {
    id: 'ict-grades-6-11',
    title: 'ICT for Grades 6-11',
    badge: 'Popular',
    badgeColor: 'tertiary',
    grades: 'Grades 6-11',
    category: 'ict',
    description: 'Empowering students with essential digital skills, programming basics, and technological fluency for the modern world.',
    imageUrl: ictCourseImg,
    features: [
      'National & International Syllabus',
      'Hands-on Practical Projects',
      'Coding basics (Python, Scratch, Web)',
      'O/L ICT Theory & Model Paper discussions'
    ],
    isFeatured: true
  },
  {
    id: 'english-preschool',
    title: 'English for Preschoolers',
    badge: 'Starter',
    badgeColor: 'secondary',
    grades: 'Ages 4-6',
    category: 'preschool',
    description: 'A gentle, playful introduction to English through songs, stories, and interactive play. Building a strong foundation with pure joy.',
    imageUrl: preschoolImg,
    features: [
      'Letter sounds & Phonics fun',
      'Daily conversational words',
      'Color, shapes & number games',
      'Friendly and patient teaching style'
    ]
  },
  {
    id: 'animal-names',
    title: 'Animal Names & Wildlife',
    badge: 'Vocab',
    badgeColor: 'primary',
    grades: 'Grades 1-5',
    category: 'vocab',
    description: 'Learn to identify and name favorite animals from around the world with interactive audio flashcards and engaging quizzes.',
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1000&q=80',
    features: ['Wild Animals', 'Farm Animals', 'Marine Life', 'Animal Sounds']
  },
  {
    id: 'clothes-colors',
    title: 'Clothes & Colors',
    badge: 'Vocab',
    badgeColor: 'tertiary',
    grades: 'Grades 1-5',
    category: 'vocab',
    description: 'Master vocabulary for everyday clothing items, accessories, and colors through interactive wardrobe exploration activities.',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80',
    features: ['Everyday Clothes', 'Seasonal Outfits', 'Color Mixing', 'Dressing Vocabulary']
  },
  {
    id: 'numbers-counting',
    title: 'Numbers & Counting',
    badge: 'Math & English',
    badgeColor: 'secondary',
    grades: 'Grades 1-6',
    category: 'vocab',
    description: 'Fun games and activities to master counting from 1 to 100, number words, ordinals, and basic math expressions in English.',
    imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1000&q=80',
    features: ['Numbers 1 - 100', 'Number Spelling', 'Quantity Matching', 'Math Terms']
  }
];
