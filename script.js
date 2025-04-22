document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('homeBtn');
  const backBtn = document.getElementById('backBtn');

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      alert('Welcome to Our Modern Interface!');
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});