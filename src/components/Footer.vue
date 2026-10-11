
<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="bg-primary pt-5 pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-3">
                    <h2 class="footer-subtitle">Vintage</h2>
                    <ul type="none" class="footer-list-container">
                        <li class="footer-list">About us</li>
                        <li class="footer-list">Sustainability</li>
                        <li class="footer-list">Blog</li>
                        <li class="footer-list">Advertising</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h2 class="footer-subtitle">Discover</h2>
                    <ul type="none" class="footer-list-container">
                        <li class="footer-list">How it works</li>
                        <li class="footer-list">Help center</li>
                        <li class="footer-list">infoboard</li>
                        <li class="footer-list">Mobile apps</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h2 class="footer-subtitle">Help</h2>
                    <ul type="none" class="footer-list-container">
                        <li class="footer-list">Help center</li>
                        <li class="footer-list">Buying</li>
                        <li class="footer-list">Trust & Safety</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h2 class="footer-subtitle">Community</h2>
                    <ul type="none" class="footer-list-container">
                        <li class="footer-list">Forum</li>
                    </ul>
                </div>
            </div>
            <div class="row justify-content-between border-top pt-3 mt-5">
                <div class="col-3">
                    <Icon class="me-3" icon="mdi:whatsapp" height="24" width="24" color="#FFFFFF"/>
                    <Icon class="me-3" icon="mdi:instagram" height="24" width="24" color="#FFFFFF"/>
                    <Icon icon="mdi:linkedin" height="24" width="24" color="#FFFFFF"/>
                </div>
                <div class="col-3">
                    <h2 class="footer-copyright">&copy; Vintage, 2023</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer-subtitle{
        font-size: 18px;
        line-height: 26px;
        font-weight: 500;
        color: #f5f5f5;
        font-family: "Inter", sans-serif;
        margin-bottom: 16px;
    }
    .footer-list{
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #f5f5f5;
        font-family: "Inter", sans-serif;
        margin-bottom: 16px;
    }
    .footer-list-container{
        padding-left: 0;
    }

    .footer-copyright{
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #FFFFFF;
        font-family: "Inter", sans-serif;
        text-align: right;
    }
</style>
