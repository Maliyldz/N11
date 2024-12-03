<template>
  <div class="custom-container h-100">
    <div class="row h-100">
      <!-- Sol Panel -->
      <div class="col-2 left-panel d-flex flex-column">
        <!-- Menü Seçenekleri -->
        <div class="menu-header">
  <h6>Merhaba, Volkan <i class="bi bi-moon-fill" style="color: gray;"></i></h6>
  <div class="menu-status">
    <div class="menu-item">
      <img src="/Icons/Picture_10.jpg"> 0 Kupon
    </div>
    <div class="menu-icon">
      <i class="bi bi-chevron-compact-right"></i>
    </div>
    <div class="menu-item">
      <img src="/Icons/Picture_11.jpg"> 0 Uçuç Puan
    </div>
  </div>
</div>

        <div class="menu-list">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(item, index) in menuItems" :key="index">
              <a href="#" :class="['menu-link', { active: activeMenuItem === item }]" @click="activeMenuItem = item">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sağ Panel -->
      <div class="col-8 right-panel">
        <!-- Sekme Başlıkları -->
        <div class="tab-header">
          <button class="btn tab-button" :class="{ active: activeTab === 'favorilerim' }"
            @click="activeTab = 'favorilerim'">
            Favorilerim
          </button>
          <button class="btn tab-button" :class="{ active: activeTab === 'listelerim' }"
            @click="activeTab = 'listelerim'">
            Listelerim
          </button>
        </div>
        <!-- Kategori Başlığı ve Sekmeleri -->
        <div class="category-header">
          <h5>Kategori:</h5>
          <ul class="category-tabs">
            <li v-for="category in Object.keys(groupedProducts)" :key="category"
              :class="{ active: selectedCategory === category }" @click="selectedCategory = category">
              <!-- Dinamik İkon ve Kategori İsmi -->
              <i :class="categoryIcons[category]" style="margin-right: 8px;"></i> {{ category }}
            </li>
          </ul>
        </div>

        <!-- Favorilerim Sekmesi İçeriği -->
        <div class="tab-content">
          <!-- Seçilen Kategorideki Ürünler -->
          <div class="product-list">
            <div v-for="(product, index) in groupedProducts[selectedCategory]" :key="index" class="product-card d-flex">
              <!-- Sol Kısım (Ürün Resmi ve Bilgileri) %60 -->
              <div class="product-details col-6 d-flex position-relative">
                <img :src="product.image" class="product-image" :alt="product.name" />
                <div class="product-info">
                  <h5 class="product-title">{{ product.name }}</h5>
                  <!-- Yıldız Değerlendirmesi -->
                  <div class="product-rating">
                    <span v-for="star in 5" :key="star" class="bi"
                      :class="star <= Math.floor(product.rating) ? 'bi-star-fill' : 'bi-star'">
                    </span>
                    <span class="review-count">({{ product.reviewCount }})</span>
                  </div>
                  <div v-if="product.freeShipping" class="text-success">Kargo Ücretsiz</div>
                </div>

                <!-- Sağ Alt Kısımda Sil Butonu -->
                <button class="btn btn-danger delete-button" @click="deleteProduct(index)">
                  <i class="bi bi-trash"></i>Sil
                </button>
              </div>

              <!-- Orta Kısım (Fiyat) %15 -->
              <div class="product-price-container col-2 d-flex align-items-center justify-content-center">
                <p class="product-price">{{ product.price }} TL</p>
              </div>

              <!-- Sağ Kısım (Sepete Ekle) %25 -->
              <div class="product-action col-4 d-flex align-items-center justify-content-center">
                <button class="btn " style="color: white;">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Listelerim Sekmesi İçeriği -->
        <div v-if="activeTab === 'listelerim'" class="tab-content">
          <h5>Listeleriniz</h5>
          <p>Henüz herhangi bir listeniz bulunmuyor.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Favorites',
  setup() {
    const activeTab = ref('favorilerim');
    const selectedCategory = ref('Tümü');

    // Favori ürünler dizisi
    const favoriteProducts = ref([
      {
        name: 'Samsung M471A1G44AB0-CWE 8GB DDR4 3200 MHz CL22 Ram',
        price: '749,70',
        image: 'https://n11scdn.akamaized.net/a1/215/12/84/38/08/IMG-3197337719207569763.jpg',
        rating: 4.5,
        reviewCount: 120,
        freeShipping: true,
        category: 'Elektronik',
      },
      {
        name: 'Asus Tuf Gaming A15 FA506NF-HN052 R5-7535HS 8 GB 512 GB SSD RTX2050 15.6" Dos FHD Dizüstü Bilgisayar',
        price: '22.499,00',
        image: 'https://n11scdn.akamaized.net/a1/215/02/19/77/58/IMG-3490028796769805532.jpg',
        rating: 4.8,
        reviewCount: 65,
        freeShipping: false,
        category: 'Elektronik',
      },
      {
        name: 'Taç Lisanslı Galatasaray Parçalı Logo Pamuk Çift Kişilik Nevresim Takımı',
        price: '1.788',
        image: 'https://n11scdn.akamaized.net/a1/215/15/27/10/04/IMG-518728452022904852.jpg',
        rating: 5.0,
        reviewCount: 1905,
        freeShipping: true,
        category: 'Spor & Outdoor',
      },
      {
        name: 'Nike Zoom Mercurial Superfly 9 Elite Sg-pro Anti-clog Traction Erkek Sarı Krampon Çim Zemin Dj5166-780',
        price: '6.249,94',
        image: 'https://n11scdn.akamaized.net/a1/215/06/26/84/28/IMG-2799795862318680292.jpg',
        rating: 3.7,
        reviewCount: 57,
        freeShipping: false,
        category: 'Spor & Outdoor',
      },
    ]);

    // Ürünleri kategorilere göre gruplandırma
    const groupedProducts = computed(() => {
      return favoriteProducts.value.reduce((groups: Record<string, any[]>, product) => {
        if (!groups[product.category]) {
          groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
      }, { Tümü: favoriteProducts.value });
    });

    const deleteProduct = (index: number) => {
      favoriteProducts.value.splice(index, 1);
    };

    const activeMenuItem = ref('');

    const menuItems = ref([
      'Siparişlerim',
      'İptal/Değişim/İade',
      'Kuponlarım',
      'Garajım',
      'pet11e Kayıtlı Dostlarım',
      'Favorilerim & Listelerim',
      'Değerlendirmelerim',
      'Soru ve Cevaplarım',
      'Üyelik Bilgilerim',
      'Adreslerim',
      'Şifre Değiştir',
      'Üyelik İptali',
    ]);
    const categoryIcons: Record<string, string> = {
      Elektronik: "bi bi-phone",
      "Spor & Outdoor": "bi bi-bicycle",
      Moda: "bi bi-bag",
      Ev: "bi bi-house",
      Otomotiv: "bi bi-car-front-fill"
    };

    return {
      activeTab,
      selectedCategory,
      favoriteProducts,
      groupedProducts,
      deleteProduct,
      menuItems,
      activeMenuItem,
      categoryIcons,
    };
  },
});
</script>

<style scoped>
/* Genel Yapı */
.custom-container {
  width: 95%;
  max-width: 1800px;
  margin: auto;
  height: 100vh;
}

/* Sekme Başlıkları */
.tab-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.tab-button {
  font-size: 1.1rem;
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}

.tab-button.active {
  border-bottom: 2px solid #5D3EBC;
  font-weight: bold;
  color: black;
  font-weight: bold;
}

/* Sağ Panel İçerik */
.tab-content {
  padding-top: 10px;
}

/* Kategori Sekmeleri */
.category-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
}

.category-header h5 {
  margin: 0;
  white-space: nowrap;
  /* Başlık tek satırda kalır */
}

.category-tabs {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 0 10px;
  /* Başlıktan sonraki boşluğu ayarlar */
}

.category-tabs li {
  margin-left: 10px;
  cursor: pointer;
  padding: 8px 15px;
  border: 1px solid #565555;
  border-radius: 5px;
  background-color: #f8f9fa;
  transition: background-color 0.3s, color 0.3s;
}

.category-tabs li:hover {
  border-color: #a29f9f;
}

.category-tabs li.active {
  background-color: #d9cdfc;
  color: black;
  border-color: #5D3EBC;
}

.product-list {
  padding-top: 20px;
}

.product-card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
  align-items: center;
}

.product-details {
  display: flex;
  align-items: center;
  position: relative;
}

.delete-button {
  position: absolute;
  /* Sağ alt köşeye sabitler */
  bottom: 10px;
  /* Alttan boşluk */
  right: 10px;
  /* Sağdan boşluk */
  padding: 5px 10px;
  /* Buton iç dolgu */
  font-size: 0.9rem;
  background-color: white;
  color: #5D3EBC;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}


.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Yıldız Değerlendirmesi */
.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.product-rating .bi {
  font-size: 1.2rem;
  color: #ccc;
  /* Boş yıldız rengi */
  margin-right: 2px;
}

.product-rating .bi-star-fill {
  color: #f39c12;
  /* Dolu yıldız rengi */
}

.review-count {
  margin-left: 8px;
  font-size: 0.9rem;
  color: #555;
}

/* Orta Kısım (Fiyat) */
.product-price-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-price {
  font-weight: bold;
  font-size: 1.2rem;
}

/* Sağ Kısım (Sepete Ekle) */
.product-action {
  display: flex;
  justify-content: flex-end;
  /* Sağ tarafa yasla */
  align-items: center;
  background-color: #5D3EBC;
  border-radius: 8px;
  width: 25%;
  /* Container genişliği */
  height: 50px;
}

.product-title {
  margin-bottom: 5px;
  white-space: nowrap;
  /* Metni tek satırda tutar */
  overflow: hidden;
  /* Taşan metni gizler */
  text-overflow: ellipsis;
  /* Taşan metni üç nokta (...) ile gösterir */
  max-width: 300px;
  /* Genişlik sınırı */
}

/* Menü Üst Kısım */
.menu-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 0 Kupon ve 0 Uçuş Puan Kısmı */
.menu-status {
  display: flex;
  flex-direction: column;
  /* Alt alta sıralanmasını sağlar */
  margin-top: 10px;
  background-color: #f3f4f6;
  width: 220px;
  justify-content: space-between;
  max-height: 150px;
}

.menu-item {
  background-color: #f3f4f6;
  color: #5D3EBC;
  padding: 8px 15px;
  font-weight: bold;
  font-size: 1rem;
  margin: 5px;
  /* Alt alta sıralanacaksa aralarına boşluk ekler */
  display: flex;
  align-items: center;
}

.list-group-item {
  border: none;
}

/* Menü Linki Stilleri */
.menu-link {
  text-decoration: none;
  /* Altı çizili olmasın */
  color: inherit;
  /* Yazı rengini korur */
  padding: 8px 15px;
  font-size: 1rem;
  display: block;
}

/* Aktif Öğeye Gri Arka Plan Ekleme */
.menu-link.active {
  background-color: #e2e3e5;
}

/* Hover Durumu (Alt Çizili) */
.menu-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.menu-icon {
  margin-left: auto; /* Sağa yaslanmasını sağlar */
  color: #5D3EBC;
  font-size: 1.5rem;
}

</style>