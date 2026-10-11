<script setup>
import { ref } from 'vue';
import OtherProduct from './OtherProduct.vue';
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const route = useRoute()
const productDetail = ref()

onMounted(async () => {
    await store.dispatch(
        "product/getProductDetail", route.params.id
    )
    productDetail.value = store.state.product.productDetail
})

const itemDescription = ref([
    { name: "Category", value: "Hoodies and Sweater" },
    { name: "Size", value: "8 / M" },
    { name: "Condition", value: "Very Good" },
    { name: "Color", value: "White" },
    { name: "Uploaded", value: "5 hours ago" },
    { name: "Shipping", value: "Rp20.000" },
])
</script>


<template>
    <div class="row mt-5" v-if="productDetail">
        <div class="col-lg-8">
            <img class="w-100 mb-5" :src="productDetail.image" />
            <OtherProduct />
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="border-bottom mb-3">
                        <h3 class="popular-detail-price">{{ productDetail.price }}</h3>
                        <p class="popular-detail-name">{{ productDetail.name }}</p>
                        <div class="d-flex justify-content-between">
                            <p class="popular-item-detail">{{ productDetail.size}}</p>
                            <p class="popular-item-detail">Very Good</p>
                            <p class="popular-item-detail">Denpasar</p>
                        </div>
                    </div>
                    <div>
                        <h2 class="popular-item-detail">Item Description</h2>
                        <p>{{ productDetail.description }}</p>
                    </div>
                    <div class="border-bottom mb-3 pb-3">
                        <div class="row py-2" v-for="item in itemDescription">
                            <div class="col-lg-4 popular-detail-category">{{ item.name }}</div>
                            <div class="col-lg-8 popular-detail-category">{{
                                productDetail[item.name.toLowerCase()] ? productDetail[item.name.toLowerCase()]:item.value}}
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom mb-3 pb-3">
                        <button class="btn btn-primary w-100 mb-3" type="submit">Buy Now</button>
                        <button type="button" class="btn btn-outline-primary me-2 w-100">Add To Cart</button>
                    </div>
                    <div class="row">
                        <div class="col-lg-2"><img src="../assets/images/Avatar v.1 Deprecated.png" /></div>
                        <div class="col-lg-10">
                            <h2 class="jack mb-0">Jack on the corner</h2>
                            <Icon v-for="item in 5" class="me-1" icon="ant-design:star-filled" height="16" width="16"
                                color="#FC9918" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popular-detail-price {
    font-size: 28px;
    line-height: 36px;
    font-weight: 500;
    color: #0A0A0A;
    font-family: "Inter", sans-serif;
}

.popular-detail-name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #0A0A0A;
    font-family: "Inter", sans-serif;
}

.popular-item-detail {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #616161;
    font-family: "Inter", sans-serif;
}

.popular-detail-category {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #0A0A0A;
    font-family: "Inter", sans-serif;
}

.jack {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #404040;
    font-family: "Inter", sans-serif;
}
</style>