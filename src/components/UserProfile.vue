<script setup>
import UiInput from '@/components/UiInput.vue';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const profile = ref({
    fullname: '',
    username: '',
    email: '',
})

const store = useStore()


onMounted(()=>{
    const loginData = store.state.auth.userLogin
    profile.value.fullname = loginData.fullname
    profile.value.username = loginData.username
    profile.value.email = loginData.email
})
</script>

<template>
    <div>
        <h6 class="title1">Edit Profile</h6>
        <div class="d-flex justify-content-between popular-item-container mt-5 mb-4">
            <h3 class="title2">Photo</h3>
            <div class="d-flex justify-content-between popular-item-container">
                <Icon class="me-3" icon="healthicons:ui-user-profile" height="40" width="40" color="teal" />
                <button type="button" class="btn btn-outline-secondary me-2 mb-2 shop-button">Choose</button>
                <h2 class="typefile">JPG, JPEG or PNG, 1 MB max.</h2>
                <Icon class="me-3" icon="bi:trash" height="24" width="24" color="gray" />
            </div>
        </div>
        <UiInput label="Full name" placeholder="Jack Daniel" type="text" id="fullname" v-model="profile.fullname" />
        <UiInput label="Username" placeholder="jackdaniel" type="text" id="username" v-model="profile.username"/>
        <UiInput label="Email" placeholder="jack@gmail.com" type="email" id="email" v-model="profile.email"/>
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary mt-4" type="submit">Update Profile</button>
        </div>
    </div>
</template>

<style scoped>
.typefile {
    font-size: 14px;
    line-height: 20px;
    color: #404040;
}
.title2 {
    font-size: 14px;
    line-height: 20px;
    color: #0A0A0A;
}
</style>