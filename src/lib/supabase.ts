
import { createClient } from '@supabase/supabase-js';

new
// Use environment variables if available, otherwise use default values
// These defaults help during development but should be replaced with real values in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ctlyrmjspccerybcyegn.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bHlybWpzcGNjZXJ5YmN5ZWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzA3MzIsImV4cCI6MjA2MTI0NjczMn0.2d4C0z2tFgCJN4PfMLEo4pdMQPABKi-PQZXOa6rFW14';

// In production, we should still enforce proper configuration
if (import.meta.env.PROD && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  console.warn('Missing Supabase environment variables in production. Authentication features will not work correctly.');
}
main

export const supabase = createClient(supabaseUrl, supabaseKey);
