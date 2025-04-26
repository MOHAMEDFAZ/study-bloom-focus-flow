
import { createClient } from '@supabase/supabase-js';

// Use the provided Supabase URL and anon key
const supabaseUrl = 'https://ctlyrmjspccerypcyegn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bHlybWpzcGNjZXJ5YmN5ZWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzA3MzIsImV4cCI6MjA2MTI0NjczMn0.2d4C0z2tFgCJN4PfMLEo4pdMQPABKi-PQZXOa6rFW14';

export const supabase = createClient(supabaseUrl, supabaseKey);
