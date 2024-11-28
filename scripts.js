let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const cartPageElement = document.getElementById('cart-page');
const menuSection = document.getElementById('menu');

// Show item details in the modal and add to cart functionality
function showItemDetails(name, description, price) {
    const itemDetailsModal = document.getElementById('item-details');
    document.getElementById('item-name').textContent = name;
    document.getElementById('item-description').textContent = description;
    document.getElementById('item-price').textContent = price;

    // Enable the Add to Cart button
    const addToCartButton = document.getElementById('add-to-cart-button');
    addToCartButton.style.display = 'block';
    addToCartButton.onclick = function() {
        addToCart(name, description, price);
        itemDetailsModal.style.display = 'none'; // Close modal after adding
    };

    itemDetailsModal.style.display = 'block'; // Show the modal
}

// Close the item details modal
function closeItemDetails() {
    document.getElementById('item-details').style.display = 'none';
}

// Add item to cart
function addToCart(name, description, price) {
    const item = { name, description, price };
    cart.push(item);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    // Update the cart count
    cartCountElement.textContent = cart.length;

    // Update the cart page
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<h4>${item.name}</h4><p>${item.description}</p><p>${item.price}</p>`;
        cartItemsElement.appendChild(itemDiv);
        totalPrice += parseFloat(item.price.replace('$', ''));
    });
    cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// View Cart
document.getElementById('view-cart').onclick = function() {
    menuSection.style.display = 'none';
    cartPageElement.style.display = 'block';
};

// Go back to menu
function goBackToMenu() {
    cartPageElement.style.display = 'none';
    menuSection.style.display = 'block';
}

// Checkout (just a simple alert for now)
document.getElementById('checkout-button').onclick = function() {
    alert('Proceeding to checkout');
    cart = []; // Empty the cart after checkout
    updateCartDisplay();
};

// Function to add item to cart directly from modal
function addToCartFromModal() {
    const name = document.getElementById('item-name').textContent;
    const description = document.getElementById('item-description').textContent;
    const price = document.getElementById('item-price').textContent;

    addToCart(name, description, price);
}
