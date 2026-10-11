<script setup>
import ProductItem from './ProductItem.vue';
import SeeAllProduct from './SeeAllProduct.vue';
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
    <div>
        <div class="d-flex justify-content-between popular-item-container mt-5">
            <h2 class="popular-item-title">Popular item</h2>
            <a class="popular-item-link">See all</a>
        </div>
        <div v-if="!productListStatus">
            <p>loading</p>
        </div>
        <div class="row" v-else>
            <div class="col-lg-2" v-for="product in productList">
                <ProductItem :image="product.image" :price="product.price" :title="product.name" :id="product.id"/>
            </div>

            <div class="col-lg-2">
                <SeeAllProduct/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .popular-item-title{
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
        color: #000000;
        font-family: "Inter", sans-serif;
    }

    .popular-item-link{
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #009499;
        font-family: "Inter", sans-serif;
        text-decoration: none;
    }

    .popular-item-container{
        margin-bottom: 24px;
    }
</style>