
import { createClient } from '@supabase/supabase-js';

// Use environment variables if available, otherwise use default values
// These defaults help during development but should be replaced with real values in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// In production, we should still enforce proper configuration
if (import.meta.env.PROD && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  console.warn('Missing Supabase environment variables in production. Authentication features will not work correctly.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
