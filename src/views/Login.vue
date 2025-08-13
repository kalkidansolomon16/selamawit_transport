<template>
<div class="">
    <div class="background"></div>
    <div class="content bg-white shadow-md lg:w-1/4 md:w-1/2 md:pb-10  mx-auto mt-40 lg:p-3 rounded-lg w-5/6 p-5">
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Login to your account</h1>
            <p class="text-gray-400 text-sm">Enter your credentials below</p>
        </div>
        <div>
            <p class="text-sm">Email</p>
            <input type="email" placeholder="@  john@doe.com" class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-10/10 focus:outline-blue-300 bg-blue-50" v-model="authStore.email">
        </div>
          <div class="mt-5">
            <p class="text-sm">Password</p>
            <div class="mt-2 border border-gray-300 rounded-md p-2  font-semibold w-10/10 focus:outline-blue-300 bg-blue-50">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="........" class="ml-1 placeholder:text-3xl focus:outline-none " v-model="authStore.password">
            </div>
        </div>
        <div>
            <Button class="w-10/10 bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="authStore.handleLogin">Sign in</Button>
        </div>
    </div>
</div>
</template>

<script>
import { Button } from '@/components/ui/button'
// import Input from '@/components/ui/input';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
export default {
    components:{
Button,

    },
setup(){
    // const email = ref('')
    // const password = ref('')
    // const currentUser=ref('')
    const authStore = ref('')

   
    // const login = ()=>{
const login = ()=>{
 authStore.value = useAuthStore();
}
    onMounted(()=>{
       const token = localStorage.getItem("token");
        if (token) {
          axios.defaults.withCredentials = true;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        login();
    }
   ) 
    // }
    return{
    // email,
    // password,
    // currentUser,
    authStore,
    login
    }


}}
</script>

<style>
.background{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url('public/images/banner6.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    z-index:-1;

}

.content{
    position:relative;
    z-index:1;
}
</style>



