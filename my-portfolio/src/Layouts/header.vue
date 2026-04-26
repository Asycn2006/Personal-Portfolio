<template>
  <header>
    <nav class="d-flex width-1320 justify-content-between gap-5 p-3 align-items-center">
      <h1>Vong Vathana</h1>

      <ul class="d-flex gap-5 justify-content-center py-2 px-5 rounded-4 bg-info text-white list-unstyled m-0">
        <li>
            <router-link class="text-decoration-none" to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link class="text-decoration-none" :to="{ path: '/', hash: '#about' }">
                About Me
            </router-link>
        </li>
        <li>
            <router-link class="text-decoration-none" :to="{ path: '/', hash: '#skills' }">
                Skills
            </router-link>
        </li>
        <li>
            <router-link class="text-decoration-none" :to="{ path: '/', hash: '#services' }">
                Services
            </router-link>
        </li>
        <li>
            <router-link class="text-decoration-none" :to="{ path: '/', hash: '#projects' }">
                Projects
            </router-link>
        </li>
        <li>
            <router-link class="text-decoration-none" :to="{ path: '/', hash: '#contact' }">
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