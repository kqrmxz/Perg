const carsData = [
    {
        id: 1,
        name: 'Porsche 911 Turbo S',
        desc: 'The benchmark of performance dynamics and aesthetic aggression. Unmatched launch control with a 0-100 km/h in 2.7s.',
        price: 245000,
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1578394164332-ea22596f7683?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        name: 'Ferrari SF90 Stradale',
        desc: 'Plug-in hybrid electric vehicle, an uncompromising prancing horse that shatters track records.',
        price: 520000,
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1610531527324-47b87e3a79a8?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        name: 'Lamborghini Revuelto',
        desc: 'The first V12 hybrid plug-in HPEV perfectly combining power with a futuristic aerospace silhouette.',
        price: 605000,
        image: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1622111267679-4b1e321b4ab9?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        name: 'McLaren 750S',
        desc: 'A benchmark redefined. Lighter, more powerful, and with an astonishing power-to-weight ratio.',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1658418669010-c82e48b2dc08?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        name: 'Chevrolet Corvette Z06',
        desc: 'A naturally aspirated flat-plane V8 track weapon designed to punch far above its weight class.',
        price: 135000,
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1659909583026-0bfd28e9bdce?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        name: 'Aston Martin Valhalla',
        desc: 'Mid-engine hybrid supercar born from F1 aerodynamics, producing blistering performance.',
        price: 800000,
        image: 'https://images.unsplash.com/photo-1530906358829-e84b2769270f?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1701639917695-b6c50a1cbf1d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 7,
        name: 'Porsche Taycan Turbo GT',
        desc: 'The peak of electric performance, shattering EV laps and providing neck-snapping torque.',
        price: 235000,
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1701639917744-893ed649397b?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 8,
        name: 'Ferrari Roma',
        desc: 'Elegant, refined, yet harboring a potent twin-turbo V8. It represents "La Nuova Dolce Vita".',
        price: 247000,
        image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1746393464038-b2776702d275?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 9,
        name: 'Maserati MC20',
        desc: 'Super sports car that pushes the boundaries of time. Race audaciously into a brave new future.',
        price: 239000,
        image: 'https://images.unsplash.com/photo-1566024164372-0281f1133aa6?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1758972687819-88b4219edad6?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 10,
        name: 'Lamborghini Urus Performante',
        desc: 'The Super SUV benchmark. Unlocked performance levels meeting everyday driving demands.',
        price: 260000,
        image: 'https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?auto=format&fit=crop&w=600&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1759784082315-1794ed4df1f8?auto=format&fit=crop&w=600&q=80'
    }
];

// Cart State
let cart = [];

// DOM Elements
const carGrid = document.getElementById('car-grid');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');

// Modal Elements
const modal = document.getElementById('customizer-modal');
const closeModal = document.getElementById('close-modal');
const modalCarName = document.getElementById('modal-car-name');
const modalCarImg = document.getElementById('modal-car-img');
const modalBasePrice = document.getElementById('modal-base-price');
const modalTotalPrice = document.getElementById('modal-total-price');
const colorOptions = document.querySelectorAll('.color-btn');
const interiorSelect = document.getElementById('interior-select');
const rimsSelect = document.getElementById('rims-select');
const ledSelect = document.getElementById('led-select');
const ledGlowEffect = document.getElementById('led-glow-effect');
const addCustomBtn = document.getElementById('add-custom-btn');
const interiorBadge = document.getElementById('badge-interior');
const rimsBadge = document.getElementById('badge-rims');
const viewExtBtn = document.getElementById('view-exterior-btn');
const viewIntBtn = document.getElementById('view-interior-btn');

let currentCustomizingCar = null;
let customOptions = { colorCost: 0, intCost: 0, rimCost: 0, ledCost: 0 };
let isInteriorView = false;

// Formatting Currency
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
};

// Initialize Catalog
const initCatalog = () => {
    carGrid.innerHTML = '';
    carsData.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-img-container">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="car-desc">${car.desc}</p>
                <div class="car-price">${formatPrice(car.price)}</div>
                <div class="car-actions">
                    <button class="btn btn-secondary" onclick="openCustomizer(${car.id})">Customize</button>
                    <button class="btn btn-primary" onclick="addToCart(${car.id})">Add to Cart</button>
                </div>
            </div>
        `;
        carGrid.appendChild(carCard);
    });
};

// Cart Logic
const addToCart = (carId, customConfig = null) => {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    let finalPrice = car.price;
    let name = car.name;

    if (customConfig) {
        finalPrice = customConfig.totalPrice;
        name = `${car.name} (Custom Built)`;
    }

    const cartItem = {
        cartId: Date.now() + Math.random(),
        carId: car.id,
        name: name,
        price: finalPrice
    };

    cart.push(cartItem);
    updateCartUI();
    
    if(customConfig) {
        closeCustomizer();
    }

    // Small feedback
    if (customConfig) {
        const btn = document.getElementById('add-custom-btn');
        if (btn) {
            const originalText = btn.innerText;
            btn.innerText = 'Added to Cart!';
            btn.style.background = '#00a300';
            setTimeout(() => { 
                btn.innerText = originalText; 
                btn.style.background = '';
            }, 1500);
        }
    }
};

const removeFromCart = (cartId) => {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
};

const updateCartUI = () => {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart" style="text-align:center;color:#aaa;">Cart is empty</p>';
        cartTotalPrice.innerText = formatPrice(0);
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                </div>
                <button class="cart-item-remove" title="Remove" onclick="removeFromCart(${item.cartId})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        total += item.price;
    });

    cartItems.innerHTML = html;
    cartTotalPrice.innerText = formatPrice(total);
};

// Customizer Logic
const openCustomizer = (carId) => {
    currentCustomizingCar = carsData.find(c => c.id === carId);
    if (!currentCustomizingCar) return;

    // Reset options
    customOptions = { colorCost: 0, intCost: 0, rimCost: 0, ledCost: 0 };
    colorOptions.forEach(btn => btn.classList.remove('active'));
    colorOptions[0].classList.add('active'); // default color
    modalCarImg.style.filter = 'none';

    interiorSelect.value = "0";
    rimsSelect.value = "0";
    
    // Reset badges
    if(interiorBadge) { interiorBadge.innerText = 'Premium Leather'; interiorBadge.classList.remove('show'); }
    if(rimsBadge) { rimsBadge.innerText = '20" Aero Chrome'; rimsBadge.classList.remove('show'); }
    ledSelect.value = "0";
    ledGlowEffect.style.boxShadow = 'none';
    ledGlowEffect.style.background = 'transparent';

    // Reset view toggle
    isInteriorView = false;
    viewExtBtn.classList.add('active');
    viewIntBtn.classList.remove('active');

    // Set UI
    modalCarName.innerText = `Customize: ${currentCustomizingCar.name}`;
    modalCarImg.src = currentCustomizingCar.image;
    modalBasePrice.innerText = `Base Price: ${formatPrice(currentCustomizingCar.price)}`;
    updateModalPrice();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
};

const closeCustomizer = () => {
    modal.classList.remove('active');
    currentCustomizingCar = null;
    document.body.style.overflow = '';
};

closeModal.addEventListener('click', closeCustomizer);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeCustomizer();
    }
});

const updateModalPrice = () => {
    if (!currentCustomizingCar) return;
    const total = currentCustomizingCar.price + customOptions.colorCost + customOptions.intCost + customOptions.rimCost + customOptions.ledCost;
    modalTotalPrice.innerText = `Total Price: ${formatPrice(total)}`;
};

// Visual feedback logic
const showBadge = (badge, text) => {
    if (!badge) return;
    badge.innerText = text;
    badge.classList.remove('show');
    void badge.offsetWidth; // flush CSS to restart animation
    badge.classList.add('show');
};

// View Toggle Listeners
const updateCarImage = () => {
    if(!currentCustomizingCar) return;
    if (isInteriorView) {
        modalCarImg.src = currentCustomizingCar.interiorImage || currentCustomizingCar.image;
        if (ledGlowEffect) ledGlowEffect.style.display = 'none'; // hide underglow in interior view
    } else {
        modalCarImg.src = currentCustomizingCar.image;
        if (ledGlowEffect) ledGlowEffect.style.display = 'block';
    }
};

viewExtBtn.addEventListener('click', () => {
    if (!isInteriorView) return;
    isInteriorView = false;
    viewExtBtn.classList.add('active');
    viewIntBtn.classList.remove('active');
    updateCarImage();
});

viewIntBtn.addEventListener('click', () => {
    if (isInteriorView) return;
    isInteriorView = true;
    viewIntBtn.classList.add('active');
    viewExtBtn.classList.remove('active');
    updateCarImage();
});

// Listeners for custom options
colorOptions.forEach(btn => {
    btn.addEventListener('click', (e) => {
        colorOptions.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const color = e.target.dataset.color;
        customOptions.colorCost = (color === 'default') ? 0 : 5000;
        
        // CSS Filter trick for color
        if (color === 'default') modalCarImg.style.filter = 'none';
        else if (color === 'wine-red') modalCarImg.style.filter = 'hue-rotate(330deg) saturate(2) brightness(0.8)';
        else if (color === 'dark-purple') modalCarImg.style.filter = 'hue-rotate(270deg) saturate(1.5) brightness(0.7)';
        else if (color === 'future-white') modalCarImg.style.filter = 'grayscale(100%) brightness(1.5) contrast(1.2)';
        else if (color === 'neon-blue') modalCarImg.style.filter = 'hue-rotate(200deg) saturate(2) brightness(1.1)';

        updateModalPrice();
    });
});

interiorSelect.addEventListener('change', (e) => {
    customOptions.intCost = parseInt(e.target.value);
    const text = e.target.options[e.target.selectedIndex].text.split('(+')[0].trim();
    showBadge(interiorBadge, text);
    updateModalPrice();
});

rimsSelect.addEventListener('change', (e) => {
    customOptions.rimCost = parseInt(e.target.value);
    const text = e.target.options[e.target.selectedIndex].text.split('(+')[0].trim();
    showBadge(rimsBadge, text);
    updateModalPrice();
});

ledSelect.addEventListener('change', (e) => {
    customOptions.ledCost = parseInt(e.target.value);
    
    // UI update for LED preview
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (customOptions.ledCost > 0) {
        const color = selectedOption.dataset.color;
        ledGlowEffect.style.background = color;
        ledGlowEffect.style.boxShadow = `0 10px 40px 20px ${color}`;
    } else {
        ledGlowEffect.style.background = 'transparent';
        ledGlowEffect.style.boxShadow = 'none';
    }
    
    updateModalPrice();
});

addCustomBtn.addEventListener('click', (e) => {
    if (!currentCustomizingCar) return;
    const total = currentCustomizingCar.price + customOptions.colorCost + customOptions.intCost + customOptions.rimCost + customOptions.ledCost;
    
    addToCart(currentCustomizingCar.id, { totalPrice: total });
});

// Navigation & Checkout Logic
const heroSection = document.getElementById('home');
const catalogSection = document.getElementById('catalog');
const checkoutSection = document.getElementById('checkout-section');
const backToShopBtn = document.getElementById('back-to-shop-btn');
const checkoutSummaryItems = document.getElementById('checkout-summary-items');
const checkoutSummaryPrice = document.getElementById('checkout-summary-price');
const checkoutForm = document.getElementById('checkout-form');
const successModal = document.getElementById('success-modal');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');
const cartDropdown = document.getElementById('cart-dropdown');

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Temporarily hide cart dropdown during transition
    cartDropdown.style.opacity = '0';
    cartDropdown.style.visibility = 'hidden';
    setTimeout(() => {
        cartDropdown.style.opacity = '';
        cartDropdown.style.visibility = '';
    }, 500);

    // Populate checkout summary
    let html = '';
    let total = 0;
    cart.forEach(item => {
        html += `
            <div class="checkout-summary-item">
                <div class="checkout-summary-item-name">${item.name}</div>
                <div class="checkout-summary-item-price">${formatPrice(item.price)}</div>
            </div>
        `;
        total += item.price;
    });
    checkoutSummaryItems.innerHTML = html;
    checkoutSummaryPrice.innerText = formatPrice(total);

    // Navigate to checkout
    heroSection.style.display = 'none';
    catalogSection.style.display = 'none';
    checkoutSection.style.display = 'block';
    window.scrollTo(0, 0);
});

backToShopBtn.addEventListener('click', () => {
    checkoutSection.style.display = 'none';
    heroSection.style.display = 'flex';
    catalogSection.style.display = 'block';
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    // Show success modal
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

continueShoppingBtn.addEventListener('click', () => {
    // Clear cart and reset
    cart = [];
    updateCartUI();
    successModal.classList.remove('active');
    document.body.style.overflow = '';
    checkoutForm.reset();
    
    // Navigate back to shop
    checkoutSection.style.display = 'none';
    heroSection.style.display = 'flex';
    catalogSection.style.display = 'block';
    window.scrollTo(0, 0);
});

window.removeFromCart = removeFromCart;
window.addToCart = addToCart;
window.openCustomizer = openCustomizer;

// Init
initCatalog();
