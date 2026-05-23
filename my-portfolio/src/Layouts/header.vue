<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Watch scroll position to make header more solid on scroll
const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ 'scrolled': isScrolled || isMenuOpen }">
    <nav class="d-flex width-1320 justify-content-between p-3 align-items-center position-relative">
      
      <!-- Brand Logo -->
      <router-link to="/" class="logo text-decoration-none" @click="closeMenu">
        Vong<span class="text-cyan">Vathana</span>
      </router-link>

      <!-- Hamburger Menu Icon (Mobile Only) -->
      <button 
        class="nav-toggle-btn d-lg-none" 
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
          <router-link class="nav-link-item" to="/">Home</router-link>
        </li>
        <li @click="closeMenu">
          <router-link class="nav-link-item" :to="{ path: '/', hash: '#about' }">About</router-link>
        </li>
        <li @click="closeMenu">
          <router-link class="nav-link-item" :to="{ path: '/', hash: '#skills' }">Skills</router-link>
        </li>
        <li @click="closeMenu">
          <router-link class="nav-link-item" :to="{ path: '/', hash: '#services' }">Services</router-link>
        </li>
        <li @click="closeMenu">
          <router-link class="nav-link-item" :to="{ path: '/', hash: '#projects' }">Projects</router-link>
        </li>
        <li @click="closeMenu">
          <router-link class="nav-link-item highlight-btn" :to="{ path: '/', hash: '#contact' }">Contact</router-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(7, 11, 19, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

header.scrolled {
  background: rgba(7, 11, 19, 0.85);
  border-bottom: 1px solid rgba(6, 182, 212, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Brand Logo Styling */
.logo {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
  color: var(--text-white);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.text-cyan {
  color: var(--accent-cyan);
}

/* Nav Links Container */
.nav-links {
  gap: 2.2rem;
  transition: all 0.3s ease;
}

/* Base Link Styling */
.nav-link-item {
  color: var(--text-gray-100);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.5rem 0.25rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link-item:hover {
  color: var(--accent-cyan);
}

/* Slide-in Underline effect */
.nav-link-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-cyan);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-item:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Highlighted Contact Button style */
.highlight-btn {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%);
  color: var(--accent-cyan) !important;
  border: 1px solid rgba(6, 182, 212, 0.35);
  border-radius: 999px;
  padding: 0.55rem 1.4rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.highlight-btn::after {
  display: none;
}

.highlight-btn:hover {
  background: var(--accent-cyan);
  color: var(--bg-dark-900) !important;
  border-color: var(--accent-cyan);
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
  transform: translateY(-1px);
}

/* Hamburger mobile menu button */
.nav-toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
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

/* Active hamburger animation */
.nav-toggle-btn.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: var(--accent-cyan);
}

.nav-toggle-btn.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle-btn.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: var(--accent-cyan);
}

/* Responsive Styles for Mobile Nav */
@media (max-width: 991.98px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(7, 11, 19, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(6, 182, 212, 0.15);
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
    gap: 1.5rem;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }

  .nav-links.open {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-link-item {
    font-size: 1.1rem;
  }
}
</style>