<template>
    <div class="container py-4">
        <div class="row g-3 justify-content-center">
            <!-- Ürün Kartları -->
            <div v-for="product in products" :key="product.id"
                class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <!--Ürün Kartı-->
                <div class="product-card d-flex flex-column"
                    style="width: 320px; max-height: 500px; overflow: hidden; background-color: white;">

                    <!-- Üst Parça -->
                    <div class="upper-section position-relative d-flex flex-column align-items-center justify-content-start"
                        style="flex: 2; background-color: #f8f9fa; padding: 10px; position: relative; padding-bottom: 30px;"
                        @mousemove="onMouseMove($event, product.id)" @mouseleave="resetImageIndex(product.id)">

                        <!-- Sol Üst Köşe Görseli -->
                        <img src="https://n11scdn.akamaized.net/a1/org/24/08/09/56/54/60/90/38/45/42/57/19/26040334021026951284.png"
                            alt="Logo" class="position-absolute top-0 start-0 ms-2 mt-2"
                            style="width: 50px; height: 50px;" />

                        <!-- Sağ Üst Köşe Favori Butonu -->
                        <button @click="toggleFavorite(product)"
                            class="btn btn-outline-dark position-absolute top-0 end-0 m-2 p-0 d-flex align-items-center justify-content-center"
                            style="width: 40px; height: 40px; border-radius: 50%; border: .5px solid black; border-color: #1f1f1f;">
                            <i :class="product.isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'"
                                :style="{ color: product.isFavorite ? '#5d3ebc' : 'black', fontSize: '20px' }">
                            </i>
                        </button>

                        <!-- Ürün Görselleri -->
                        <img v-for="(image, index) in product.image" :key="index"
                            v-show="product.currentImageIndex === index" :src="image" :alt="product.name"
                            class="product-image" />

                        <!-- Slider Dots -->
                        <div class="slider-dots position-absolute" style="bottom: 10px;">
                            <span v-for="n in 3" :key="n"
                                :class="['dot', product.currentImageIndex === n - 1 ? 'active' : '']"></span>
                        </div>

                        <!-- Ücretsiz Kargo -->
                        <span v-if="product.freeShipping" class="badge text-center position-absolute"
                            style="font-size: 14px; bottom: 40px; left: 50%; transform: translateX(-50%); color: #5d3ebc;">
                            ÜCRETSİZ KARGO
                        </span>
                    </div>

                    <!-- Alt Parça -->
                    <div class="lower-section d-flex flex-column flex-grow-1 p-2"
                        style="flex: 1; background-color: #fff;">
                        <!-- Ürün İsmi -->
                        <h6 class="product-name m-0 text-truncate" style="font-size: 14px;">
                            {{ product.name }}
                        </h6>
                        <div class="product-rating d-flex align-items-center mt-1">
                            <!-- Yıldızlar -->
                            <span v-for="n in 5" :key="n" class="me-1">
                                <i
                                    :class="n <= Math.floor(product.rating) ? 'text-warning bi bi-star-fill' : 'text-secondary bi bi-star'"></i>
                            </span>
                            <!-- Puan -->
                            <small>({{ product.reviews }})</small>
                        </div>


                        <!-- Alt Fiyat Container -->
                        <div class="price-container d-flex align-items-center justify-content-between mt-auto">
                            <div class="d-flex flex-column">
                                <small v-if="product.oldPrice" class="text-muted"
                                    style="font-size: 14px; text-decoration: line-through">{{ product.oldPrice }}
                                    TL</small>
                                <small v-if="product.oldPrice" class="text-muted"
                                    style="font-size: 13px; font-weight: 700; color: #5d3ebc;">SEPETTE</small>
                                <strong style="font-size: 20px;">{{ product.newPrice }} TL</strong>
                            </div>
                            <!-- Sepete Ekle Butonu -->
                            <button @click="toggleCart(product)"
                                :class="['btn', product.isInCart ? 'btn-success' : 'btn-outline-primary']"
                                :style="product.isInCart ? { backgroundColor: '#5d3ebc', color: 'white' } : {}">
                                {{ product.isInCart ? '✓' : '+' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProductList",
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: ['https://n11scdn.akamaized.net/a1/602_857/10/39/16/27/IMG-4245644001429526644.jpg', 'https://n11scdn1.akamaized.net/a1/602_857/13/31/22/13/IMG-8678318709044231616.jpg', 'https://n11scdn1.akamaized.net/a1/602_857/10/80/03/59/IMG-3210138926246314090.jpg'],
                    name: 'Xiaomi Redmi 13C 8 GB 256 GB',
                    rating: 5,
                    reviews: 1534,
                    freeShipping: true,
                    newPrice: '7.849',
                    isFavorite: true,
                    isInCart: false,
                    currentImageIndex: 0,
                },
                {
                    id: 2,
                    image: ['https://n11scdn.akamaized.net/a1/602_857/10/06/54/88/IMG-8334626094009706925.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/16/43/58/64/IMG-1763576059426755351.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/12/30/67/89/IMG-3284137083717189805.jpg'],
                    name: 'Xiaomi Redmi Note 13 Pro 12 GB 512 GB',
                    rating: 5,
                    reviews: 1080,
                    freeShipping: true,
                    newPrice: '16.299',
                    isFavorite: false,
                    isInCart: false,
                    currentImageIndex: 0,

                },
                {
                    id: 4,
                    image: ['https://n11scdn.akamaized.net/a1/602_857/04/24/50/43/IMG-1394957595847336959.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/11/47/59/27/IMG-6531938349141314197.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/16/28/41/69/IMG-5713165578069952938.jpg'],
                    name: 'Xiaomi Redmi 13 8 GB 256 GB',
                    rating: 5,
                    reviews: 365,
                    freeShipping: true,
                    newPrice: '8.399',
                    isFavorite: false,
                    isInCart: false,
                },
                {
                    id: 3,
                    image: ['https://n11scdn.akamaized.net/a1/602_857/15/20/52/53/IMG-6224145959892147613.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/07/47/38/48/IMG-1094684767649376295.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/07/26/04/68/IMG-7450695549168178451.jpg'],
                    name: 'Samsung Galaxy A55 5G 8 GB 256 GB',
                    rating: 5,
                    reviews: 385,
                    freeShipping: true,
                    oldPrice: '20.069',
                    newPrice: '19.219',
                    isFavorite: false,
                    isInCart: true,
                },
                {
                    id: 5,
                    image: ['https://n11scdn.akamaized.net/a1/602_857/07/73/85/29/IMG-8486161027511362752.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/05/14/89/98/IMG-4038291839461525450.jpg',
                        'https://n11scdn1.akamaized.net/a1/602_857/08/72/79/95/IMG-3978934065991784613.jpg'],
                    name: 'Apple iPhone 15 128 GB (Apple Türkiye Garantili)',
                    rating: 4,
                    reviews: 2500,
                    freeShipping: false,
                    oldPrice: '53.465',
                    newPrice: '51.949',
                    isFavorite: false,
                    isInCart: true,
                },
                {
                    id: 6,
                    image: 'https://via.placeholder.com/150',
                    name: 'Samsung Galaxy S22 128 GB',
                    rating: 4.8,
                    reviews: 1200,
                    freeShipping: true,
                    newPrice: '18.499',
                    isFavorite: false,
                    isInCart: false,
                },
                {
                    id: 7,
                    image: 'https://via.placeholder.com/150',
                    name: 'Google Pixel 7 256 GB',
                    rating: 4.7,
                    reviews: 800,
                    freeShipping: true,
                    newPrice: '20.499',
                    isFavorite: false,
                    isInCart: false,
                },
                {
                    id: 8,
                    image: 'https://via.placeholder.com/150',
                    name: 'Huawei P50 Pro 256 GB',
                    rating: 4.6,
                    reviews: 950,
                    freeShipping: false,
                    oldPrice: '22.999',
                    newPrice: '21.499',
                    isFavorite: false,
                    isInCart: false,
                },
            ],
        };
    },
    methods: {
        toggleFavorite(product: any) {
            product.isFavorite = !product.isFavorite;
        },

        toggleCart(product: any) {
            product.isInCart = !product.isInCart;
        },

        onMouseMove(event: MouseEvent, productId: number) {
            const product = this.products.find(p => p.id === productId);
            if (!product) return;

            const target = event.currentTarget as HTMLElement | null;
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;

            if (mouseX < rect.width / 3) {
                product.currentImageIndex = 0;
            } else if (mouseX < (2 * rect.width) / 3) {
                product.currentImageIndex = 1;
            } else {
                product.currentImageIndex = 2;
            }
        },
        resetImageIndex(productId: number) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.currentImageIndex = 0;
            }
        },
    },
});
</script>

<style scoped>
.product-card {
    width: 100%;
    max-width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}

.product-image {
    object-fit: contain;
    border: 0.05px solid #e5e4e6;
    max-width: 100%;
    max-height: 70%;
    display: block;
    margin: auto;
}

.product-image:hover {
    border: none;
}

.product-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-name:hover {
    text-decoration: underline;
    cursor: pointer;
}

.badge {
    font-size: 14px;
    text-align: center;
}

.btn-outline-dark {
    background-color: transparent;
    border: 2px solid black;
    border-radius: 50%;
    font-size: 24px;
}

.btn-success {
    background-color: #5d3ebc !important;
    border-color: #5d3ebc !important;
    color: white !important;
}

.bi-star-fill {
    font-size: 16px;
}

.bi-star {
    font-size: 16px;
}

.upper-section {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
    position: relative;
}

.upper-section img.product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.lower-section {
    padding: 10px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
}

/* Ücretsiz Kargo Pozisyonu */
.free-shipping {
    font-size: 14px;
    color: #5d3ebc;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}

/* Slider Dots */
.slider-dots {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: absolute;
    bottom: 10px;
    width: 100%;
}

.slider-dots .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background-color 0.3s;
}

.slider-dots .dot.active {
    background-color: #5d3ebc;
}
</style>