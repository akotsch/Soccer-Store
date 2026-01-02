// ====== NAV BUTTONS ======
function goToProducts() {
  window.location.href = "products.html";
}

// ====== DYNAMIC PRODUCTS ======
const productsData = [
  {
    id: 1,
    name: "Soccer Shoe #1",
    image: "https://via.placeholder.com/200",
    description: "High quality cleats for any level player.",
    price: "$49.99",
    sizes: ["6","7","8","9","10","11"],
    affiliate_link: "https://affiliate-link.com/product1"
  },
  {
    id: 2,
    name: "Soccer Shoe #2",
    image: "https://via.placeholder.com/200",
    description: "Pro soccer shoe for competitive play.",
    price: "$59.99",
    sizes: ["6","7","8","9","10","11"],
    affiliate_link: "https://affiliate-link.com/product2"
  },
  {
    id: 3,
    name: "Soccer Shoe #3",
    image: "https://via.placeholder.com/200",
    description: "Lightweight cleats for speed and control.",
    price: "$69.99",
    sizes: ["6","7","8","9","10","11"],
    affiliate_link: "https://affiliate-link.com/product3"
  }
];

// ===== Render products on products.html =====
const productsContainer = document.getElementById("products");
if (productsContainer) {
  productsData.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-item");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;
    div.onclick = () => {
      window.location.href = `product.html?id=${product.id}`;
    };
    productsContainer.appendChild(div);
  });
}

// ===== Render single product on product.html =====
const productDetailContainer = document.getElementById("product-detail");
if (productDetailContainer) {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = productsData.find(p => p.id === productId);

  if (product) {
    productDetailContainer.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="price">${product.price}</p>
        <p>${product.description}</p>
        <label for="size">Select Size:</label>
        <select id="size">
          ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
        </select>
        <a href="${product.affiliate_link}" target="_blank" class="buy-btn">Buy Now</a>
      </div>
    `;
  } else {
    productDetailContainer.innerHTML = "<p>Product not found.</p>";
  }
}
