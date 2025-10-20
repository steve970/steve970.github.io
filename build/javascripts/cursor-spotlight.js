// Brittany Chiang style cursor spotlight effect
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  
  document.addEventListener('mousemove', function(e) {
    body.style.setProperty('--x', e.clientX + 'px');
    body.style.setProperty('--y', e.clientY + 'px');
  });
});