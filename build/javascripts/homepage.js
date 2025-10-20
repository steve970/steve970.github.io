// Vanilla JS version of the working jQuery code
document.addEventListener('DOMContentLoaded', function() {

  // Hide .js elements
  const jsElements = document.querySelectorAll('.js');
  jsElements.forEach(el => el.style.display = 'none');

  // Toggle functions for mobile menu
  function toggleJs() {
    jsElements.forEach(el => {
      el.style.display = el.style.display === 'none' ? '' : 'none';
    });
  }

  // Smooth scroll function that replicates jQuery animate
  function smoothScrollTo(targetSelector, duration = 1000) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
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

  // Three line menu toggles
  document.querySelectorAll('.threeLine').forEach(el => {
    el.addEventListener('click', toggleJs);
  });

  document.querySelectorAll('.footerThreeLine').forEach(el => {
    el.addEventListener('click', toggleJs);
  });

  // Anchor Arrow - scroll to about
  const anchorArrow = document.getElementById('anchorArrow');
  if (anchorArrow) {
    anchorArrow.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#about');
      return false;
    });
  }

  // Top button - scroll to top
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

  // About Nav - scroll to about
  const aboutNav = document.getElementById('aboutNav');
  if (aboutNav) {
    aboutNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#about');
      if (window.innerWidth < 1025) {
        toggleJs();
        const navIcon = document.getElementById('nav-icon3');
        if (navIcon) navIcon.classList.toggle('open');
      }
      return false;
    });
  }

  // Footer About Nav
  const footerAboutNav = document.getElementById('footerAboutNav');
  if (footerAboutNav) {
    footerAboutNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#about');
      return false;
    });
  }

  // Anchor Arrow 1 - scroll to experience
  const anchorArrow1 = document.getElementById('anchorArrow1');
  if (anchorArrow1) {
    anchorArrow1.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#experience');
      return false;
    });
  }

  // Skill Nav - scroll to experience
  const skillNav = document.getElementById('skillNav');
  if (skillNav) {
    skillNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#experience');
      if (window.innerWidth < 1025) {
        toggleJs();
        const navIcon = document.getElementById('nav-icon3');
        if (navIcon) navIcon.classList.toggle('open');
      }
      return false;
    });
  }

  // Footer Skill Nav
  const footerSkillNav = document.getElementById('footerSkillNav');
  if (footerSkillNav) {
    footerSkillNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#experience');
      return false;
    });
  }

  // Anchor Arrow 2 - scroll to projects
  const anchorArrow2 = document.getElementById('anchorArrow2');
  if (anchorArrow2) {
    anchorArrow2.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#work');
      return false;
    });
  }

  // Project Nav - scroll to projects
  const projectNav = document.getElementById('projectNav');
  if (projectNav) {
    projectNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#work');
      if (window.innerWidth < 1025) {
        toggleJs();
        const navIcon = document.getElementById('nav-icon3');
        if (navIcon) navIcon.classList.toggle('open');
      }
      return false;
    });
  }

  // Footer Project Nav
  const footerProjectNav = document.getElementById('footerProjectNav');
  if (footerProjectNav) {
    footerProjectNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#work');
      return false;
    });
  }

  // Anchor Arrow 3 - scroll to contact
  const anchorArrow3 = document.getElementById('anchorArrow3');
  if (anchorArrow3) {
    anchorArrow3.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contact');
      return false;
    });
  }

  // Contact Nav - scroll to contact
  const contactNav = document.getElementById('contactNav');
  if (contactNav) {
    contactNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contact');
      if (window.innerWidth < 1025) {
        toggleJs();
        const navIcon = document.getElementById('nav-icon3');
        if (navIcon) navIcon.classList.toggle('open');
      }
      return false;
    });
  }

  // Footer Contact Nav
  const footerContactNav = document.getElementById('footerContactNav');
  if (footerContactNav) {
    footerContactNav.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#contact');
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

    const mobileLinks = document.querySelector('.mobileLinks');
    if (mobileLinks) mobileLinks.style.display = 'none';
  }

  // Scroll behavior
  window.addEventListener('scroll', function() {
    const navMenu = document.querySelector('.navMenu');
    if (!navMenu) return;

    if (window.innerWidth < 1025) {
      console.log("Welcome to my mobile website!");
      navMenu.classList.add('fixed');
    } else if (window.scrollY > 894 && window.scrollY < 4011) {
      console.log('true');
      navMenu.classList.add('fixed');
    } else {
      console.log('false');
      navMenu.classList.remove('fixed');
    }
  });

  // Mobile menu toggle
  const navIcon = document.getElementById('nav-icon3');
  if (navIcon) {
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('open');
    });
  }

  // Add smooth scrolling to navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      smoothScrollTo(targetId);
    });
  });

});