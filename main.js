// main.js

document.addEventListener('DOMContentLoaded', () => {
  // ปิด popup
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-popup');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  // โหลดแบนเนอร์จาก Firebase Storage
  const bannerImg = document.getElementById('main-banner');

  if (typeof firebase !== 'undefined' && firebase.storage) {
    const storage = firebase.storage();
    const bannerRef = storage.ref('banners/default_banner.jpg');

    bannerRef.getDownloadURL()
      .then(url => {
        if (bannerImg) {
          bannerImg.src = url;
        }
      })
      .catch(error => {
        console.error('ไม่สามารถโหลดแบนเนอร์:', error);
      });
  }

  // ฟิลเตอร์หมวดหมู่สินค้า (จำลอง)
  window.filterCategory = (category) => {
    alert(`กรองหมวดหมู่: ${category}`);
    // ภายหลังเชื่อม Firebase ดึงสินค้าเฉพาะหมวดมาแสดงได้
  }
});
