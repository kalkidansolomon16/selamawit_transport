<template>
  <div>
    <div class="bg-gray-900 fixed top-0 -z-0">
        <div class="flex justify-between ">

            <div class="flex w-1/4 py-3 px-3">
                <div class="w-1/8">
                    <img src="/images/logo_icon.jpeg" alt="" class="">
                </div>
                <div class="text-white ml-3 text-lg font-semibold">Selamawit Transaport</div>
            </div> 
            
                <div class="flex w-1/12 py-3 hover:bg-gray-500 px-2 h-11 mr-2" @click="toggleButton">
                    <div class="w-1/4">
                        <img src="/images/logo_icon.jpeg" alt="" class="rounded-full">
                    </div>
                    <div class="text-white  ml-2">Admin</div>
                </div>
               
        </div>
        

    </div>
   
  </div>
   <div class=" absolute bg-white rounded-md text-sm p-3 rounded-white shadow-md w-1/7 ml-297 -mt-5 z-10" v-if="activeButton">
                 <div class="flex text-black">
                   <i class="fa-solid fa-gear"></i>
                   <p class="-mt-1 ml-2">Setting</p>
                 </div> 
                   <div class="flex text-black mt-6">
                   <i class="fa-solid fa-arrow-right-from-bracket"></i>
                   <p class="-mt-1 ml-2">Logout</p>
                 </div>  
               </div>
</template>

<script setup>
import { ref } from 'vue';
const activeButton = ref(false)
const toggleButton = ()=>{
    activeButton.value = !activeButton.value
}
</script>

<style>

</style>