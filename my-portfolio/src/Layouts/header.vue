<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Watch scroll position and active section
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  // Determine active section for nav highlight
  const sections = ['contact', 'certificate', 'projects', 'skills', 'experience', 'education', 'about']
  const scrollPos = window.scrollY + 120

  let current = 'home'
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && scrollPos >= el.offsetTop) {
      current = id
      break
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ 'scrolled': isScrolled || isMenuOpen }">
    <div class="container-xxl d-flex justify-content-between align-items-center py-2 px-3 px-sm-4 position-relative">
      
      <!-- Brand Logo -->
      <router-link to="/" class="logo text-decoration-none" @click="closeMenu">
        Vong<span class="text-cyan">Vathana</span>
      </router-link>

      <!-- Hamburger Menu Icon (Tablets & Mobile) -->
      <button 
        class="nav-toggle-btn d-custom-nav-btn" 
        :class="{ 'active': isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Toggle Navigation"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Navigation Links List -->
      <ul class="nav-links list-unstyled m-0 d-flex align-items-center" :class="{ 'open': isMenuOpen }">
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'home' && !route.hash }" 
            to="/"
          >
            Home
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'about' }" 
            :to="{ path: '/', hash: '#about' }"
          >
            About
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'education' }" 
            :to="{ path: '/', hash: '#education' }"
          >
            Education
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'experience' }" 
            :to="{ path: '/', hash: '#experience' }"
          >
            Experience
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'skills' }" 
            :to="{ path: '/', hash: '#skills' }"
          >
            Skills
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'projects' }" 
            :to="{ path: '/', hash: '#projects' }"
          >
            Projects
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item" 
            :class="{ 'active-link': activeSection === 'certificate' }" 
            :to="{ path: '/', hash: '#certificate' }"
          >
            Certificate
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link 
            class="nav-link-item highlight-btn" 
            :class="{ 'active-btn': activeSection === 'contact' }" 
            :to="{ path: '/', hash: '#contact' }"
          >
            Contact
          </router-link>
        </li>
      </ul>

    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(7, 11, 19, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 65px;
  display: flex;
  align-items: center;
}

header.scrolled {
  background: rgba(7, 11, 19, 0.92);
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* Brand Logo Styling */
.logo {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  color: var(--text-white);
  transition: transform 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.logo:hover {
  transform: scale(1.03);
}

.text-cyan {
  color: var(--accent-cyan);
}

/* Nav Links Container */
.nav-links {
  gap: clamp(0.6rem, 1.3vw, 1.75rem);
  transition: all 0.3s ease;
  flex-wrap: nowrap;
}

/* Base Link Styling */
.nav-link-item {
  color: var(--text-gray-100);
  font-weight: 500;
  font-size: clamp(0.82rem, 0.9vw, 0.95rem);
  text-decoration: none;
  padding: 0.4rem 0.2rem;
  position: relative;
  transition: color 0.25s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.nav-link-item:hover,
.nav-link-item.active-link {
  color: var(--accent-cyan);
}

/* Slide-in Underline effect */
.nav-link-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-cyan);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-link-item:hover::after,
.nav-link-item.active-link::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Highlighted Contact Button style */
.highlight-btn {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.12) 100%);
  color: var(--accent-cyan) !important;
  border: 1px solid rgba(6, 182, 212, 0.35);
  border-radius: 999px;
  padding: 0.45rem 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.highlight-btn::after {
  display: none !important;
}

.highlight-btn:hover,
.highlight-btn.active-btn {
  background: var(--accent-cyan);
  color: var(--bg-dark-900) !important;
  border-color: var(--accent-cyan);
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
  transform: translateY(-1px);
}

/* Toggle Hamburger Button */
.nav-toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  padding: 0;
  z-index: 10000;
}

.nav-toggle-btn .bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-white);
  border-radius: 9px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-toggle-btn.active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background-color: var(--accent-cyan);
}

.nav-toggle-btn.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle-btn.active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background-color: var(--accent-cyan);
}

/* Responsive Breakpoint at 1080px for Tablets, iPads, and Mobile */
@media (max-width: 1080px) {
  .d-custom-nav-btn {
    display: flex !important;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(7, 11, 19, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(6, 182, 212, 0.25);
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 2rem 1rem;
    gap: 1.1rem;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .nav-links.open {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-link-item {
    font-size: 1.05rem;
    padding: 0.5rem 1.5rem;
    display: block;
    text-align: center;
    width: 100%;
  }

  .highlight-btn {
    width: auto;
    min-width: 190px;
    margin-top: 0.5rem;
  }
}
</style>