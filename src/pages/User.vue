<script setup>
import { Icon } from '@iconify/vue';
import UiInputGroup from '@/components/UiInputGroup.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

const typePassword = ref(true)
const store = useStore()
const router = useRouter()


const seePassword = () => {
    typePassword.value = !typePassword.value
}

const login = ref({
    email: '',
    password: '',
})
const onSubmit = async () => {
    await store.dispatch("auth/login", login.value)
    router.push("/")
}

</script>

<template>
    <div class="user-background pt-5 pb-5">
        <div class="container">
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3 pe-5" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <button class="nav-link active button-color" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="true">Profile details</button>
                    <button class="nav-link button-color" id="v-pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Change Password</button>
                    <button class="nav-link button-color" id="v-pills-messages-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                        aria-selected="false">Transaction History</button>
                </div>
                <div class="tab-content flex-grow-1" id="v-pills-tabContent">
                    <div class="tab-pane fade show active profile-detail m-3 p-3" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab" tabindex="0">
                        <UserProfile/>
                    </div>
                    <div class="tab-pane profile-detail m-3 p-3" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <h6 class="title1">Change Password</h6>
                        <UiInputGroup label="Old Password" placeholder="Old password" :type="typePassword ? 'password' : 'text'" id="password" @button-click="seePassword" :icon="typePassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="login.password"/>
                        <UiInputGroup label="New Password" placeholder="New password" :type="typePassword ? 'password' : 'text'" id="password" @button-click="seePassword" :icon="typePassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="login.password"/>
                        <UiInputGroup label="Confirmation New Password" placeholder="Confirmation password" :type="typePassword ? 'password' : 'text'" id="password" @button-click="seePassword" :icon="typePassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="login.password"/>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary mt-4" type="submit">Save Changes</button>
                        </div>
                    </div>
                    <div class="tab-pane fade profile-detail" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab" tabindex="0">
                        <h6 class="title1">My Order</h6>
                        <div class="d-flex justify-content-center m-2">
                            <Icon class="me-3" icon="fa-solid:shopping-bag" height="100" width="100" color="teal" />
                        </div>
                        <div class="d-flex justify-content-center m-2">
                            <h2>No orders yet</h2>
                        </div>
                        <div class="d-flex justify-content-center ">
                            <h6 class="typefile">When you buy an item, your order about it will appear here.</h6>
                        </div>
                        <div class="d-flex justify-content-center m-2">
                            <button class="btn btn-primary mt-4" type="submit">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-background {
    background-color: #f5f5f5;
}

.profile-detail {
    background-color: white;
    border-radius: 12px;
}

.typefile {
    font-size: 14px;
    line-height: 20px;
    color: #404040;
}

.title1 {
    font-size: 14px;
    line-height: 20px;
    color: #616161;
}

.title2 {
    font-size: 14px;
    line-height: 20px;
    color: #0A0A0A;
}

.button-color{
    color: #616161;
}
</style>