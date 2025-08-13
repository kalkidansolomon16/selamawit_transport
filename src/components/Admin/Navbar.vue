<template>
  <div class="hidden lg:block">

    <div>
      <div class="bg-gray-900 fixed top-0 z-50">
          <div class="flex justify-between ">
  
              <div class="flex w-1/4 py-3 px-3">
                  <div class="w-1/8">
                      <img src="/images/logo_icon.jpeg" alt="" class="">
                  </div>
                  <div class="text-white ml-3 text-lg font-semibold">Selamawit Transaport</div>
              </div> 
              
                  <div class="flex w-1/12 py-3 hover:bg-gray-500 px-2 h-11 mr-2 mt-2 cursor-pointer" @click="toggleButton">
                      <div class="w-1/4">
                          <img src="/images/logo_icon.jpeg" alt="" class="rounded-full">
                      </div>
                      <div class="text-white  ml-2">Admin</div>
                  </div>
                 
          </div>
          
  
      </div>
     
    </div>
     <div class=" absolute bg-white rounded-md text-sm p-3 rounded-white shadow-md w-1/7 ml-297 -mt-3 z-10" v-if="activeButton">
                   <div class="flex text-black cursor-pointer">
                     <i class="fa-solid fa-gear"></i>
                     <p class="-mt-1 ml-2">Setting</p>
                   </div> 
                     <div class="flex text-black mt-6 cursor-pointer" @click="authStore.logOutUser">
                     <i class="fa-solid fa-arrow-right-from-bracket"></i>
                     <p class="-mt-1 ml-2">Logout</p>
                   </div>  
                 </div>
  </div>
  <div class="block lg:hidden">

    <div class=" bg-gray-900 fixed top-0 z-50  w-93 px-2 md:w-192 md:h-16 ">
  <div class="flex justify-between">
  
  <div @click="toggleSideBar" class="cursor-pointer">
  <i class="fa-solid fa-list text-white text-2xl mt-5">
  
  </i>
  </div>
  
  <div>
    
                <div class= " py-3 px-3 ml-10  md:w-12/10">
                    <div class="mt-2 md:mt-1 flex">
                        <img src="/images/logo_icon.jpeg" alt="" class="w-1/3 md:w-1/10 md:-mt-1"> 
                        <p class="text-white hidden md:block ml-5 font-bold text-xl">Selamawit Transaport</p>
                    </div>
                 
  
                </div>
  </div>
     <div class=" py-3   px-2 h-11 mr-2 mt-2 md:-mt-1 cursor-pointer" @click="toggleButton">
                        <div class="">
                            <img src="/images/logo_icon.jpeg" alt="" class="rounded-full w-1/5 md:w-1/7 ml-30 md:ml-70">
                        </div>
  
                    </div>
  </div>
    </div>
       <div class=" absolute bg-white rounded-md text-sm p-3 rounded-white shadow-md w-1/4 mt-2 z-10 ml-140" v-if="activeButton">
                   <div class="flex text-black cursor-pointer">
                     <i class="fa-solid fa-gear"></i>
                     <p class="-mt-1 ml-2">Setting</p>
                   </div> 
                     <div class="flex text-black mt-6 cursor-pointer" @click="authStore.logOutUser">
                     <i class="fa-solid fa-arrow-right-from-bracket"></i>
                     <p class="-mt-1 ml-2">Logout</p>
                   </div>  
                 </div>
<div class="flex items-start " v-if="showSideBar" >
  <SideBar class="z-50" showSideBar = "showSideBar"/>
  

</div>

  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import SideBar from './SideBar.vue';
const activeButton = ref(false)
const toggleButton = ()=>{
    activeButton.value = !activeButton.value
}
const authStore = useAuthStore()
const showSideBar = ref(false)
const toggleSideBar = ()=>{
  // alert(`hello`)
  showSideBar.value = !showSideBar.value
}

</script>

<style>

</style>