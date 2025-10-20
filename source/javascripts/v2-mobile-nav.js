// V2 Mobile Navigation - Clean Back to Top Solution
document.addEventListener('DOMContentLoaded', function() {
  
  // Only run on mobile devices
  function isMobile() {
    return window.innerWidth <= 1024;
  }
  
  if (!isMobile()) return;
  
  // Create back to top button
  function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    
    // Add to page
    document.body.appendChild(backToTop);
    
    return backToTop;
  }
  
  // Create the back to top button
  const backToTop = createBackToTop();
  
  // Back to top functionality
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Show/hide back to top button based on scroll position
  const leftColumn = document.querySelector('.left-column');
  
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const leftColumnBottom = leftColumn ? leftColumn.offsetTop + leftColumn.offsetHeight : 600;
    
    // Show back to top button when scrolled past the left column (main nav area)
    if (scrollTop > leftColumnBottom - 100) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  
  // Throttled scroll handler for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 10);
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      // Hide back to top button on desktop
      backToTop.classList.remove('visible');
    }
  });
  
  console.log('✅ V2 Clean Back to Top loaded');
});