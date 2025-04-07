let products = [];
let cart = [];

window.onload = () => {
  fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      products = data;
      displayProducts(products);
    });
};

function displayProducts(items) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  items.forEach(product => {
    list.innerHTML += `
      <div class="product">
        <img src="https://source.unsplash.com/200x150/?${product.name}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>
    `;
  });
}
function hideCart() {
    document.getElementById("cart").style.display = "none";
  }
  function showCart() {
    document.getElementById("cart").style.display = "block";
  }
    
function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌ Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.onclick = () => removeFromCart(index);
  
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
  }
  
function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.style.display = cartSection.style.display === "block" ? "none" : "block";
}

function checkout() {
  alert("Order placed! Total: ₹" + document.getElementById("cart-total").textContent);
  cart = [];
  updateCart();
  document.getElementById("cart-count").textContent = 0;
}

function removeFromCart(index) {
    cart.splice(index, 1); // remove 1 item at the given index
    updateCart();
  }
  
