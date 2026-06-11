// ===================== SHARED DATA =====================
let menuItems = [];

let allMenuItems = [];

let ordersData = [
  {id:'AK-001',customer:'Rahul Sharma',phone:'+91 98765 43210',items:'Schezwan Fried Rice × 2, Veg Crispy × 1',amount:440,address:'204, Green Park, Kandivali East, Mumbai',status:'pending',time:'2:30 PM',date:'Today'},
  {id:'AK-002',customer:'Priya Mehta',phone:'+91 87654 32109',items:'Triple Fried Rice × 1, Chowmein × 1',amount:280,address:'B-12, Thakur Village, Kandivali East',status:'preparing',time:'2:15 PM',date:'Today'},
  {id:'AK-003',customer:'Amit Patel',phone:'+91 76543 21098',items:'Oil Fry Lollipop × 2',amount:400,address:'Flat 5, Smruti CHS, Akurli Road',status:'delivering',time:'1:55 PM',date:'Today'},
  {id:'AK-004',customer:'Sneha Joshi',phone:'+91 65432 10987',items:'Masala Papad × 2, TOC Fry × 1',amount:150,address:'302, Ganesh Nagar, Kandivali',status:'delivered',time:'1:30 PM',date:'Today'},
  {id:'AK-005',customer:'Karan Gupta',phone:'+91 54321 09876',items:'Schezwan Fried Rice × 1',amount:140,address:'A-7, Shanti CHS, Borivali West',status:'delivered',time:'12:45 PM',date:'Today'},
  {id:'AK-006',customer:'Deepa Singh',phone:'+91 43210 98765',items:'Veg Crispy × 2, Khicha Papad × 1',amount:370,address:'15, Rajdhani Society, Malad East',status:'cancelled',time:'12:10 PM',date:'Today'},
  {id:'AK-007',customer:'Vishal Nair',phone:'+91 32109 87654',items:'Triple Fried Rice × 2',amount:320,address:'88, Oberoi Complex, Kandivali East',status:'pending',time:'3:05 PM',date:'Today'},
  {id:'AK-008',customer:'Anjali Rao',phone:'+91 21098 76543',items:'Chowmein × 1, Masala Papad × 1',amount:165,address:'55, Shivam Building, Borivali East',status:'pending',time:'3:12 PM',date:'Today'},
];

let customersData = [
  {id:'C001',name:'Rahul Sharma',phone:'+91 98765 43210',email:'rahul.sharma@gmail.com',address:'204, Green Park, Kandivali East, Mumbai 400101',orders:14,spent:5820,lastOrder:'Today',status:'active',joined:'Jan 2024',avatar:'RS',color:'#FF6B00'},
  {id:'C002',name:'Priya Mehta',phone:'+91 87654 32109',email:'priya.mehta@gmail.com',address:'B-12, Thakur Village, Kandivali East, Mumbai',orders:9,spent:3240,lastOrder:'Today',status:'active',joined:'Mar 2024',avatar:'PM',color:'#8B5CF6'},
  {id:'C003',name:'Amit Patel',phone:'+91 76543 21098',email:'amit.patel@yahoo.com',address:'Flat 5, Smruti CHS, Akurli Road, Mumbai 400101',orders:22,spent:8900,lastOrder:'Today',status:'active',joined:'Nov 2023',avatar:'AP',color:'#10B981'},
  {id:'C004',name:'Sneha Joshi',phone:'+91 65432 10987',email:'sneha.joshi@gmail.com',address:'302, Ganesh Nagar, Kandivali, Mumbai',orders:6,spent:2100,lastOrder:'Today',status:'active',joined:'Apr 2024',avatar:'SJ',color:'#F59E0B'},
  {id:'C005',name:'Karan Gupta',phone:'+91 54321 09876',email:'karan.g@outlook.com',address:'A-7, Shanti CHS, Borivali West, Mumbai',orders:18,spent:7200,lastOrder:'Today',status:'active',joined:'Dec 2023',avatar:'KG',color:'#3B82F6'},
  {id:'C006',name:'Deepa Singh',phone:'+91 43210 98765',email:'deepa.singh@gmail.com',address:'15, Rajdhani Society, Malad East, Mumbai',orders:3,spent:980,lastOrder:'Today',status:'inactive',joined:'May 2024',avatar:'DS',color:'#EF4444'},
  {id:'C007',name:'Vishal Nair',phone:'+91 32109 87654',email:'vishal.nair@gmail.com',address:'88, Oberoi Complex, Kandivali East, Mumbai',orders:11,spent:4560,lastOrder:'Today',status:'active',joined:'Feb 2024',avatar:'VN',color:'#EC4899'},
  {id:'C008',name:'Anjali Rao',phone:'+91 21098 76543',email:'anjali.rao@gmail.com',address:'55, Shivam Building, Borivali East, Mumbai',orders:7,spent:2890,lastOrder:'Today',status:'active',joined:'Mar 2024',avatar:'AR',color:'#14B8A6'},
  {id:'C009',name:'Neha Gandhi',phone:'+91 90000 11111',email:'neha.gandhi@gmail.com',address:'12, Jasmine CHS, Charkop, Kandivali West',orders:19,spent:7840,lastOrder:'Yesterday',status:'active',joined:'Oct 2023',avatar:'NG',color:'#FF6B00'},
  {id:'C010',name:'Pinkesh Malaviya',phone:'+91 90000 22222',email:'p.malaviya@gmail.com',address:'901, Titanium City, Borivali East',orders:5,spent:1650,lastOrder:'3 days ago',status:'active',joined:'Jun 2024',avatar:'PM',color:'#2ECC71'},
];

let couponsData = [
  {id:1,code:'AADU60',discount:60,minOrder:0,uses:142,maxUses:200,expiry:'2024-12-31',status:'active',desc:'60% off on first order'},
  {id:2,code:'AADU25',discount:25,minOrder:200,uses:89,maxUses:500,expiry:'2024-12-31',status:'active',desc:'25% off on all Sichuan dishes'},
  {id:3,code:'SUMMER20',discount:20,minOrder:150,uses:200,maxUses:200,expiry:'2024-09-30',status:'inactive',desc:'Summer special — expired'},
];
let couponHistory = [
  {code:'AADU60',customer:'Rahul Sharma',orderId:'AK-001',discount:'-₹264',date:'Today'},
  {code:'AADU25',customer:'Priya Mehta',orderId:'AK-002',discount:'-₹70',date:'Today'},
  {code:'AADU60',customer:'Neha Gandhi',orderId:'AK-009',discount:'-₹192',date:'Yesterday'},
];

// ===================== CART =====================
let cart = [];
function addToCart(id){
  const item = menuItems.find(i => i.id===id);
  const ex = cart.find(i => String(i.id) === String(id));
  if(ex) ex.qty++;
  else cart.push({...item,qty:1});
  updateCart();
  showToast(`${item.name} added to cart!`, 'utensils');
}
function addToCartByName(name){
  const item = menuItems.find(i => String(i.id) === String(id));
  if(item) addToCart(item.id);
}
function removeFromCart(id){
  const idx = cart.findIndex(i => String(i.id) === String(id));
  if(idx>-1){
    if(cart[idx].qty>1) cart[idx].qty--;
    else cart.splice(idx,1);
    updateCart();
  }
}
function updateCart(){
  const count = cart.reduce((a,i)=>a+i.qty,0);
  const total = cart.reduce((a,i)=>a+i.price*i.qty,0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartSubtotal').textContent = inrText(total);
  document.getElementById('cartTotal').textContent = inrText(total);
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if(!cart.length){
    el.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><span class="ico"><i data-lucide="utensils"></i></span></div><p style="font-weight:700;">Your cart is empty</p><p style="font-size:.82rem;color:var(--gray);margin-top:.4rem;">Add some delicious items!</p></div>`;
    footer.style.display='none';
  } else {
    el.innerHTML = cart.map(i=>`
      <div class="cart-item">
        <img class="cart-item-img" src="${i.img}" alt="${i.name}">
        <div class="cart-item-info"><div class="cart-item-name">${i.name}</div><div class="cart-item-price">${inrHtml(i.price*i.qty)}</div></div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="removeFromCart('${i.id}')">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="addToCart('${i.id}')">+</button>
        </div>
      </div>`).join('');
    footer.style.display='block';
  }
  if(typeof lucide!=='undefined')lucide.createIcons();
}
function openCart(){ document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); }
function closeCart(){ document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }


// =================== LOAD FROM SUPABASE ================

async function loadMenuItems() {

  const { data, error } =
    await window.supabaseClient
      .from('menu_items')
      .select(`
        *,
        menu_categories(name)
      `)
      .eq('is_available', true);

  if (error) {
    console.error(error);
    return;
  }

  allMenuItems = data.map(item => ({
    id: item.id,
    name: item.name,
    img: item.image_url || 'https://via.placeholder.com/400x300?text=Food+Image',
    desc: item.description || '',
    category: item.menu_categories?.name || 'uncategorized',
    type: item.food_type || 'veg',
    rating: item.rating || 4.5,
    reviews: item.reviews || 0,
    price: item.discounted_price || item.price,
    status: 'active'
  }));

  menuItems = allMenuItems;

  renderMenu();
}
  function renderMenu(){ 
    
  // Build HTML for each item
    
  const menuContainer = document.getElementById('menuGrid');
  menuContainer.innerHTML = menuItems.map(item => `
    <div class="food-card">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description || ''}</p>
      <span class="price">₹${item.discounted_price || item.price}</span>
      <button onclick="addToCart('${item.id}', '${item.name}')">
        Add to Cart
      </button>
    </div>
  `).join('');
  }


// ===================== MENU RENDER =====================
let currentFilter = 'all';
function renderMenu(cat){

  const menuContainer =
    document.getElementById('menuGrid');

  if(!menuContainer){
    console.error('menuGrid not found');
    return;
  }

  menuContainer.innerHTML =
    menuItems.map(item => `
      <div class="food-card">
        <div class="food-card-img">
          <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy">
          <div class="veg-badge ${item.type}"></div>
          <div class="food-tag">
            ${capitalize(item.category)}
          </div>
        </div>

        <div class="food-card-body">

          <div style="
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            margin-bottom:.3rem;
          ">
            <div class="food-name">
              ${item.name}
            </div>

            <div class="food-rating">
              ${item.rating}
              <span style="color:var(--gray);">
                (${item.reviews})
              </span>
            </div>

          </div>

          <div class="food-desc">
            ${item.desc}
          </div>

          <div class="food-footer">

            <div class="food-price">
              ₹${item.price}
            </div>

            <button
              class="add-btn"
              onclick="addToCart('${item.id}')"
            >
              + Add
            </button>

          </div>

        </div>

      </div>
    `).join('');

  if(typeof lucide !== 'undefined'){
    lucide.createIcons();
  }
}
function renderSpecials(){
  const grid = document.getElementById('specialGrid');
  grid.innerHTML = specials.map((s,i)=>`
    <div class="special-item reveal" style="transition-delay:${i*.1}s">
      <div class="special-img-wrap"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
      <div class="special-cuisine">${s.cuisine}</div>
      <div class="special-name">${s.name}</div>
      <div class="special-rating"><span class="stars-row"><span class="ico"><i data-lucide="star"></i></span><span class="ico"><i data-lucide="star"></i></span><span class="ico"><i data-lucide="star"></i></span><span class="ico"><i data-lucide="star"></i></span><span class="ico"><i data-lucide="star"></i></span></span> <span style="color:var(--gray);">(${s.reviews})</span></div>
      <div class="special-price">${inrHtml(s.price)}</div>
      <button class="buy-btn" onclick="addToCartByName('${s.name}')">Buy Now</button>
    </div>`).join('');
  observeReveal();
  if(typeof lucide!=='undefined')lucide.createIcons();
}
function filterMenu(cat, btn) {
  currentFilter = cat;
  document
    .querySelectorAll('.cat-tab')
    .forEach(t => t.classList.remove('active'));

  if(btn){
    btn.classList.add('active');
  }
  if(cat === 'all'){

    menuItems = allMenuItems;
  } else {
    menuItems = allMenuItems.filter(item =>
      item.category.toLowerCase() === cat.toLowerCase()
    );
  }
  const grid =
    document.getElementById('menuGrid');
  grid.style.opacity='0';
  grid.style.transform='translateY(20px)';

  setTimeout(() => {
    renderMenu();
    grid.style.transition='all .4s ease';
    grid.style.opacity='1';
    grid.style.transform='translateY(0)';
  }, 200);
  
}

// ===================== USER AUTH / PROFILE =====================
let currentUser = null;  // { phone, firstName, lastName, email, dob, addresses:[], myOrders:[] }
let isNewUser = false;

function openLogin(){
  resetLoginSteps();
  document.getElementById('loginModal').classList.add('open');
}
function closeLogin(){ document.getElementById('loginModal').classList.remove('open'); }

function resetLoginSteps(){

  ['ls-step1','ls-step2','ls-step3','ls-step4']
    .forEach(id => {
      const el = document.getElementById(id);
      if(el) el.classList.remove('active');
    });

  const step1 =
    document.getElementById('ls-step1');

  if(step1)
    step1.classList.add('active');

}

  // Check if existing user
  const existing = customersData.find(c=>c.phone.replace(/\s/g,'')===phone.replace(/\s/g,''));
  if(existing){
    // Returning user — log in directly
    const {
  data: { user }
} = await window.supabaseClient.auth.getUser();
    currentUser = {
      phone: existing.phone,
      firstName: existing.name.split(' ')[0],
      lastName: existing.name.split(' ').slice(1).join(' '),
      email: existing.email,
      dob:'',
      addresses:[{label:'Home',line:existing.address,area:'',pin:'400101',city:'Mumbai',isDefault:true}],
      myOrders: ordersData.filter(o=>o.customer===existing.name)
    };
    document.getElementById('welcomeMsg').textContent = `Welcome back, ${currentUser.firstName}!`;
    document.getElementById('ls-step2').classList.remove('active');
    document.getElementById('ls-step4').classList.add('active');
    finishLogin();
  } else {
    // New user — collect profile info
    isNewUser = true;
    document.getElementById('ls-step2').classList.remove('active');
    document.getElementById('ls-step3').classList.add('active');
  }
}
function completeRegistration(){
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const addrLine = document.getElementById('regAddrLine').value.trim();
  if(!first||!last){ showToast('Please enter your name', 'alert-triangle'); return; }
  if(!addrLine){ showToast('Please enter your delivery address', 'alert-triangle'); return; }
  const phone = '+91 '+document.getElementById('phoneInput').value;
  currentUser = {
    phone,
    firstName: first,
    lastName: last,
    email: document.getElementById('regEmail').value,
    dob: document.getElementById('regDob').value,
    addresses:[{label:'Home',line:addrLine,area:document.getElementById('regAddrArea').value,pin:document.getElementById('regAddrPin').value,city:'Mumbai',isDefault:true}],
    myOrders:[]
  };
  // Add to customersData
  const initials = (first[0]+(last[0]||'')).toUpperCase();
  const colors=['#FF6B00','#8B5CF6','#10B981','#3B82F6','#F59E0B','#EF4444','#EC4899','#14B8A6'];
  customersData.push({id:'C'+(customersData.length+1).toString().padStart(3,'0'),name:`${first} ${last}`,phone,email:currentUser.email,address:addrLine+(currentUser.addresses[0].area?' '+currentUser.addresses[0].area:''),orders:0,spent:0,lastOrder:'—',status:'active',joined:'Jun 2024',avatar:initials,color:colors[Math.floor(Math.random()*colors.length)]});
  document.getElementById('welcomeMsg').textContent = `Welcome, ${first}!`;
  document.getElementById('ls-step3').classList.remove('active');
  document.getElementById('ls-step4').classList.add('active');
  finishLogin();
}
function finishLogin(){
  updateNavForLogin();
}
function updateNavForLogin(){
  if(!currentUser) return;
  document.getElementById('guestLoginBtn').style.display='none';
  document.getElementById('userNavArea').style.display='flex';
  const initials=(currentUser.firstName[0]+(currentUser.lastName?currentUser.lastName[0]:'')).toUpperCase();
  document.getElementById('userAvatarBtn').textContent=initials;
  document.getElementById('ddName').textContent=`${currentUser.firstName} ${currentUser.lastName}`;
  document.getElementById('ddPhone').textContent=currentUser.phone;
}
function logoutUser(){
  currentUser=null;
  document.getElementById('guestLoginBtn').style.display='';
  document.getElementById('userNavArea').style.display='none';
  document.getElementById('userDropdown').classList.remove('open');
  showToast('Logged out successfully', 'log-out');
}
function toggleUserDropdown(){
  document.getElementById('userDropdown').classList.toggle('open');
}
document.addEventListener('click',e=>{
  const area=document.getElementById('userNavArea');
  if(area&&!area.contains(e.target)) document.getElementById('userDropdown').classList.remove('open');
});

// ===================== MY ACCOUNT MODAL =====================
function openAccount(tab){
  document.getElementById('userDropdown').classList.remove('open');
  if(!currentUser){ openLogin(); return; }
  populateAccountModal();
  document.getElementById('accountModal').classList.add('open');
  if(tab) switchAccTab(tab);
}
function closeAccount(){ document.getElementById('accountModal').classList.remove('open'); }

function switchAccTab(tab){
  ['profile','orders','addresses'].forEach(t=>{
    document.getElementById('acc-'+t).classList.toggle('active',t===tab);
    document.getElementById('an-'+t).classList.toggle('active',t===tab);
  });
  if(tab==='orders') renderMyOrders();
  if(tab==='addresses') renderMyAddresses();
}

function populateAccountModal(){
  if(!currentUser) return;
  const initials=(currentUser.firstName[0]+(currentUser.lastName?currentUser.lastName[0]:'')).toUpperCase();
  document.getElementById('accAvatarLarge').textContent=initials;
  document.getElementById('accFullName').textContent=`${currentUser.firstName} ${currentUser.lastName}`;
  document.getElementById('accPhone').textContent=currentUser.phone;
  document.getElementById('accEmail').textContent=currentUser.email||'No email added';
  document.getElementById('pfFirst').value=currentUser.firstName;
  document.getElementById('pfLast').value=currentUser.lastName;
  document.getElementById('pfEmail').value=currentUser.email||'';
  document.getElementById('pfDob').value=currentUser.dob||'';
  document.getElementById('pfPhone').value=currentUser.phone;
}
function saveProfile(){
  currentUser.firstName=document.getElementById('pfFirst').value.trim()||currentUser.firstName;
  currentUser.lastName=document.getElementById('pfLast').value.trim()||currentUser.lastName;
  currentUser.email=document.getElementById('pfEmail').value.trim();
  currentUser.dob=document.getElementById('pfDob').value;
  populateAccountModal();
  updateNavForLogin();
  showToast('Profile updated!', 'check-circle');
}

function renderMyOrders(){
  const el=document.getElementById('myOrdersList');
  const orders=currentUser.myOrders||[];
  if(!orders.length){el.innerHTML='<div style="text-align:center;padding:2rem;color:var(--gray);">No orders yet. Start ordering!</div>';return;}
  el.innerHTML=orders.map(o=>`
    <div class="my-order-card">
      <div class="moc-header"><div class="moc-id">${o.id}</div><span class="moc-status ${o.status}">${capitalize(o.status)}</span></div>
      <div class="moc-items">${o.items}</div>
      <div class="moc-footer"><div class="moc-amount">${inrHtml(o.amount)}</div><div class="moc-date">${o.time}, ${o.date}</div><button class="reorder-btn" onclick="reorderItems('${o.id}')">Reorder</button></div>
    </div>`).join('');
}
function reorderItems(id){
  const o=ordersData.find(o=>o.id===id);
  if(!o){showToast('Order not found', 'alert-triangle');return;}
  closeAccount();
  showToast('Items added to cart!', 'shopping-cart');
}

function renderMyAddresses(){
  const el=document.getElementById('myAddressList');
  const addrs=currentUser.addresses||[];
  if(!addrs.length){el.innerHTML='<div style="color:var(--gray);font-size:.85rem;margin-bottom:1rem;">No saved addresses yet.</div>';return;}
  el.innerHTML=addrs.map((a,i)=>`
    <div class="address-card">
      <div class="addr-icon">${a.label==='Home'?iconHtml('home'):a.label==='Work'?iconHtml('building-2'):iconHtml('map-pin')}</div>
      <div class="addr-info">
        <div class="addr-label">${a.label}${a.isDefault?' <span class="addr-default-badge">Default</span>':''}</div>
        <div class="addr-text">${a.line}${a.area?', '+a.area:''}, ${a.city} ${a.pin}</div>
        <div class="addr-actions">
          ${!a.isDefault?`<button class="addr-btn" onclick="setDefaultAddr(${i})">Set Default</button>`:''}
          <button class="addr-btn del" onclick="deleteAddr(${i})">Delete</button>
        </div>
      </div>
    </div>`).join('');
  if(typeof lucide!=='undefined')lucide.createIcons();
}
function setDefaultAddr(idx){
  currentUser.addresses.forEach((a,i)=>a.isDefault=(i===idx));
  renderMyAddresses();
  showToast('Default address updated!', 'map-pin');
}
function deleteAddr(idx){
  currentUser.addresses.splice(idx,1);
  renderMyAddresses();
  showToast('Address removed', 'trash-2');
}

// ===================== ADD ADDRESS =====================
function openAddAddress(){
  closeAccount();
  document.getElementById('addAddrModal').classList.add('open');
}
function closeAddAddress(){
  document.getElementById('addAddrModal').classList.remove('open');
  openAccount('addresses');
}
function saveNewAddress(){
  const line=document.getElementById('aLine').value.trim();
  if(!line){showToast('Please enter an address', 'alert-triangle');return;}
  const isDefault=document.getElementById('aDefault').checked;
  if(isDefault) currentUser.addresses.forEach(a=>a.isDefault=false);
  currentUser.addresses.push({
    label:document.getElementById('aLabel').value.trim()||'Other',
    line,
    area:document.getElementById('aArea').value.trim(),
    pin:document.getElementById('aPin').value.trim(),
    city:document.getElementById('aCity').value.trim()||'Mumbai',
    isDefault
  });
  document.getElementById('addAddrModal').classList.remove('open');
  openAccount('addresses');
  showToast('Address saved!', 'map-pin');
}

// ===================== CHECKOUT =====================
function openCheckout(){
  if(!cart.length){showToast('Cart is empty!', 'alert-triangle');return;}
  if(!currentUser){closeCart();openLogin();return;}
  populateCheckout();
  closeCart();
  document.getElementById('checkoutModal').classList.add('open');
}
function closeCheckout(){ document.getElementById('checkoutModal').classList.remove('open'); }

function populateCheckout(){
  // Address list
  const addrs=currentUser.addresses||[];
  const addrEl=document.getElementById('checkoutAddressList');
  if(!addrs.length){
    addrEl.innerHTML='<div style="color:var(--gray);font-size:.85rem;margin-bottom:.5rem;">No saved address. Add one first.</div>';
  } else {
    addrEl.innerHTML='<div class="address-select-list">'+addrs.map((a,i)=>`
      <label class="addr-select-card ${a.isDefault?'selected':''}">
        <input type="radio" name="delivAddr" value="${i}" ${a.isDefault?'checked':''} class="addr-select-radio" onchange="document.querySelectorAll('.addr-select-card').forEach(c=>c.classList.remove('selected'));this.closest('.addr-select-card').classList.add('selected')">
        <div>
          <div style="font-weight:800;font-size:.85rem;">${a.label}${a.isDefault?' <span style=\'font-size:.7rem;color:var(--orange);font-weight:700;\'>• Default</span>':''}</div>
          <div style="font-size:.8rem;color:var(--gray);">${a.line}${a.area?', '+a.area:''}, ${a.city}</div>
        </div>
      </label>`).join('')+'</div>';
  }
  // Order summary
  const total = cart.reduce((a,i)=>a+i.price*i.qty,0);
  const sumEl=document.getElementById('checkoutSummary');
  sumEl.innerHTML=cart.map(i=>`<div class="order-summary-item"><span>${i.name} × ${i.qty}</span><span>${inrHtml(i.price*i.qty)}</span></div>`).join('')+
    `<div class="order-summary-item" style="color:var(--a-green);"><span>Delivery</span><span>FREE</span></div>`+
    `<div class="order-summary-total"><span>Total</span><span style="color:var(--orange);">${inrHtml(total)}</span></div>`;
}

function placeOrder(){
  if(!currentUser?.addresses?.length){showToast('Please add a delivery address first', 'alert-triangle');return;}
  const total=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const newId='AK-'+(ordersData.length+1).toString().padStart(3,'0');
  const newOrder={id:newId,customer:`${currentUser.firstName} ${currentUser.lastName}`,phone:currentUser.phone,items:cart.map(i=>`${i.name} × ${i.qty}`).join(', '),amount:total,address:currentUser.addresses.find(a=>a.isDefault)?.line||currentUser.addresses[0].line,status:'pending',time:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true}),date:'Today'};
  ordersData.unshift(newOrder);
  currentUser.myOrders=(currentUser.myOrders||[]);
  currentUser.myOrders.unshift(newOrder);
  cart=[];updateCart();closeCheckout();
  showToast(`Order ${newId} placed successfully!`, 'check-circle');
}

// ===================== TRACK ORDER =====================
function trackOrder(){
  const val=document.getElementById('trackInput').value.trim();
  if(!val){showToast('Please enter an order ID', 'alert-triangle');return;}
  document.getElementById('trackOrderId').textContent=val;
  document.getElementById('trackResult').style.display='block';
}

// ===================== COPY CODE =====================
function copyCode(code){
  navigator.clipboard.writeText(code).catch(()=>{});
  showToast(`Code "${code}" copied!`, 'clipboard');
}

// ===================== TOAST =====================
function iconHtml(name){return `<span class=\"ico\"><i data-lucide=\"${name}\"></i></span>`;}
function showToast(msg,icon='check-circle'){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  const ti=document.getElementById('toastIcon');ti.innerHTML=iconHtml(icon);if(typeof lucide!=='undefined')lucide.createIcons();
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

// ===================== SCROLL & REVEAL =====================
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(nav) nav.classList.toggle('scrolled',window.scrollY>50);
});
function observeReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

// ===================== HELPERS =====================
function capitalize(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function inrText(amount){
  const n=Number(amount);
  const val=Number.isFinite(n)?n.toLocaleString('en-IN'):String(amount);
  return '\u20B9'+val;
}
function inrHtml(amount,opts={}){
  const prefix=opts.negative?'-':'';
  const n=Number(amount);
  const val=Number.isFinite(n)?n.toLocaleString('en-IN'):String(amount);
  return `<span class="inr">${prefix}<span class="inr-sym">\u20B9</span>${val}</span>`;
}

// ===================== INIT =====================
observeReveal();

if(typeof lucide!=='undefined'){
  lucide.createIcons();
}

loadMenuItems();
