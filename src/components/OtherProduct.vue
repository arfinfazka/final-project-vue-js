<script setup>
import ProductItem from './ProductItem.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const productListStatus = ref(false)
const productList = ref();

onMounted(async () => {
    try {
        await store.dispatch("product/getProductData");
        productListStatus.value = true;
        productList.value = store.state.product.products;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <h1 class="other-product-title mb-3">Other Product</h1>
    <div class="row">
            <div class="col-lg-3" v-for="product in productList">
                <ProductItem :image="product.image" :price="product.price" :title="product.name" :id="product.id"/>
            </div>
    </div>
</template>

<style scoped>
    .other-product-title{
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
        color: #000000;
        font-family: "Inter", sans-serif;
    }
</style>