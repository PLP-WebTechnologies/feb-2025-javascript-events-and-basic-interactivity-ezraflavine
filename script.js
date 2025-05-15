// Button Click - Change Color =====
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  // Toggle between two background colors
  colorBtn.style.backgroundColor =
    colorBtn.style.backgroundColor === 'orange' ? '#ee9b00' : 'orange';
});

// Secret Button double click & long press =====
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('Secret double-click activated!');
});

// Long press detection
let pressTimer;
secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press secret unlocked!');
  }, 1500);
});
secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
secretBtn.addEventListener('mouseleave', () => clearTimeout(pressTimer));

// Hover handled by CSS but we detect focus for accessibility =====
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('focus', () => {
  hoverBox.style.backgroundColor = '#005f73';
  hoverBox.style.color = 'white';
});
hoverBox.addEventListener('blur', () => {
  hoverBox.style.backgroundColor = '#94d2bd';
  hoverBox.style.color = 'black';
});

//  Keypress Detection =====
const keyPressOutput = document.getElementById('keyPressOutput');
window.addEventListener('keydown', (e) => {
  keyPressOutput.textContent = `You pressed: ${e.key}`;
});

//  Image Gallery/Slideshow =====
const images = document.querySelectorAll('#gallery img');
let currentImageIndex = 0;

const showImage = (index) => {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
};

document.getElementById('prevBtn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

//  Tabs =====
const tabButtons = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Hide all tab contents
    tabContents.forEach(content => content.style.display = 'none');
    
    // Remove active class from all buttons
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show content linked to clicked tab
    const target = btn.getAttribute('data-target');  // assuming you have this attribute on buttons
    document.querySelector(`#${target}`).style.display = 'block';
    
    // Add active class to clicked button
    btn.classList.add('active');
  });
});
