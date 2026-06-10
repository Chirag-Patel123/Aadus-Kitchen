// public/js/supabase.js

const SUPABASE_URL =
  'https://rmfhyfkiomvjvfrwdfxb.supabase.co';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZmh5Zmtpb212anZmcndkZnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MDAyMDQsImV4cCI6MjA5NjQ3NjIwNH0.WBqdrbZ73i0WPV-5DkNfpTPbSdBIiiy9ts5Gwv1r-6E';

window.supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

// Test connection
const { data, error } = await window.supabase
  .from('menu_categories').select('name').limit(1);
if (data) console.log('✅ Supabase connected! Categories:', data);
if (error) console.error('❌ Supabase error:', error);

