import DetailProduct from "./pages/DetailProduct.vue";
import Home from "./pages/Home.vue";
import SignUp from "./pages/SignUp.vue";
import LogIn from "./pages/LogIn.vue";
import User from "./pages/User.vue";
import Cookies from "js-cookie";
import { store } from "./store/index.js";

export const routes = [
    {path: "/", name: "home", component: Home, beforeEnter: async () => {await checkAuth ()},},
    {path: "/product/:id", name: "detail-product", component: DetailProduct},
    {path: "/signup", name: "signup", component: SignUp},
    {path: "/login", name: "login", component: LogIn},
    {path: "/user", name: "user", component: User, beforeEnter: async (to, from, next) => {
        await checkAuth () ? next () : next ({ name: "login" });
    }},
]

const checkAuth = async () => {
    const jwtCookie = Cookies.get("jwt");
    const expirationDate = Cookies.get("tokenExpirationDate");
    const userId = Cookies.get("UID");

    if (jwtCookie) {
        if (new Date().getTime() < +expirationDate) {
            store.commit("auth/setToken", {
                idToken: jwtCookie,
                expireIn: expirationDate,
            });
            await store.dispatch("auth/getUser", userId);
            return true;
        } else {
            store.commit("auth/setUserLogout");
            return false;
        }
    } else {
        return false;
    }
};