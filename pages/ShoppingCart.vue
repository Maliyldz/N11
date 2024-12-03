<template>
    <div class="container my-5">
        <div class="row">
            <!-- Büyük Container Başlangıcı -->
            <div class="col-12 col-lg-8">
                <div class="container-fluid p-0">

                    <!-- 1. Parça: Sepetim ve Ürün Sayısı -->
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-start align-items-center">
                            <h3>Sepetim ({{ cartItems.length }})</h3>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="suggestions-container">
                                <h4 class="mb-4 text-start">Sepetinize Özel Öneriler 🤩</h4>
                                <div class="d-flex justify-content-between align-items-center">
                                    <button @click="scrollLeft" class="btn btn-secondary"><i
                                            class="bi bi-chevron-compact-left"></i></button>
                                    <div class="suggestions overflow-hidden" ref="suggestions">
                                        <div class="d-flex suggestions-inner">
                                            <!-- Ürün Kartı -->
                                            <div class="suggestion-item" v-for="(item, index) in suggestedItems"
                                                :key="index">
                                                <div class="product-container align-items-center">
                                                    <img :src="item.image" class="product-image" :alt="item.name" />
                                                    <div class="product-details">
                                                        <p class="product-name">{{ item.name }}</p>
                                                        <p class="product-price">{{ item.price }} TL</p>
                                                    </div>
                                                    <button class="add-to-cart-btn">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="scrollRight" class="btn btn-secondary"><i
                                            class="bi bi-chevron-compact-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>




                    <!-- 3. Parça: Sepet Detayları -->
                    <div class="row mb-4">
                        <div class="col-4 d-flex align-items-center">
                            <!-- Sol Tarafa Görsel Ekleniyor -->
                            <img src="/Icons/Picture_1.jpg" alt="Kupon İkonu"
                                style="width: 40px; height: 40px; margin-right: 10px;">
                            <div>
                                <p style="text-align: start; margin: 0;">Kuponla indirimli alışverişin</p>
                                <p style="text-align: start; margin: 0;">keyfini çıkar.</p>
                            </div>
                        </div>
                        <div class="col-4 d-flex align-items-center">
                            <!-- Sol Tarafa Favori İkonu -->
                            <i class="fas fa-heart" style="font-size: 30px; color: #5D3EBC; margin-right: 10px;"></i>
                            <img src="/Icons/Picture_9.jpg" alt="Kupon İkonu"
                                style="width: 40px; height: 40px; margin-right: 10px;">
                            <div>
                                <p style="text-align: start; margin: 0;">Favori ürünlerini ekle ve</p>
                                <p style="text-align: start; margin: 0;">takip et.</p>
                            </div>
                        </div>
                        <div class="col-4 text-center">
                            <button class="btn btn-primary">Hemen Giriş Yap</button>
                        </div>
                    </div>

                    <!-- 4. Parça: Tümünü Seç Checkbox -->
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="selectAll"
                                    @change="toggleSelectAll" id="selectAll">
                                <label class="form-check-label" for="selectAll">Tümünü Seç</label>
                            </div>
                        </div>
                    </div>

                    <!-- 5. Parça: Markanın İsmi ve Puan -->
                    <div class="row mb-4">
                        <div class="col">
                            <a :href="brandLink" class="brand-link">{{ brandName }}</a>
                            <span class="badge bg-success">{{ rating }}</span>
                        </div>
                    </div>

                    <!-- 6. Parça: Ürün Detayları -->
                    <div class="row mb-4" v-for="(item, index) in cartItems" :key="index">
                        <!-- 1. Sütun: Ürün Görseli ve Checkbox -->
                        <div class="col-3 d-flex align-items-center">
                            <input class="form-check-input me-2" type="checkbox" v-model="item.selected">
                            <img :src="item.image" class="img-fluid" alt="Product"
                                style="max-width: 60px; margin-right: 10px;">

                            <!-- Ürün İsmi ve Butonlar -->
                            <div class="d-flex flex-column">
                                <!-- Ürün İsmi -->
                                <p class="mb-2">{{ item.name }}</p>

                                <!-- +, - ve Silme Butonları -->
                                <div class="d-flex align-items-center">
                                    <button @click="decreaseQuantity(item)"
                                        class="btn btn-sm btn-outline-secondary me-2"
                                        :disabled="item.quantity <= 1"><i class="bi bi-dash"></i></button>
                                    <span class="mx-2">{{ item.quantity }}</span>
                                    <button @click="increaseQuantity(item)"
                                        class="btn btn-sm btn-outline-secondary me-2"><i class="bi bi-plus"></i></button>
                                    <button @click="removeItem(index)" class="btn btn-sm"><i
                                            class="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Sütun: Kolay Gelsin ve Kargo Ücretsiz -->
                        <div class="col-6 d-flex align-items-center justify-content-center">
                            <p class="mb-0" style="color: black;">Kolay Gelsin: </p>
                            <span style="color: #5D3EBC; padding: 3px;">Kargon Ücretsiz</span>
                        </div>

                        <!-- 3. Sütun: Ürün Fiyatı -->
                        <div class="col-3 d-flex align-items-center justify-content-end">
                            <p class="mb-0 text-end" style="width: 100%; font-size: 18px;">{{ (item.price *
                                item.quantity).toFixed(2) }} TL</p>
                        </div>
                    </div>



                </div>
            </div>

            <!-- 2. Container: Sipariş Özeti -->
            <div class="col-12 col-lg-4">
    <div class="order-summary">
        <h4>Sipariş Özeti</h4>
        
        <!-- Sipariş Tutarı -->
        <div class="d-flex justify-content-between">
            <p>Sipariş Tutarı ({{ cartItems.length }} ürün):</p>
            <p>{{ totalItemsCost }} TL</p>
        </div>

        <!-- Kargo Tutarı -->
        <div class="d-flex justify-content-between">
            <p>Kargo Tutarı:</p>
            <p>{{ totalShipping }} TL</p>
        </div>

        <!-- Kargo İndirimi -->
        <div class="d-flex justify-content-between">
            <p style="color: #5D3EBC;">Kargo İndirimi:</p>
            <p>-{{ shippingDiscount }} TL</p>
        </div>

        <!-- Toplam Tutar -->
        <div class="d-flex justify-content-between">
            <p class="text-muted"><strong>Toplam Tutar:</strong></p>
            <p class="text-muted"><strong>{{ totalPrice }} TL</strong></p>
        </div>
        
        <!-- Satın Al Butonu Ortalanmış -->
        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-primary w-100">Satın Al</button>
        </div>

        <p><a href="#" class="d-block mt-3 text-center">Sepetine Özel Taksit Seçenekleri</a></p> <!-- Link ekledik -->
    </div>
</div>

        </div>
    </div>
</template>

<script lang="ts">
import { SassColor } from 'sass';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CartPage',
    data() {
        return {
            cartItems: [
                {
                    name: 'Apple iPhone 13 128 GB',
                    price: 33979,
                    image: 'https://n11scdn.akamaized.net/a1/64/10/11/82/61/IMG-4797759745854285841.jpg',
                    quantity: 1,
                    selected: true,
                },
                {
                    name: 'Apple iPhone 13 128 GB',
                    price: 33739,
                    image: 'https://n11scdn.akamaized.net/a1/64/10/11/82/61/IMG-4797759745854285841.jpg',
                    quantity: 2,
                    selected: true,
                },
                {
                    name: 'Apple iPhone 13 128 GB',
                    price: 33559,
                    image: 'https://n11scdn.akamaized.net/a1/64/07/02/35/69/IMG-4605448414345744716.jpg',
                    quantity: 1,
                    selected: true,
                },
            ],
            suggestedItems: [
                {
                    name: 'Galatasaray Puma 2024/2025 Parçalı İç Saha Forması',
                    image: 'https://n11scdn.akamaized.net/a1/80/16/78/77/18/IMG-7417045080118317530.jpg',
                    price: 1499.99,
                },
                {
                    name: 'Apple iPhone 13 128 GB',
                    image: 'https://n11scdn.akamaized.net/a1/64/10/11/82/61/IMG-4797759745854285841.jpg',
                    price: 33979,
                },
                {
                    name: 'Apple iPhone 12 128 GB',
                    image: 'https://n11scdn.akamaized.net/a1/64/10/11/82/61/IMG-4797759745854285841.jpg',
                    price: 33979,
                },
                {
                    name: 'Apple İphone 13 128 GB',
                    image: 'https://n11scdn.akamaized.net/a1/64/07/02/35/69/IMG-4605448414345744716.jpg',
                    price: 33659,
                },
            ],
            brandName: 'eminönümarketim',
            brandLink: 'https://www.example.com',
            rating: 10,
            selectAll: true, // Başlangıç durumu: Tümünü Seç kapalı
            shippingCost: 50,
            shippingDiscount: 10,
        };
    },
    computed: {
        totalPrice() {
            const totalItemsPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const totalShipping = this.shippingCost - this.shippingDiscount;
            return (totalItemsPrice + totalShipping).toFixed(2);
        },
        totalItemsCost() {
            return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
        },
        totalShipping() {
            return (this.shippingCost - this.shippingDiscount).toFixed(2);
        },
    },
    methods: {
        scrollLeft() {
            const suggestions = this.$refs.suggestions as HTMLElement;
            suggestions.scrollLeft -= 200;
        },
        scrollRight() {
            const suggestions = this.$refs.suggestions as HTMLElement;
            suggestions.scrollLeft += 200;
        },
        increaseQuantity(item: any) {
            item.quantity++;
        },
        decreaseQuantity(item: any) {
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        removeItem(index: number) {
            this.cartItems.splice(index, 1);
        },
        toggleSelectAll() {
            // selectAll durumuna göre tüm ürünlerin seçimini ayarla
            this.cartItems.forEach(item => {
                item.selected = this.selectAll;
            });
        },
    },
    watch: {
        // Eğer bir üründeki seçim değişirse, Tümünü Seç checkbox'unu güncelle
        cartItems: {
            handler() {
                this.selectAll = this.cartItems.every(item => item.selected);
            },
            deep: true
        }
    }
});
</script>

<style scoped>
/* Container düzenlemeleri */
.container {
    background-color: #f9f9f9;
    padding: 0;
}

.btn-secondary {
    width: 40px;
    /* Butonun genişliği */
    height: 40px;
    /* Butonun yüksekliği */
    border-radius: 50%;
    /* Yuvarlak hale getirmek için */
    background-color: #fff;
    /* Butonun arka plan rengi */
    color: #000;
    /* Buton üzerindeki yazının rengi */
    border: none;
    /* Buton kenarlığını kaldır */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* Fare ile üzerine gelindiğinde imleci el işareti yapar */
    transition: background-color 0.3s ease;
    /* Renk değişimi için geçiş efekti */
    opacity: 0;
}

.btn-secondary:hover {
    opacity: 100%;
}

.suggestions-container {
    position: relative;
    width: 100%;
    background-color: #EFF4FA;
    border-radius: 8px;
}

.suggestions {
    width: 80%;
    overflow-x: hidden;
}

.suggestions-inner {
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease;
}

.suggestion-item {
    flex: 0 0 calc(33.33% - 20px);
    /* 2 tam ve 1 yarım ürün gösterimi */
    max-width: 300px;
}

.product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    height: 76px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    background-color: #fff;
    position: relative;
}

.product-image {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
}

.product-details {
    flex-grow: 1;
    margin-left: 10px;
    overflow: hidden;
}

.product-name {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-price {
    font-size: 12px;
    font-weight: normal;
    color: #333;
}

.add-to-cart-btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: #5D3EDC;
    border: 2px solid #5D3EDC;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    cursor: pointer;
}



.brand-link {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
}

.badge {
    font-size: 1rem;
    margin-left: 10px;
}

.order-summary {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 290px;
}

.text-muted {
    color: #6c757d;
}

.btn-primary {
    background-color: #5e50ad;
    border-color: #5e50ad;
    max-width: 200px;
    max-height: 50px;
}

/*
.btn-primary:hover {
    background-color: #4e44a2;
    border-color: #4e44a2;
}
*/
.text-end {
    text-align: end;
}

button {
    margin: 5px;
}

.btn-danger {
    background-color: white;
    border-color: white;
}

/* Ürün ismi ve butonları dikey hizalamak için */
.col-8 {
    display: flex;
    flex-direction: column;
}

/* Ürün görseli ile butonlar arasında boşluk ayarı */
img {
    max-width: 60px;
    margin-right: 10px;
}

/* Butonlar arasındaki mesafeyi ayarlama */
button {
    margin: 0 5px;
}

.quantity-controls button {
    margin: 0 5px;
}

/* Silme butonunu daha küçük yapalım */
.btn-sm {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    border-color: #EDEDED;
    border-radius: 8px;
    background-color: #EDEDED;
}

/* Checkbox genel stil */
.form-check-input {
    width: 20px;
    /* Checkbox genişliği */
    height: 20px;
    /* Checkbox yüksekliği */
    border: 10px solid unset;
    /* Checkbox çerçeve kalınlığı ve rengi */
    border-radius: 8px;
    /* Köşeleri yuvarlatma */
    background-color: white;
    /* Checkbox arka plan rengi */
    transition: all 0.2s ease-in-out;
    /* Geçiş animasyonu */
}

/* Checkbox işaretlendiğinde */
.form-check-input:checked {
    background-color: #5e50ad;
    /* İşaretli olduğunda arka plan rengi */
    border-color: #5e50ad;
    /* İşaretli olduğunda çerçeve rengi */
    color: white;
    /* İşaretli olduğunda içerik rengi */
}
/*
.order-summary {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}*/

/* Sepet özeti kısmında toplam fiyatı sağa yaslamak için */
.text-end {
    text-align: end;
}

/* Sepete özel taksit seçenekleri bağlantısını biraz stilize edelim */
a {
    font-size: 14px;
    color: #5D3EBC;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
