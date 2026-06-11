// Authentication functions can be split here from menu.js.
async function signUp(email, password) {

  const { data, error } =
    await window.supabaseClient.auth.signUp({
      email,
      password
    });

  if(error){
    alert(error.message);
    return;
  }

  alert('Account created successfully!');
}

// ========== LOGIN FUNCTION ===============

async function login(email, password) {

  const { data, error } =
    await window.supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if(error){
    alert(error.message);
    return;
  }

  alert('Logged in successfully!');
}

// ========== LOGOUT FUNCTION ===============

async function logout() {

  await window.supabaseClient.auth.signOut();

  location.reload();
}
