// Navigation and smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link")
  const heroButtons = document.querySelectorAll("[data-section]")

  // Handle navigation clicks
  function handleNavigation(event) {
    const targetSection = event.target.getAttribute("data-section")
    if (targetSection) {
      scrollToSection(targetSection)
    }
  }

  // Add event listeners to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavigation)
  })

  // Add event listeners to hero buttons
  heroButtons.forEach((button) => {
    button.addEventListener("click", handleNavigation)
  })

  // Smooth scroll to section
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Active navigation highlighting
  function updateActiveNavigation() {
    const sections = ["hero", "about", "samples", "analysis", "methodology", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          // Remove active class from all nav links
          navLinks.forEach((link) => link.classList.remove("active"))

          // Add active class to current section nav link
          const activeLink = document.querySelector(`[data-section="${sectionId}"]`)
          if (activeLink && activeLink.classList.contains("nav-link")) {
            activeLink.classList.add("active")
          }
          break
        }
      }
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", updateActiveNavigation)

  // Tab functionality for content samples
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")
      const tabContainer = this.closest(".tabs")

      // Remove active class from all tab buttons in this container
      tabContainer.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab panels in this container
      tabContainer.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.remove("active")
      })

      // Show target tab panel
      const targetPanel = document.getElementById(targetTab)
      if (targetPanel) {
        targetPanel.classList.add("active")
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".sample-card, .skill-card, .methodology-card, .contact-card")
  animatedElements.forEach((el) => observer.observe(el))

  // Contact form functionality (if needed)
  const contactButtons = document.querySelectorAll(".contact-buttons .btn")
  contactButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("Send Message")) {
        window.location.href =
          "mailto:conordev0084@gmail.com?subject=Netflix Metadata Analyst Position&body=Hello Dilshod,"
      } else if (this.textContent.includes("GitHub")) {
        // Add your GitHub URL here
        window.open("https://github.com/yourusername", "_blank")
      }
    })
  })

  // Parallax effect for hero section (subtle)
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroOverlay = document.querySelector(".hero-overlay")
    if (heroOverlay) {
      heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Mobile menu toggle (if you want to add mobile menu later)
  function createMobileMenu() {
    // This function can be expanded to create a mobile hamburger menu
    // For now, the navigation is hidden on mobile as per the original design
  }

  // Initialize
  updateActiveNavigation()
})

// Additional utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
  window["updateActiveNavigation"]()
}, 10)

// Replace the direct scroll listener with debounced version for better performance
window.removeEventListener("scroll", window["updateActiveNavigation"])
window.addEventListener("scroll", debouncedScrollHandler)

// Smooth reveal animations for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll(".sample-card, .skill-card, .methodology-card")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("fade-in-up")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on load (optional)
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });
