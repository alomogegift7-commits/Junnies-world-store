  // ---- CONFIG ----
const WHATSAPP_NUMBER = "2348102385746"; // international format, no + or spaces

// ---- PRODUCT DATA ----
// To add a real photo: put the image file inside the "images" folder,
// then set "image" below to "images/yourfile.jpg". Leave it as null
// to keep the placeholder look until you have a photo ready.
const products = [
  { name: "Classic Wristwatch",       price: "₦15,000", category: "accessories", image: null },
  { name: "Gold Pendant Necklace",    price: "₦8,500",  category: "accessories", image: null },
  { name: "Men's Slim Fit Trousers",  price: "₦12,000", category: "clothes",     image: null },
  { name: "Graphic Print T-Shirt",    price: "₦7,000",  category: "clothes",     image: null },
  { name: "Wireless Earbuds",         price: "₦18,000", category: "gadgets",     image: null },
  { name: "Leather Handbag",          price: "₦20,000", category: "accessories", image: null }
];

// ---- RENDER PRODUCTS ----
const grid = document.getElementById("productGrid");

function renderProducts(filter) {
  grid.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const message = encodeURIComponent(`Hi, I'm interested in "${product.name}" (${product.price}) from Junnie's World.`);
    const card = document.createElement("div");
    card.className = "product-card";

    const imageHTML = product.image
      ? `<div class="product-image" style="background-image:url('${product.image}')"></div>`
      : `<div class="product-image placeholder"><span>${product.name.charAt(0)}</span></div>`;

    card.innerHTML = `
      ${imageHTML}
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <a class="order-btn" href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}" target="_blank" rel="noopener">Order via WhatsApp</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderProducts("all");

// ---- FILTER TABS ----
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.filter);
  });
});

// ---- MOBILE NAV TOGGLE ----
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// ---- FOOTER YEAR ----
document.getElementById("year").textContent = new Date().getFullYear();
