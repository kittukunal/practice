const products = [
    { id: 1, name: "Laptop", price: "$800", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Smartphone", price: "$500", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: "$100", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Smartwatch", price: "$200", img: "https://via.placeholder.com/200" },
    { id: 5, name: "Camera", price: "$450", img: "https://via.placeholder.com/200" },
    { id: 6, name: "Gaming Console", price: "$600", img: "https://via.placeholder.com/200" },
    { id: 7, name: "Keyboard", price: "$80", img: "https://via.placeholder.com/200" },
    { id: 8, name: "Mouse", price: "$50", img: "https://via.placeholder.com/200" },
    { id: 9, name: "Monitor", price: "$300", img: "https://via.placeholder.com/200" },
    { id: 10, name: "Tablet", price: "$400", img: "https://via.placeholder.com/200" }
];

let cartCount = 0;

// Function to load products dynamically
function loadProducts() {
    const productList = document.getElementById("productList");
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        
        productList.appendChild(productCard);
    });
}

// Function to update cart count
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
}

// Load products on page load
window.onload = loadProducts;
