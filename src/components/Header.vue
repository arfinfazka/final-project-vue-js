<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const getToken = computed(() => {
return store.state.auth.token
})
const logout = () => {
    store.commit("auth/setUserLogout")
    router.push("/")
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex me-auto ms-auto" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul class="navbar-nav mb-2 mb-lg-0" v-if="!getToken">
                    <li class="nav-item">
                        <RouterLink type="button" class="btn btn-outline-primary me-2" to="/login">Login</RouterLink>
                    </li>
                    <li class="nav-item me-4">
                        <RouterLink class="btn btn-primary" type="submit" to="/signup">Sign Up</RouterLink>
                    </li>
                    <li class="nav-item dropdown ps-4 border-start">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            EN
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0" v-else>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu">
                            <li><RouterLink class="dropdown-item" to="/user">Profile</RouterLink></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-item" @click="logout">Log Out</li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ps-4 border-start">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            EN
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>