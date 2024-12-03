<template>
    <div>
      <!-- Üst kısmı -->
      <header class="d-flex align-items-center text-white p-3">
        <!-- Buton ve Menü -->
        <div class="d-flex align-items-center">
          <button
            class="btn btn-light me-3 toggle-btn"
            @click="toggleSidebar"
            :class="{ 'toggle-btn-shifted': isSidebarOpen }"
          ><i class="bi bi-list"></i>
          </button>
          
        </div>
      </header>
  
      <!-- Sidebar -->
      <div
        class="sidebar bg-light position-fixed top-0 start-0 h-100 shadow"
        :class="{ 'sidebar-open': isSidebarOpen }"
      >
      <ul class="list-unstyled p-3">
        
        <li>
          <NuxtLink to="/" background="red"></NuxtLink>
        </li>
          <li>
            <NuxtLink to="/Login">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Carousel">Carousel</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Navbar">Navbar</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ProductSlider">ProductSlider</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Footer">Footer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/FilterMenu">FilterMenu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ShoppingCart">ShoppingCart</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ProductPage">ProductPage</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Favorites">Favorites</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ProductMenu">ProductMenu</NuxtLink>
          </li>
        </ul>
      </div>
  
      <!-- İçerik -->
      <div :class="{ 'content-shifted': isSidebarOpen }">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Sidebar durumu
  const isSidebarOpen = ref(false);
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  </script>
  
  <style scoped>

  header {
    height: 80px;
  }

  /* Sidebar */
  .sidebar {
    width: 250px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1050;
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .toggle-btn {
  position: fixed;
  left: 10px;
  top: 10px; /* Üstten biraz boşluk verir */
  display: flex; /* Flexbox kullanımı */
  align-items: center; /* Dikey olarak ortalar */
  justify-content: center; /* Yatay olarak ortalar */
  transition: left 0.3s ease;
  z-index: 1100;

  /* Buton boyutları */
  width: 50px; /* Genişlik */
  height: 50px; /* Yükseklik (Yüksekliği genişliğe uygun hale getirin) */
  border-radius: 50%; /* Butonu dairesel yapar */
}
  
  .toggle-btn-shifted {
    left: 260px; /* Sidebar genişliği + küçük bir boşluk */
  }
  
  /* İçerik kayması */
  .content-shifted {
    margin-left: 250px;
    transition: margin-left 0.3s ease;
  }

  .bi-list {
    font-size: 1.5rem;
    color: #5D3EBC;
  }

  .d-flex {
    background-color: orange;
  }

  a {
    color: #5D3EBC;
    text-decoration: none;
  }

  a:hover {
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }

  </style>
  