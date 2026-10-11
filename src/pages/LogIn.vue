<script setup lang="ts">
import UiInput from '@/components/UiInput.vue';
import UiInputGroup from '@/components/UiInputGroup.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

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
    <div class="container p-5">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="border shadow-sm rounded p-3">
                    <form @submit.prevent="onSubmit">
                        <h6 class="signup-title">Login to vintage</h6>
                        <p>Enter your details below</p>
                        <UiInput label="Email" placeholder="Enter your email" type="email" id="email" v-model="login.email"/>
                        <UiInputGroup label="Password" placeholder="Enter your password" :type="typePassword ? 'password' : 'text'" id="password" @button-click="seePassword" :icon="typePassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="login.password"/>
                        <button class="btn btn-primary w-100 mt-4" type="submit">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.signup-title {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #404040;
    font-family: "Inter", sans-serif;
}
</style>