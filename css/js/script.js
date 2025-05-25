// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.getElementById('menuList');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

// Line Chat Button
document.querySelector('.line-chat').addEventListener('click', function() {
  alert('กำลังเชื่อมต่อกับ LINE Official Account...');
  // ใส่ API LINE ที่นี่
});
