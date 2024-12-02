<template>
    <footer class="text-black py-5">
      <div class="container">
        <!-- 1. Container: %20 oranında - Hızlı Linkler -->
      <div class="d-flex justify-content-center align-items-center mb-5" style="height: 20%;">
        <div class="d-flex gap-5 justify-content-center">
          <div v-for="(item, index) in quickLinks" :key="index" class="d-flex align-items-center">
            <div class="img-container d-flex justfiy-content-center align-items-center">
                <img :src="item.img" alt="icon" class="icon-img">
            </div>
            <span class="mt-2 text-center">{{ item.text }}</span>
          </div>
        </div>
      </div>
  
        <!-- 2. Container: %60 oranında -->
        <div class="row justfiy-content-center align-items-center custom-row" style="height: 60%;">
          <div v-for="(section, index) in linkSections" :key="index" class="col-6 col-lg-2 mb-3">
            <h5>{{ section.title }}</h5>
            <ul class="list-unstyled">
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a href="#" class="text-black">{{ link }}</a>
              </li>
            </ul>
          </div>
          <!-- 5. Sütun: Mağaza Girişi ve Ücretsiz Mağaza Aç -->
        <div class="col-6 col-lg-2 mb-3 custom-store-section">
          <h5>Mağazalar</h5>
          <a href="#" class="btn btn-primary d-block mb-3 custom-btn-store">Mağaza Girişi</a>
          <a href="#" class="btn btn-primary d-block mb-3 custom-btn-open-store">Ücretsiz Mağaza Aç</a>
          <ul class="list-unstyled">
            <li v-for="(link, linkIndex) in storeLinks" :key="linkIndex">
              <a href="#" class="text-black">{{ link }}</a>
            </li>
          </ul>
        </div>
        </div>
  
        <!-- 3. Container: %20 oranında -->
<div class="row third-container" style="height: 20%;">
  <!-- 1. Parça (%40) -->
  <div class="col-lg-4 d-flex flex-column">
    <!-- 1. Parça - Üst Kısım (Yazı) -->
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <p>n11 uygulamasını ücretsiz indir mobile
        özel avantajlardan yararlan!</p>
    </div>
    <!-- 1. Parça - Alt Kısım (İconlar) -->
    <div class="flex-grow-1 d-flex justify-content-center gap-5">
      <a href="https://apps.apple.com/us/app/n11-getiralışveriş/id779590051?mt=8" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/h03/h4a/9694501208094/google-play.svg" alt="App Store" class="app-icon"></a>
      <a href="https://play.google.com/store/apps/details?id=com.dmall.mfandroid&referrer=adjust_reftag%3DcdvO3dgUx3Tmv%26utm_source%3Dweb_android_footer&pli=1" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/h6b/h4d/9694501306398/app-store.svg" alt="Google Play" class="app-icon"></a>
      <a href="https://appgallery.huawei.com/#/app/C101803793" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/hd3/h50/9694501404702/huawei.svg" alt="App Gallery" class="app-icon"></a>
    </div>
  </div>

  <!-- 2. Parça (%30) -->
  <div class="col-lg-3 d-flex flex-column">
    <!-- 2. Parça - Üst Kısım (Yazı) -->
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <h5>Bizi Takip Et</h5>
    </div>
    <!-- 2. Parça - Alt Kısım (İconlar) -->
    <div class="flex-grow-1 d-flex justify-content-center gap-3">
      <a href="https://www.facebook.com/n11official" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/hf5/had/9694502092830/facebook.svg" alt="Facebook" class="app-icon"></a>
      <a href="https://x.com/n11official" target="_blank"><img src="https://www.mavi.com/medias/x-twitterp1.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8NTYwfGltYWdlL3N2Zyt4bWx8YURrNEwyZ3haUzh4TURJek5EUTBORFEwTnpjM05DOTRMWFIzYVhSMFpYSndNUzV6ZG1jfDQ1M2FhZmUzOWFiYzRjM2VkOWNlMzBlN2MyMDBkMTY4MmZmNDg4NmFkMWQwYjJhY2JkMDgzMjVkYmM2YjQ4NzA" alt="Twitter" class="app-icon"></a>
      <a href="https://www.instagram.com/n11resmi/" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/h8a/h62/9694501961758/instagram.svg" alt="Instagram" class="app-icon"></a>
      <a href="https://www.youtube.com/user/n11comkanal" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/h92/hc1/9694502617118/youtube.svg" alt="Youtube" class="app-icon"></a>
      <a href="https://tr.pinterest.com/n11official/" target="_blank"><img src="https://sky-static.mavi.com/sys-master/maviTrImages/hb2/hb4/9694502289438/spotify.svg" alt="Pinterest" class="app-icon"></a>
    </div>
  </div>

  <!-- 3. Parça (%10) -->
  <div class="col-lg-1 d-flex flex-column">
    <!-- 3. Parça - Üst Kısım (Yazı) -->
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <h5>Bloga Göz At</h5>
    </div>
    <!-- 3. Parça - Alt Kısım (İcon) -->
    <div class="flex-grow-1 d-flex align-items-center justify-content-center">
      <a href="https://blog.n11.com" target="_blank"><img src="/Icons/Picture_5.jpg" alt="Blog11" class="app-icon"></a>
    </div>
  </div>

  <!-- 4. Parça (%10) -->
  <div class="col-lg-1 d-flex justify-content-center align-items-center">
    <a href="https://www.eticaret.gov.tr/siteprofil/4C79A5CE1759448C97EB57D5E6E10CD1/wwwn11com" target="_blank"><img src="/Icons/Picture_6.jpg" class="qr-code"></a>
  </div>

  <!-- 5. Parça (%10) -->
  <div class="col-lg-1 d-flex justify-content-center align-items-center">
    <a href="https://www.guvendamgasi.org.tr/view/uye/detay.php?Guid=b23c99b2-aed3-11ea-8718-48df373f4850" target="_blank"><img src="/Icons/Picture_7.jpg" class="app-icon"></a>
  </div>
</div>
      </div>

      <!-- Yeni Alt Container: Büyük Container'ın Dışında -->
  <div class="footer-bottom-container d-flex justify-content-between align-items-center py-3">
    <!-- Sol Kısım -->
    <div class="footer-left">
      <p>© Telif Hakkı 2012-2024 n11</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="#">Müşteri Kişisel Verilerinin İşlenmesine İlişkin Aydınlatma Metni</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Kullanım Koşullarımız</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Çerez Ayarları</a>
        </li>
      </ul>
    </div>

    <!-- Sağ Kısım -->
    <div class="footer-right d-flex align-items-center">
      <img src="/Icons/Picture_8.jpg" class="brand-icon">
    </div>
  </div>

    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footer',
    data() {
      return {
        quickLinks: [
        { img: '/Icons/Picture_1.jpg', text: 'Her Alışverişte Kupon Fırsatları' },
        { img: '/Icons/Picture_2.jpg', text: 'Her Gün Yeni Ürünler ve Fırsatlar' },
        { img: '/Icons/Picture_3.jpg', text: 'Herkese Uygun Ödeme Yöntemleri' },
        { img: '/Icons/Picture_4.jpg', text: 'İade' },
        ],
        linkSections: [
          {
            title: 'n11',
            links: ['Marka Koruma Merkezi', 'Markalar', 'İletişim'],
          },
          {
            title: 'Müşteriler',
            links: ['Üye Ol', 'Yeni Üye Rehberi', 'Yeni Üye Rehberi', 'Yardım', 'Ödeme Seçenekleri', 'İptal & İade', 'İşlem Rehberi', 'Kullanıcı Güvenliği'],
          },
          {
            title: 'Popüler Sayfalar',
            links: ['Akıllı Saat', 'Bluetooth Kulaklık', 'Cep Telefonu', 'Robot Süpürge', 'Altın'],
          },
          {
            title: 'Öne Çıkan Sayfalar',
            links: ['Saç Düzleştirici', 'Isıtıcı', 'Olta & Olta Takımı', '', 'İphone 15', 'Kahve Makinesi'],
          },
        ],
        // Store links için yeni array
        storeLinks: [
          'Mağaza Puanı Hesaplaması',
          'Mağaza Yardım Merkezi',
          'Yeni Mağaza Rehberi',
          'Kargo Rehberi'
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  footer {
    background-color: #fff;
  }
  
  footer a {
    text-decoration: none;
  }
  
  footer a:hover {
    text-decoration: underline;
  }

  /* 2. Container için ortalama */
  .custom-row {
    display: flex;
    justify-content: center; /* Yatayda ortala */
    align-items: center; /* Dikeyde ortala */
    height: 100%; /* Yüksekliği container kadar yap */
  }

  /* Sütun içindeki içerikleri ortalama */
  .custom-row .col-6 {
    display: flex;
    flex-direction: column; /* Dikey hizalama */
    justify-content: center; /* Dikey ortalama */
    align-items: center; /* Yatay ortalama */
    text-align: center; /* İçeriği ortala */
    height: 100%;
  }

  .custom-btn-store {
    background-color: #fff; /* Butonun arka plan rengi */
    color: #5D3EBC; /* Yazı rengi */
    border: 2px solid #5D3EBC; /* Çerçeve rengi */
    border-radius: 6px; /* Köşe yuvarlaklığı */
  }

  .custom-store-section {
    border: 4px solid #ededed; /* Çerçeve rengi ve kalınlığı */
    border-radius: 8px; /* Köşe yuvarlaklığı */
    padding: 25px; /* İçerik ile çerçeve arasındaki boşluk */
    width: 280px;
  }

  /* Ücretsiz Mağaza Aç Butonu */
  .custom-btn-open-store {
    background-color: #5D3EBC; /* Butonun arka plan rengi */
    color: #fff; /* Yazı rengi */
    border: 2px solid #5D3EBC; /* Çerçeve rengi */
    border-radius: 6px; /* Köşe yuvarlaklığı */
  }
  
  /* Üçüncü Container Ayarları */
.third-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa; /* Arka plan rengi */
  height: 100%;
}

.third-container .col-lg-4,
.third-container .col-lg-3,
.third-container .col-lg-1 {
  border: 0 solid #ddd; /* Her parçayı ayıran çerçeve */
  display: flex;
  flex-direction: column;
}

.third-container .app-icon {
  width: 80px; /* İkon boyutu */
  height: 40px;
}

.third-container .qr-code {
  width: 80px; /* QR kod boyutu */
  height: 80px;
}

/* İconlar Arası Boşluk ve Merkezleme */
.third-container .d-flex.justify-content-center {
  gap: 10px;
  text-align: center;
}

/* İkonlar ortalanıyor */
.third-container h5 {
  font-weight: bold;
  font-size: 16px;
}

/* Parçaların içerikleri dikey ve yatay ortalanıyor */
.third-container.flex-grow-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

  .bi-arrow-right-circle-fill {
    font-size: 1.5rem;
    color: white;
  }
  
  .img {
    max-width: 100%;
  }

  .d-flex.gap-5 {
    gap: 40px; /* Hızlı linkler arasındaki boşluğu artırma */
  }

  .d-flex.gap-5 {
    gap: 40px;
  }

  .d-flex.px-3 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .footer-bottom-container {
  width: 100%; /* Genişlik tüm ekranı kaplar */
  background-color: #f9f9f9; /* Arka plan rengi */
  border-top: 1px solid #ccc; /* Üst çizgi */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* İçeriklerin esnek yerleşimi */
}

.footer-left p {
  margin: 0;
  font-size: 14px;
}

.footer-left ul {
  padding: 0;
  margin: 5px 0 0;
  list-style: none;
}

.footer-left ul li {
  display: inline;
  margin-right: 10px;
}

.footer-left ul li a {
  color: #000;
  text-decoration: none;
  font-size: 14px;
}

.footer-left ul li a:hover {
  text-decoration: underline;
}

.footer-right img {
  height: auto;
  width: auto;
}

</style>
  