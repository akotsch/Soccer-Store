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
    description: "This is Soccer Shoe #1."
  },
  {
    id: 2,
    name: "Soccer Shoe #2",
    image: "https://via.placeholder.com/200",
    description: "This is Soccer Shoe #2."
  },
  {
    id: 3,
    name: "Soccer Shoe #3",
    image: "https://via.placeholder.com/200",
    description: "This is Soccer Shoe #3."
  }
];

// Render products if on products.html
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
    div.onclick = () => alert(`You clicked on ${product.name}`); // later replace with product detail page
    productsContainer.appendChild(div);
  });
}
