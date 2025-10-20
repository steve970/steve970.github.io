// V1 Archive - REWRITTEN Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {

  let mobileMenuOpen = false;
  const mobileNav = document.querySelector('.js');
  const hamburger = document.getElementById('nav-icon3');
  const hamburgerContainer = document.getElementById('menuThreeLine');
  
  // Simple mobile/desktop detection
  function isMobile() {
    return window.innerWidth < 1025;
  }
  
  // Initialize navigation
  function initNavigation() {
    if (isMobile()) {
      // Mobile setup
      if (mobileNav) {
        mobileNav.style.display = 'none'; // Start hidden
        mobileNav.style.position = 'absolute';
        mobileNav.style.top = '100%';
        mobileNav.style.left = '0';
        mobileNav.style.width = '100%';
        mobileNav.style.marginLeft = '0';
        mobileNav.style.marginRight = '0';
        mobileNav.style.backgroundColor = '#2C423F';
        mobileNav.style.background = '#2C423F';
        mobileNav.style.border = 'none';
        
        // Force background on all child elements and parent
        const parentCol = mobileNav.parentElement;
        if (parentCol) {
          parentCol.style.backgroundColor = 'transparent';
        }
        
        const navItems = mobileNav.querySelectorAll('*');
        navItems.forEach(item => {
          if (item.tagName !== 'P') {
            item.style.backgroundColor = '#2C423F';
            item.style.background = '#2C423F';
          }
        });
        mobileNav.style.zIndex = '1000';
        mobileNav.style.flexDirection = 'column';
        mobileNav.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      }
      if (hamburgerContainer) hamburgerContainer.style.display = 'block';
      mobileMenuOpen = false;
    } else {
      // Desktop setup
      if (mobileNav) {
        mobileNav.style.display = 'flex';
        mobileNav.style.position = 'static';
        mobileNav.style.flexDirection = 'row';
        mobileNav.style.boxShadow = 'none';
        mobileNav.style.width = 'auto';
      }
      if (hamburgerContainer) hamburgerContainer.style.display = 'none';
    }
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    console.log('Toggle mobile menu called, current state:', mobileMenuOpen);
    
    if (!isMobile() || !mobileNav) return;
    
    if (mobileMenuOpen) {
      // Close menu
      mobileNav.style.display = 'none';
      if (hamburger) hamburger.classList.remove('open');
      mobileMenuOpen = false;
      console.log('Menu closed');
    } else {
      // Open menu
      mobileNav.style.display = 'flex';
      
      // Get the menu's current position relative to viewport
      const rect = mobileNav.getBoundingClientRect();
      const viewportLeft = rect.left;
      
      console.log('Menu position from left edge:', viewportLeft);
      
      // Position for full screen width
      mobileNav.style.position = 'absolute';
      mobileNav.style.width = '100vw';
      mobileNav.style.top = '100%';
      mobileNav.style.marginLeft = '0';
      mobileNav.style.marginRight = '0';
      
      // Use transform to shift it to the left edge
      if (viewportLeft > 0) {
        mobileNav.style.left = '0';
        mobileNav.style.transform = `translateX(-${viewportLeft}px)`;
        console.log('Using transform approach, shifting left by:', viewportLeft);
      } else {
        mobileNav.style.left = '0';
        mobileNav.style.transform = 'translateX(-2rem)'; // Fallback
        console.log('Using fallback transform');
      }
      
      // FORCE BACKGROUND COLOR WHEN OPENING
      mobileNav.style.backgroundColor = '#2C423F';
      mobileNav.style.background = '#2C423F';
      mobileNav.style.backgroundImage = 'none';
      
      // Force on all children
      const allElements = mobileNav.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.tagName !== 'P') {
          el.style.backgroundColor = '#2C423F';
          el.style.background = '#2C423F';
        }
      });
      
      if (hamburger) hamburger.classList.add('open');
      mobileMenuOpen = true;
      console.log('Menu opened');
    }
  }
  
  // Initialize on load
  initNavigation();
  
  // Handle window resize
  window.addEventListener('resize', function() {
    initNavigation();
  });
  
  // Hamburger click handler
  if (hamburgerContainer) {
    hamburgerContainer.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Hamburger clicked!');
      toggleMobileMenu();
    });
  }

  // Smooth scroll function that replicates jQuery animate
  function smoothScrollTo(targetSelector, duration = 1000) {
    console.log('V1 Debug: smoothScrollTo called with:', targetSelector);
    const target = document.querySelector(targetSelector);
    console.log('V1 Debug: target element:', target);
    
    if (!target) {
      console.log('V1 Debug: Target not found for selector:', targetSelector);
      return;
    }
    
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    console.log('V1 Debug: Scrolling from', startPosition, 'to', targetPosition, 'distance:', distance);
    
    // Check if page can scroll
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log('V1 Debug: Max scroll available:', maxScroll);
    
    // Try multiple scroll methods
    console.log('V1 Debug: Attempting scroll...');
    
    // Method 1: Modern scrollIntoView (most reliable)
    try {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      console.log('V1 Debug: scrollIntoView called successfully');
      return;
    } catch (e) {
      console.log('V1 Debug: scrollIntoView failed:', e);
    }
    
    // Method 2: Direct window.scrollTo with smooth behavior
    try {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      console.log('V1 Debug: window.scrollTo with smooth behavior called');
      return;
    } catch (e) {
      console.log('V1 Debug: smooth scrollTo failed:', e);
    }
    
    // Method 3: Instant scroll as fallback
    console.log('V1 Debug: Using instant scroll fallback');
    window.scrollTo(0, targetPosition);
    
    // Method 4: Custom animation as last resort
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      console.log('V1 Debug: Animation frame - scrolling to:', run);
      window.scrollTo(0, run);
      document.documentElement.scrollTop = run;
      document.body.scrollTop = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Old handlers removed - using new system above

  // V1 ARROW BUTTONS - These are the ones you want working!
  
  // Debug: Check if elements exist
  console.log('V1 Debug: Looking for arrow elements...');
  console.log('anchorArrow:', document.getElementById('anchorArrow'));
  console.log('anchorArrow1:', document.getElementById('anchorArrow1'));
  console.log('anchorArrow2:', document.getElementById('anchorArrow2'));
  console.log('anchorArrow3:', document.getElementById('anchorArrow3'));
  
  // Also check for anchor links inside arrows
  console.log('V1 Debug: Looking for anchor links...');
  const anchorLinks = document.querySelectorAll('.anchorLink');
  console.log('V1 Debug: Found', anchorLinks.length, 'anchor links');
  
  // Anchor Arrow - scroll to about (first arrow)
  const anchorArrow = document.getElementById('anchorArrow');
  if (anchorArrow) {
    console.log('V1 Debug: Adding click listener to anchorArrow');
    anchorArrow.addEventListener('click', function(e) {
      console.log('V1 Debug: anchorArrow clicked!');
      e.preventDefault();
      smoothScrollTo('#aboutAnchor');
      return false;
    });
  } else {
    console.log('V1 Debug: anchorArrow not found!');
  }

  // Anchor Arrow 1 - scroll to work/resume (second arrow)
  const anchorArrow1 = document.getElementById('anchorArrow1');
  if (anchorArrow1) {
    console.log('V1 Debug: Adding click listener to anchorArrow1');
    anchorArrow1.addEventListener('click', function(e) {
      console.log('V1 Debug: anchorArrow1 clicked!');
      e.preventDefault();
      smoothScrollTo('#workAnchor');
      return false;
    });
  } else {
    console.log('V1 Debug: anchorArrow1 not found!');
  }

  // Anchor Arrow 2 - scroll to projects (third arrow)
  const anchorArrow2 = document.getElementById('anchorArrow2');
  if (anchorArrow2) {
    anchorArrow2.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#projectAnchor');
      return false;
    });
  }

  // Anchor Arrow 3 - scroll to contact (fourth arrow)
  const anchorArrow3 = document.getElementById('anchorArrow3');
  if (anchorArrow3) {
    anchorArrow3.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contactAnchor');
      return false;
    });
  }

  // Navigation links
  const topBtn = document.getElementById('top');
  if (topBtn) {
    topBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('body');
      if (window.innerWidth < 1025) {
        toggleJs();
        const navIcon = document.getElementById('nav-icon3');
        if (navIcon) navIcon.classList.toggle('open');
      }
      return false;
    });
  }

  const aboutNav = document.getElementById('aboutNav');
  if (aboutNav) {
    aboutNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#aboutAnchor');
      if (isMobile() && mobileMenuOpen) {
        toggleMobileMenu();
      }
      return false;
    });
  }

  const footerAboutNav = document.getElementById('footerAboutNav');
  if (footerAboutNav) {
    footerAboutNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#aboutAnchor');
      return false;
    });
  }

  const skillNav = document.getElementById('skillNav');
  if (skillNav) {
    skillNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#workAnchor');
      if (isMobile() && mobileMenuOpen) {
        toggleMobileMenu();
      }
      return false;
    });
  }

  const footerSkillNav = document.getElementById('footerSkillNav');
  if (footerSkillNav) {
    footerSkillNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#workAnchor');
      return false;
    });
  }

  const projectNav = document.getElementById('projectNav');
  if (projectNav) {
    projectNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#projectAnchor');
      if (isMobile() && mobileMenuOpen) {
        toggleMobileMenu();
      }
      return false;
    });
  }

  const footerProjectNav = document.getElementById('footerProjectNav');
  if (footerProjectNav) {
    footerProjectNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#projectAnchor');
      return false;
    });
  }

  const contactNav = document.getElementById('contactNav');
  if (contactNav) {
    contactNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contactAnchor');
      if (isMobile() && mobileMenuOpen) {
        toggleMobileMenu();
      }
      return false;
    });
  }

  const footerContactNav = document.getElementById('footerContactNav');
  if (footerContactNav) {
    footerContactNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contactAnchor');
      return false;
    });
  }

  // Mobile layout adjustments
  if (window.innerWidth < 1025) {
    const navMenu = document.querySelector('.navMenu');
    if (navMenu) navMenu.classList.add('fixed');

    // Mobile DOM manipulations (simplified)
    const skills = document.querySelector('.skills');
    const experience = document.querySelector('.experience');
    const resume = document.querySelector('.resume.col-12');

    if (skills && experience && resume) {
      resume.parentNode.insertBefore(experience, resume.nextSibling);
      experience.parentNode.insertBefore(skills, experience.nextSibling);
    }

    // Mobile navigation class changes
    const mobileNavElements = [
      'menuNavHello', 'menuNavAbout', 'menuNavResume', 
      'menuNavProjects', 'menuNavContact'
    ];

    mobileNavElements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.remove('col-3', 'col-2');
        element.classList.add('col-12');
      }
    });

    // Footer navigation should always be visible and mobile-friendly
    const mobileLinks = document.querySelector('.mobileLinks');
    console.log('Footer mobileLinks found:', mobileLinks);
    
    if (mobileLinks) {
      // Force visibility with aggressive styling
      mobileLinks.style.display = 'flex';
      mobileLinks.style.visibility = 'visible';
      mobileLinks.style.opacity = '1';
      mobileLinks.style.flexDirection = 'row';
      mobileLinks.style.justifyContent = 'space-evenly';
      mobileLinks.style.flexWrap = 'nowrap';
      mobileLinks.style.width = '100%';
      mobileLinks.style.margin = '1em 0';
      mobileLinks.style.padding = '0.5em 0';
      mobileLinks.style.backgroundColor = '#2C423F';
      mobileLinks.style.minHeight = '50px';
      
      // Force parent containers to be visible
      const parentContainers = [
        mobileLinks.closest('.col-12'),
        mobileLinks.closest('.flexcontainer'),
        mobileLinks.closest('#footerNavMenu')
      ];
      
      parentContainers.forEach(container => {
        if (container) {
          container.style.overflow = 'visible';
          container.style.height = 'auto';
        }
      });
      
      // Ensure all footer nav items are visible
      const footerNavItems = mobileLinks.querySelectorAll('.col-2');
      console.log('Footer nav items found:', footerNavItems.length);
      
      footerNavItems.forEach((item, index) => {
        console.log('Styling footer item', index);
        item.style.display = 'block';
        item.style.visibility = 'visible';
        item.style.flex = '1 1 25%';
        item.style.textAlign = 'center';
        item.style.backgroundColor = '#2C423F';
        item.style.color = '#E6E0E0';
        item.style.padding = '0.25em 0.1em';
        item.style.margin = '0';
        item.style.minWidth = '0';
        
        // Ensure text doesn't wrap
        const links = item.querySelectorAll('a, p');
        links.forEach(link => {
          link.style.whiteSpace = 'nowrap';
          link.style.overflow = 'hidden';
          link.style.textOverflow = 'ellipsis';
          link.style.fontSize = '0.85em';
        });
      });
    } else {
      console.log('Footer mobileLinks NOT found!');
    }
  }

  // Scroll behavior - COMPLETELY REMOVED to prevent conflicts
  // The v1_layout.erb handles ALL navigation sticky behavior
  console.log('✅ V1 Homepage.js loaded - no conflicting scroll behavior');

  // Mobile menu toggle
  const navIcon = document.getElementById('nav-icon3');
  if (navIcon) {
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('open');
    });
  }

  // BACKUP: Add smooth scrolling to ALL anchor links
  console.log('V1 Debug: Adding smooth scroll to all anchor links...');
  document.querySelectorAll('.anchorLink').forEach(link => {
    console.log('V1 Debug: Adding listener to anchor link:', link.getAttribute('href'));
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      console.log('V1 Debug: Anchor link clicked, target:', targetId);
      smoothScrollTo(targetId);
      return false;
    });
  });

  // EVENT DELEGATION APPROACH - Listen for clicks on the entire document
  console.log('V1 Debug: Setting up event delegation...');
  document.addEventListener('click', function(e) {
    console.log('V1 Debug: Document click detected on:', e.target);
    
    // Check if clicked element or its parent is an arrow
    let clickedElement = e.target;
    let arrowElement = null;
    
    // Walk up the DOM tree to find arrow elements
    while (clickedElement && clickedElement !== document) {
      if (clickedElement.id === 'anchorArrow' || 
          clickedElement.id === 'anchorArrow1' || 
          clickedElement.id === 'anchorArrow2' || 
          clickedElement.id === 'anchorArrow3') {
        arrowElement = clickedElement;
        break;
      }
      clickedElement = clickedElement.parentElement;
    }
    
    if (arrowElement) {
      console.log('V1 Debug: Arrow clicked via delegation:', arrowElement.id);
      e.preventDefault();
      
      // Determine target based on arrow ID
      let target = '';
      switch(arrowElement.id) {
        case 'anchorArrow':
          target = '#aboutAnchor';
          break;
        case 'anchorArrow1':
          target = '#workAnchor';
          break;
        case 'anchorArrow2':
          target = '#projectAnchor';
          break;
        case 'anchorArrow3':
          target = '#contactAnchor';
          break;
      }
      
      if (target) {
        console.log('V1 Debug: Scrolling to:', target);
        smoothScrollTo(target);
      }
      
      return false;
    }
    
    // Also check for anchor links
    if (e.target.closest('.anchorLink')) {
      const link = e.target.closest('.anchorLink');
      const href = link.getAttribute('href');
      console.log('V1 Debug: Anchor link clicked via delegation:', href);
      e.preventDefault();
      smoothScrollTo(href);
      return false;
    }
  });

});