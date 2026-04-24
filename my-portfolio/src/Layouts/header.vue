<template>
  <header>
    <nav class="d-flex justify-content-between align-items-center">
      <h1>My Portfolio</h1>

      <ul class="d-flex gap-3 align-items-center list-unstyled">
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: '/', hash: '#about' }">
                About Me
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: '/', hash: '#skills' }">
                Skills
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: '/', hash: '#services' }">
                Services
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: '/', hash: '#projects' }">
                Projects
            </router-link>
        </li>
        <li>
            <router-link :to="{ path: '/', hash: '#contact' }">
                Contact
            </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
    a.router-link-active {
        color: blue;
        font-weight: bold;
    }
    header {
        position: sticky;
        top: 0;
        background: white;
        z-index: 1000;
    }
</style>