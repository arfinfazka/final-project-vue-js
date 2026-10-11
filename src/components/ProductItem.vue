
<script setup>
import { Icon } from '@iconify/vue';
defineProps ({
    image: String,
    price: String,
    title: String,
    id: String,
})
</script>

<template>
    <RouterLink class="text-decoration-none" :to="`/product/${id}`">
        <img :src="image" class="card-img-top" alt="...">
        <div class="mt-2">
            <p class="popular-item-price mb-0">{{ price }}</p>
            <p class="mb-4 popular-item-title">{{ title}}</p>
            <div class="d-flex justify-content-between">
                <p class="popular-item-detail">8 / M</p>
                <Icon class="popular-item-favourite" icon="mdi:favourite-border" height="24" width="24" color="black"/>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped> 
    .popular-item-price{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: #0D6B6F;
        font-family: "Inter", sans-serif;
    }
    .popular-item-name{
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #404040;
        font-family: "Inter", sans-serif;
    }
    .popular-item-detail{
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #616161;
        font-family: "Inter", sans-serif;
    }
    .popular-item-favourite{
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #616161;
        font-family: "Inter", sans-serif;
    }
    .popular-item-title{
        color: black;
    }
</style>