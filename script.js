const products = [
  {
    id: 1,
    name: "Mohun Bagan Home Jersey 2025",
    price: 1099,
    image: "assets/mohunbagan.jpg"
  },
  {
    id: 2,
    name: "East Bengal Away Jersey 2025",
    price: 1199,
    image: "assets/eastbengal.jpg"
  },
  {
    id: 3,
    name: "Mohamedon SC Retro Kit",
    price: 1999,
    image: "assets/peerless.jpg"
  },
  {
    id: 4,
    name: "Peerless SC Retro Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  {
    id: 5,
    name: " SC RetrPeerlesso Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  {
    id: 6,
    name: "Peerless SC Retro Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  {
    id: 7,
    name: "Manchester United Retro Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  {
    id: 8,
    name: "juventus Retro Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  {
    id: 9,
    name: "Barcelona Retro Kit",
    price: 1199,
    image: "assets/peerless.jpg"
  },
  
];

// Cart data
let cart = [];

// DOM elements
const container = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = document.getElementById("mobile-menu");

    // Open mobile menu
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    // Close mobile menu (via close button)
    menuClose.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });

    // Optional: Close menu when clicking outside
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add("hidden");
      }
    });
  });


  // Optional: Shadow on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });

// Render product cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = `bg-yellow-50 p-4 rounded-lg shadow hover:shadow-2xl transition transform hover:scale-105`;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded" />
    <h3 class="text-lg font-semibold mt-2">${product.name}</h3>
    <p class="text-green-800 font-bold ">₹${product.price}</p>
    <button onclick="addToCart(${product.id})" class="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition shadow-lg shadow-green-700/70">Add to Cart</button>
  `;
  container.appendChild(card);
});

// Add to cart
window.addToCart = function (id) {
  const item = products.find(p => p.id === id);
  if (item) {
    cart.push(item);
    cartCount.textContent = cart.length;
    updateCartUI();
  }
};

// Show cart
cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  updateCartUI();
});

// Close cart
closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// Update cart UI
function updateCartUI() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = "<li class='text-center py-2'>Cart is empty</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "flex justify-between items-center py-2";
      li.innerHTML = `
        <span>${item.name}</span>
        <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">✖</button>
      `;
      cartItems.appendChild(li);
    });
  }
}

// Remove from cart
window.removeFromCart = function (index) {
  cart.splice(index, 1);
  cartCount.textContent = cart.length;
  updateCartUI();
};


// Contact Form Submit Handler (frontend only)
const form = document.getElementById("contact-form");
  const formMsg = document.getElementById("form-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const contactForm = e.target;
// Basic validation
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    formMsg.classList.remove("hidden");
    contactForm.reset();
    setTimeout(() => {
      formMsg.classList.add("hidden");
    }, 3000);
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }

    // Close mobile menu on click
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});


// Typing Animation
const phrases = [
  "কলকাতার গর্ব",
  "Wear Your Pride",
  "50% Off on All Jerseys!",
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loopTyping() {
  const element = document.getElementById("typing-text");

  isEnd = false;
  element.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      element.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      element.innerHTML = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 1000 : isDeleting ? 60 : 100;
  setTimeout(loopTyping, speed);
}
loopTyping();

// Countdown Timer (5 mins)
function startCountdown(duration) {
  let timer = duration, hours, minutes, seconds;
  const timerElement = document.getElementById('timer');
  setInterval(() => {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = timer % 60;

    timerElement.textContent = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}
startCountdown(300);// 5 minutes in seconds

