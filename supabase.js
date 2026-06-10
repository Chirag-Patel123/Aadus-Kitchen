// public/js/supabase.js

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

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

  // Build HTML for each item
  const menuContainer = document.getElementById('menu-grid');
  menuContainer.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.image_url || 'placeholder.jpg'}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description || ''}</p>
      <span class="price">₹${item.discounted_price || item.price}</span>
      <button onclick="addToCart('${item.id}', '${item.name}')">
        Add to Cart
      </button>
    </div>
  `).join('');
}
