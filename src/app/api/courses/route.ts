import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mock data as fallback when Supabase is not configured yet
const MOCK_COURSES = [
  { id: 1, title: 'Principles of Written English, Part 2', category: 'Language', price: 85 },
  { id: 2, title: 'Entrepreneurship 101: Who is your customer?', category: 'Marketing', price: 195 },
  { id: 3, title: 'Evaluating Social Programs', category: 'Social', price: 0 },
  { id: 4, title: 'Principles of Written English, Part 1', category: 'Language', price: 85 },
  { id: 5, title: 'Introduction to Biomedical Imaging', category: 'Medicine', price: 400 },
  { id: 6, title: 'Introduction to Computer Science', category: 'Computers', price: 120 },
];

export async function GET() {
  try {
    // Attempt to fetch from Supabase
    const { data, error } = await supabase.from('courses').select('*').order('id', { ascending: true });
    
    if (error || !data || data.length === 0) {
      // Return mock data if table doesn't exist or is empty
      return NextResponse.json(MOCK_COURSES);
    }
    
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(MOCK_COURSES);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, price } = body;

    const { data, error } = await supabase.from('courses').insert([{ title, category, price }]).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
