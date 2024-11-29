<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="Merhaba" style="text-align: center;">
              <span class="fw-bold">Merhaba!</span><br />
              <span>Üyelere özel kupon ve fırsatlar seni bekliyor</span>
            </div>
            <div class="card-header text-center">
              <div class="d-flex justify-content-between">
                <!-- Giriş Yap Button -->
                <button
                  class="btn border"
                  style="background-color: white; color: black; width: 48%; font-weight: bolder;"
                  @click="handleLogin"
                >
                  Giriş Yap
                </button>
                <!-- Üye Ol Button -->
                <button
                  class="btn border"
                  style="background-color: white; color: black; width: 48%; font-weight: bolder;"
                  @click="handleSignUp"
                >
                  Üye Ol
                </button>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleLogin">
                <!-- Email/Phone Input -->
                <div class="mb-3">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    placeholder="E-posta Adresi"
                    v-model="username"
                    required
                  />
                </div>
                <!-- Password Input -->
                <div class="mb-3 position-relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    class="form-control"
                    placeholder="Şifre"
                    v-model="password"
                    required
                  />
                  <!-- Göster/Gizle Göz İkonu -->
                  <i
                    :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                    class="position-absolute top-50 end-0 translate-middle-y me-3"
                    style="cursor: pointer;"
                    @click="togglePasswordVisibility"
                  ></i>
                </div>
                <div class="text-end mb-3">
                    <a href="#" class="text-decoration-none" style="background-color: white; color: #5D3EBC;">
                        Şifremi Unuttum
                    </a>
                </div>
                <!-- Login Button -->
                <button
                  type="submit"
                  class="btn w-100"
                  style="background-color: #5D3EBC; color: white;"
                >
                  Giriş Yap
                </button>
              </form>
              <!-- Diğer Seçenekler -->
              <div class="mt-4 text-center">
                <div class="line-wrapper">
                  <span class="line-text">Diğer Seçenekler</span>
                </div>
                <div class="d-flex justify-content-around">
                  <!-- Sosyal medya butonları sadece ikonlar -->
                  <button class="btn btn-google border">
                    <i class="bi bi-google"></i>
                  </button>
                  <button class="btn btn-facebook border">
                    <i class="bi bi-facebook"></i>
                  </button>
                  <button class="btn btn-apple border">
                    <i class="bi bi-apple"></i>
                  </button>
                </div>
              </div>
              <!-- Yardım -->
              <div class="mt-3 text-center">
                <p>Yardıma mı ihtiyacın var?</p>
                <p>0850 333 0011 numarası üzerinden Müşteri Hizmetleri'ni arayabilirsin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'LoginForm',
    setup() {
      const username = ref<string>('');
      const password = ref<string>('');
      const rememberMe = ref<boolean>(false);
      const showPassword = ref<boolean>(false);
  
      const togglePasswordVisibility = () => {
        showPassword.value = !showPassword.value;
      };
  
      const handleLogin = () => {
        console.log('Username:', username.value);
        console.log('Password:', password.value);
        console.log('Remember Me:', rememberMe.value);
        alert('Login işlemi tetiklendi.');
      };
  
      const handleSignUp = () => {
        alert('Üye olma işlemi tetiklendi.');
      };
  
      return {
        username,
        password,
        rememberMe,
        showPassword,
        togglePasswordVisibility,
        handleLogin,
        handleSignUp,
      };
    },
  });
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .btn-danger:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
  .position-relative {
    position: relative;
  }
  .position-absolute {
    position: absolute;
  }
  
  /* Diğer Seçenekler Çizgi Stili */
  .line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  .line-wrapper::before,
  .line-wrapper::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 15px;
  }
  .line-text {
    font-weight: bold;
    color: #5D3EBC;
  }
  
  .d-flex button {
    width: 30%; /* Sosyal butonlar için genişliği ayarlıyoruz */
  }
  
  /* Renkli Sosyal Medya Butonları */
  .btn-google {
    background-color: white;
    color: darkred;
  }
  
  .btn-facebook {
    background-color: white;
    color: blue;
  }
  
  .btn-apple {
    background-color: white;
    color: black;
  }
  
  .btn i {
    font-size: 1.5rem;
  }
  
  .btn-google:hover,
  .btn-facebook:hover,
  .btn-apple:hover {
    opacity: 0.8;
  }
  .container{
    max-width: 1100px;
  }

  a:hover {
  color: #3E2A8C; /* İstediğiniz hover rengi */
  text-decoration: underline; 
}
  </style>
  