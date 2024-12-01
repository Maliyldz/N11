<template>
  <div class="main-container">
    <!-- Üst Container -->
    <div class="upper-container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <a class="navbar-brand text-white fw-bold" href="#">
        <img
          src="https://n11scdn.akamaized.net/a1/org/24/11/08/47/65/48/85/00/61/13/42/02/98490134802964002749.svg"
          width="258"
          height="42"
          alt="hayat sana gelir"
          style="position: static;"
        />
      </a>

      <!-- Search Bar -->
<div class="search-container">
  <div class="input-group">
    <!-- Arama ikonu -->
    <button class="input-group-text search-icon" @click="onSearchClick">
      <i class="bi bi-search"></i>
    </button>
    <!-- Arama çubuğu -->
    <input
      type="text"
      class="form-control search-bar"
      placeholder="Ürün, kategori, marka ara"
      v-model="searchQuery"
    />
    <!-- Çarpı ikonu -->
    <button
      class="input-group-text clear-icon"
      v-if="searchQuery"
      @click="clearSearch"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
</div>


      <!-- Adres ve Sepet -->
    <div class="d-flex align-items-center account-container">
      <a href="#" class="text-white me-4 d-flex align-items-center">
        <i class="bi bi-geo-alt me-1"></i>
        <span>Teslimat Adresi </span>
      </a>
      </div>

      <a href="#" class="text-white me-4 d-flex align-items-center">
        <i class="bi bi-cart me-1"></i>
        <span></span>
      </a>

      <div class="d-flex flex-column align-items-start">
        <span class="text-white">Hesabım</span>
        <a href="#" class="small text-decoration-underline text-white">
          Üye Ol · Giriş Yap
        </a>
      </div>    
    </div>

    

    <!-- Alt Container (Dropdown Menü) -->
    <div class="lower-container d-flex justify-content-center">
      <ul class="d-flex category-list gap-10 ">
        <li
          v-for="category in categories"
          :key="category.name"
          class="category-item me-4"
          @mouseover="showDropdown(category.name)"
          @mouseleave="hideDropdown"
        >
          <a href="#" class="text-black d-flex align-center">
            <img
              v-if="category.icon"
              :src="category.icon"
              alt="category.icon"
              class="category.icon"
              :style="{ width: '20px', height: '20px' }"
            />
            {{ category.name }}
          </a>

          <!-- Alt Kategoriler -->
          <div
            class="subcategory-menu"
            v-if="activeDropdown === category.name"
          >
            <div
              v-for="subcategory in category.subcategories"
              :key="subcategory"
              class="subcategory-card"
            >
              <img
                  class="subcategory-image"
                  :src="getImageForSubcategory(subcategory)"
                  :alt="subcategory"
              />
              <p class="subcategory-name">{{ subcategory }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    // Kategoriler ve alt kategoriler
    const categories = ref([
      { name: "Moda", icon: "https://n11scdn.akamaized.net/a1/30/23/04/27/50/92/89/68/98/82/81/83/46/87911743275366201592.png", subcategories: ["Ayakkabı & Çanta", "Kadın Giyim & Aksesuar", "Erkek Giyim & Aksesuar", "Çocuk Giyim & Aksesuar"] },
      { name: "Elektronik", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/53/46/97/55/78/81/00/58/49/31961828233979739225.png", subcategories: ["Telefon Aksesuarları", "Bilgisayar", "Televizyon & Ses Sistemleri", "Elektrikli Ev Aletleri", "Beyaz Eşya", "Fotoğraf & Kamera", "Video Oyun & Konsol"] },
      { name: "Ev & Yaşam", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/86/32/24/29/29/47/16/41/05/57126929366806936432.png", subcategories: ["Mobilya", "Ev Tekstili", "Dekorasyon & Aydınlatma", "Mutfak Gereçleri", "Banyo & Ev Gereçleri", "Yapı Market & Bahçe", "Evcil Hayvan Ürünleri", "Kırtasiye & Ofis", "Süpermarket"] },
      { name: "Anne & Bebek", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/77/23/79/89/22/11/13/67/06/1817596495358676750.png", subcategories: ["Bebek Bezi & Islak Mendil", "Bebek Giyim", "Hamile Giyim", "Bebek Arabaları", "Oto Koltuğu & Ana Kucağı", "Beslenme & Mama Sandalyesi", "Biberon ve Aksesuarları", "Emzirme Ürünleri", "Yürüteç & Yürütme Yardımcıları", "Bebek Odası & Park Yatak", "Bebek Bakım & Sağlık", "Bebek Güvenlik", "Bebek Oyuncakları", "Banyo & Tuvalet"] },
      { name: "Kozmetik & Kişisel Bakım", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/82/78/22/64/91/17/58/84/05/11823586115151480719.png", subcategories: ["Parfüm & Deodorant", "Saç Bakım & Şekillendirme", "Cilt Bakımı", "Makyaj", "Sağlık & Medikal Ürünler", "Kadın Bakım Ürünleri", "Erkek Bakım Ürünleri", "Güzellik Salonu & Kuaför Ürünleri", "Ağız & Diş Bakımı", "Cinsel Ürünler", "Ev Kozmetiği"] },
      { name: "Mücevher & Saat", icon: "https://n11scdn.akamaized.net/a1/30/23/05/30/61/78/87/08/84/35/58/58/07/48911776658065241375.png", subcategories: ["Yatırımlık Altın & Gümüş", "Saat", "Güneş Gözlüğü", "Altın Takılar", "Pırlanta Takılar", "Gümüş Takılar", "Çelik Takılar", "Bijuteri Takılar", "Aksesuar", "Takı Aksesuarları", "2.El Antika & Koleksiyon"] },
      { name: "Spor & Outdoor", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/78/48/54/32/73/75/59/66/38/52455961286243405128.png", subcategories: ["Fitness & Kondisyon", "Spor Giyim & Ayakkabı", "Outdoor & Kamp", "Bireysel & Takım Sporları", "Avcılık & Balıkçılık", "Kış Sporları", "Bisiklet & Scooter", "Tekne & Yat Malzemeleri", "Su Sporları"] },
      { name: "Kitap, Müzik, Film, Oyun", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/86/74/46/47/76/61/89/79/84/34021047252181561848.png", subcategories: ["Kitap", "Film", "Müzik", "Çocuk Oyuncakları & Parti", "Yetişkin Hobi & Oyun", "Dijital Kodlar  & Ürünler", "Düğün, Davet, Organizasyon", "El işi Ürünleri", "Yaşam ve Etkinlik"] },
      { name: "Otomotiv & Motosiklet", icon: "https://n11scdn.akamaized.net/a1/30/22/08/01/84/83/10/49/65/28/06/29/71/92143688675639577247.png", subcategories: ["Aksesuar & Tuning", "Yedek Parça", "Ses Sistemleri & Navigasyon", "Lastik & Jant", "Motosiklet", "Traktör"] },
    ]);

    const activeDropdown = ref<string | null>(null);

    const showDropdown = (category: string) => {
      activeDropdown.value = category;
      
    };

    const hideDropdown = () => {
      activeDropdown.value = null;
    };

    const getImageForSubcategory = (subcategory: string): string => {
      const images: Record<string, string> = {
      "Moda":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/68/51/67/23/05/04/24/45/84/23143456331576358743.png",
      "Ayakkabı & Çanta":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/68/51/67/23/05/04/24/45/84/23143456331576358743.png",
      "Kadın Giyim & Aksesuar":
          "https://n11scdn.akamaized.net/a1/70/23/04/27/76/52/57/13/54/01/59/02/85/45379323599985948622.png",
      "Erkek Giyim & Aksesuar":
          "https://n11scdn.akamaized.net/a1/70/23/04/27/53/13/36/95/94/51/24/06/12/24836496884423673224.png",
      "Çocuk Giyim & Aksesuar":
          "https://n11scdn.akamaized.net/a1/70/23/07/14/57/25/28/49/13/04/70/06/15/59010030133228191094.png",
      "Telefon Aksesuarları":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/58/67/58/91/83/33/36/15/35/7726746479856142255.png",
      "Bilgisayar":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/65/68/54/91/35/83/37/03/64/87843262666886237075.png",
      "Televizyon & Ses Sistemleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/62/39/67/84/81/69/94/16/83/76285410644875430358.png",
      "Elektrikli Ev Aletleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/48/33/01/56/06/36/16/81/32/08962705349765514787.png",
      "Beyaz Eşya":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/77/18/88/70/06/98/42/44/23/24187661746282054854.png",
      "Fotoğraf & Kamera":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/67/44/81/75/57/09/21/15/17/71958813280732230598.png",
      "Video Oyun & Konsol":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/78/22/57/18/45/28/69/86/58/65291816529937543221.png",
      "Mobilya":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/69/80/26/69/70/03/34/12/35/98614775794067065231.png",
      "Ev Tekstili":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/88/21/82/35/45/90/79/58/61/19177558810354300650.png",
      "Dekorasyon & Aydınlatma":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/52/80/11/34/14/53/17/27/10/71279445605520196128.png",
      "Mutfak Gereçleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/84/46/15/50/27/56/75/14/49/92348288011750424949.png",
      "Banyo & Ev Gereçleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/53/64/63/85/16/26/15/39/67/2548080915135643149.png",
      "Yapı Market & Bahçe":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/59/07/74/99/78/04/22/56/40/98174517664007307242.png",
      "Evcil Hayvan Ürünleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/55/78/96/07/83/25/11/44/70/8657686062115762476.png",
      "Kırtasiye & Ofis":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/53/11/00/02/15/92/15/92/47/06320922691742449057.png",
      "Süpermarket":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/86/41/45/88/25/66/33/70/66/72914410530985457456.png",
      "Bebek Bezi & Islak Mendil":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/71/97/71/01/22/85/92/88/76/73093655016006859516.png",
      "Bebek Giyim":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/83/75/82/57/73/27/18/21/68/61603158589101748740.png",
      "Hamile Giyim":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/61/53/21/15/25/75/43/94/49/38544609028471079179.png",
      "Bebek Arabaları":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/54/39/73/41/99/70/95/12/22/62266802552673972801.png",
      "Oto Koltuğu & Ana Kucağı":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/63/62/88/14/22/26/61/64/35/11549183958172061565.png",
      "Beslenme & Mama Sandalyesi":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/49/08/80/46/95/67/14/38/70/678389925654970368.png",
      "Biberon ve Aksesuarları":
          "https://n11scdn.akamaized.net/a1/70/22/08/02/69/36/40/06/93/69/90/12/42/38588767742001986225.png",
      "Emzirme Ürünleri":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/68/46/68/75/71/52/88/61/60/77783526637649612557.png",
      "Parfüm & Deodorant":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/79/84/26/69/23/93/58/32/24/14302519975835486492.png",
      "Saç Bakım & Şekillendirme":
          "https://n11scdn.akamaized.net/a1/70/23/06/08/51/38/61/81/54/82/63/45/75/26509750353714890885.png",
      "Yatırımlık Altın & Gümüş":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/46/34/14/67/84/63/87/04/54/65816479720337131970.png",
      "Saat":
          "https://n11scdn.akamaized.net/a1/70/24/10/17/82/64/72/53/58/50/70/01/24/7213473254443695009.png",
      "Fitness & Kondisyon":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/69/80/62/39/90/71/77/71/07/76454677258586636564.png",
      "Spor Giyim & Ayakkabı":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/65/17/43/92/49/42/56/83/63/55834932632248105051.png",
      "Kitap":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/60/83/21/96/65/32/57/49/93/38350642251792469978.png",
      "Film":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/83/30/36/84/24/87/18/98/93/97887945089274132603.png",
      "Aksesuar & Tuning":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/54/33/47/33/04/66/54/57/39/76091904097350693571.png",
      "Yedek Parça":
          "https://n11scdn.akamaized.net/a1/70/22/06/23/60/93/76/62/23/36/71/03/67/0626618143100191224.png",
      };
      return images[subcategory] || "https://via.placeholder.com/150?text=Varsayılan+Görsel";
    };

    // Arama çubuğu için state
    const searchQuery = ref<string>("");

    // Arama butonuna tıklandığında çağrılacak fonksiyon
    const onSearchClick = (): void => {
      if (searchQuery.value) {
        // console.log(Arama yapılıyor: ${searchQuery.value});
        // Burada arama fonksiyonunu çağırabilirsiniz.
      } else {
        console.log("Lütfen bir arama terimi girin.");
      }
    };

    // Çarpı butonuna tıklandığında çağrılacak fonksiyon
    const clearSearch = (): void => {
      searchQuery.value = "";
      console.log("Arama kutusu temizlendi.");
    };

    return {
      categories,
      activeDropdown,
      showDropdown,
      hideDropdown,
      getImageForSubcategory,
      searchQuery,
      onSearchClick,
      clearSearch,
    };
  },
};
</script>

<style scoped>
/* Ana Container */
.main-container {
  width: 100%;
  background-color: #5E3EBC;
}

/* Üst Container */
.upper-container {
  padding: 1px 200px;
  border-bottom: 2px solid #5E3EBC;
}
.navbar-brand {
display: flex;
justify-content: flex-end; /* Logoyu sağa hizalar */
}

/* Search Container */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  height: 48px;
  width: 512px;
  border-style: none;
  max-width: 512px;
}

/* Input Group */
.input-group {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  background-color: #ffffff;
  border: 1px solid #ccc;
}

/* Search Bar */
.search-bar {
  height: 48px;
  width: 100%;
  border: none;
  border-color: #5E3EBC;
  outline: none;
  border-radius: 24px;
  padding-left: 48px; /* Sol ikona yer açmak için padding */
  padding-right: 48px; /* Sağ ikona yer açmak için padding */
  font-size: 16px;
  background-color: transparent;
}

/* Search Icon */
.search-icon {
  position: absolute;
  left: 16px;
  background: none;
  border: none;
  color: #5e3ebc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Clear Icon */
.clear-icon {
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: #5e3ebc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Alt Container (Dropdown Menü) */
.lower-container {
  padding: 5px 40px;
  background-color: #fff;
  border-bottom: 1px solid #444249;
}

.category-list {
  text-align: center;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 3px;
}

.category-item {
  position: relative;
}

.subcategory-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  padding: 8px;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 80%;
  left: 0;
  z-index: 10;
  width: 52%;
}

.subcategory-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  padding: 0;
  background-color:white;
  border-radius: 0;
  border: 0 solid #e0e0e0;
}

.subcategory-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  transform: translateY(0);
}

.subcategory-image {
  width: 40px;
height: 40px;
object-fit: cover;
margin-bottom: 10px;
border-radius: 8px;
border: 1px solid #ccc;
}

.subcategory-name {
  font-size: 14px;
color: #333;
text-align: center;
}
.subcategory-menu {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  z-index: 20;
  width: 310px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 4px; /* Görsel ve metin arasındaki boşluk */
}

a.text-black {
  display: flex; /* İkon ve metni yan yana hizala */
  align-items: center; /* Dikey olarak ortala */
}

.category-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 10;
  display: block;
}

.dropdown-menu .dropdown-item {
  font-size: 14px;
  padding: 8px 12px;
  white-space: nowrap;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #f1f1f1;
}

/* Linkler */
a {
  text-decoration: none;
  color: inherit;
}

.category-item:hover > a {
  color: #5E3EBC;
}
</style>