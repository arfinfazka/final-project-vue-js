<script setup lang="ts">
import UiInput from '@/components/UiInput.vue';
import UiInputGroup from '@/components/UiInputGroup.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const typePassword = ref(true)
const typeConfirmationPassword = ref(true)
const store = useStore()
const router = useRouter()

const seePassword = () => {
    typePassword.value = !typePassword.value
}

const seeConfirmationPassword = () => {
    typeConfirmationPassword.value = !typeConfirmationPassword.value
}

const register = ref({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmationpassword: '',
})
const onSubmit = async () => {
    await store.dispatch("auth/register", register.value)
    router.push("/")
}

</script>



<template>
    <div class="container p-5">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="border shadow-sm rounded p-3">
                    <form @submit.prevent="onSubmit">
                        <h6 class="signup-title">Sign up</h6>
                        <p>Enter your details below</p>
                        <UiInput label="Full name" placeholder="Enter your fullname" type="text" id="fullname" v-model="register.fullname"/>
                        <UiInput label="Username" placeholder="Enter your username" type="text" id="username" v-model="register.username"/>
                        <UiInput label="Email" placeholder="Enter your email" type="email" id="email" v-model="register.email"/>
                        <UiInputGroup label="Password" placeholder="Enter your password" :type="typePassword ? 'password' : 'text'" id="password" @button-click="seePassword" :icon="typePassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="register.password"/>
                        <UiInputGroup label="Confirmation Password" placeholder="Enter your password" :type="typeConfirmationPassword ? 'password' : 'text'" id="confirmationpassword" @button-click="seeConfirmationPassword" :icon="typeConfirmationPassword ? 'mdi:eye' : 'mdi:eye-off'" v-model="register.confirmationpassword"/>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                            <label class="form-check-label" for="checkDefault">
                                By clicking sign up, I hereby agree and consent to Term & Conditions; I confirm that I have read Privacy policy.
                            </label>
                        </div>
                        <button class="btn btn-primary w-100 mt-4" type="submit">Sign Up</button>
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