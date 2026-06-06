import { supabase } from '@/lib/supabase';

const MOCK_COURSES = [
  { id: 1, title: 'Principles of Written English, Part 2', category: 'Language', price: 85, image: '/course_placeholder.png' },
  { id: 2, title: 'Entrepreneurship 101: Who is your customer?', category: 'Marketing', price: 195, image: '/course_placeholder.png' },
  { id: 3, title: 'Evaluating Social Programs', category: 'Social', price: 0, image: '/course_placeholder.png' },
  { id: 4, title: 'Principles of Written English, Part 1', category: 'Language', price: 85, image: '/course_placeholder.png' },
  { id: 5, title: 'Introduction to Biomedical Imaging', category: 'Medicine', price: 400, image: '/course_placeholder.png' },
  { id: 6, title: 'Introduction to Computer Science', category: 'Computers', price: 120, image: '/course_placeholder.png' },
];

export async function getCourses() {
  try {
    const { data, error } = await supabase.from('courses').select('*').order('id', { ascending: true });
    
    if (error || !data || data.length === 0) {
      return MOCK_COURSES;
    }
    
    return data;
  } catch (err) {
    return MOCK_COURSES;
  }
}
