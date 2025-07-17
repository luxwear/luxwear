
let cart = [];

function viewProduct(color) {
  document.getElementById('products').style.display = 'none';
  document.getElementById('product-detail').style.display = 'block';
  document.getElementById('selected-color').innerText = 'Replay Jeans - Färg: ' + color;
  document.getElementById('product-detail').dataset.color = color;
}

function addToCart() {
  const color = document.getElementById('product-detail').dataset.color;
  const size = document.getElementById('size').value;
  cart.push({ color, size });
  document.getElementById('cart-count').innerText = cart.length;
  alert('Tillagd i varukorg!');
  document.getElementById('product-detail').style.display = 'none';
  document.getElementById('products').style.display = 'block';
}

function checkout() {
  document.getElementById('cart').style.display = 'none';
  document.getElementById('checkout').style.display = 'block';
  const checkoutList = document.getElementById('checkout-items');
  checkoutList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Replay Jeans (${item.color}, Storlek: ${item.size})`;
    checkoutList.appendChild(li);
  });
}

document.querySelector('a[href="#cart"]').addEventListener('click', () => {
  document.getElementById('cart').style.display = 'block';
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Replay Jeans (${item.color}, Storlek: ${item.size})`;
    list.appendChild(li);
  });
});
