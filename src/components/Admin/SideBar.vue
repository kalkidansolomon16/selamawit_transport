<template>
  <div class="">
    <div class=" fixed lg:top-16 top-0 left-0 h-screen md:h-200 bg-gray-900 lg:w-1/5 w-2/3 md:w-1/3  border-t border-t-gray-700  overflow-y-auto pb-50 px-3">
<div class="pt-10 flex">
    <p class="text-gray-400 text-xs ">GENERAL</p>
      <button 
     
    class="block lg:hidden ml-34 md:ml-40 -mt-1 p-2 h-8 cursor-pointer bg-gray-700  rounded-4xl text-white z-10" @click="closeSidebar">
    <i class="fa-solid fa-xmark text-2xl -mt-1"></i>
  </button>
</div>
<router-link to="/admin" :class="isActive('/admin') ? 'bg-gray-700' : 'bg-transparent'" class="flex py-2 px-4 text-white text-sm mt-5" @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-house"></i></div>
<div>Dashbord</div>
</router-link>
 <p class="text-gray-400 text-xs mt-4">ORDERS</p>
 <router-link to="/order" :class="isActive('/order') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-1" @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Order</div>
 </router-link>
     <router-link to="/expense" :class="isActive('/expense') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
    <p class="text-gray-400 text-xs mt-4">REPORT</p>
     <router-link  :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
      <div  @click="toggleDropDown" class="flex">

        <div class="mr-2"><i class="fa-solid fa-bars-staggered"></i></div>
        <div>Report</div>
        <i class="fa-solid fa-chevron-down lg:ml-38 ml-34 mt-1" v-if="showDropDown"></i>
        <i class="fa-solid fa-angle-right lg:ml-38 mt-1 ml-34"></i>
      </div>
       </router-link>
<div class="ml-5 mt-4" v-if="showDropDown">
 <router-link to="/own-summary" :class="isActive('/own-summary') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-file"></i></div>
<div>Own summary</div>
     </router-link>
      <!-- <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
      <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
      <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
           <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
           <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
           <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
           <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
           <router-link to="/" :class="isActive('/') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link> -->
</div>
    
    <p class="text-gray-400 text-xs mt-4">SETTING</p>
         <router-link to="/expense-type" :class="isActive('/expense-type') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense Type</div>

         </router-link>
         <router-link to="/vehicles" :class="isActive('/vehicles') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-truck "></i></div>
<div>Vehicles</div>

         </router-link>
         <router-link to="/employees" :class="isActive('/employees') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-solid fa-users  text-gray-400"></i></div>
<div>Employees</div>

         </router-link>
             <router-link to="/location" :class="isActive('/location') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Location</div>

             </router-link>
             <router-link to="/load-type" :class="isActive('/load-type') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Load Type</div>

             </router-link>
             <router-link to="/bank" :class="isActive('/bank') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Bank</div>

             </router-link>
      <p class="text-gray-400 text-xs mt-4">USER MANAGEMENT</p>
                   <router-link to="/clients" :class="isActive('/clients') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Clients</div>

                   </router-link>
                 <router-link to="/system-user" :class="isActive('/system-user') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>System User</div>

                 </router-link>
                 <router-link to="/role" :class="isActive('/role') ? 'bg-gray-700 py-2' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 " @click="closeSidebar">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Role And Permission</div>

                 </router-link>
</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path)=>route.path === path
const showDropDown = ref(false);

const toggleDropDown = ()=>{
  showDropDown.value = !showDropDown.value
}

const props = defineProps(["showSideBar"])
const emit = defineEmits(['update:showSideBar']);

const closeSidebar = ()=>{
     emit('update:showSideBar',false)
     console.log('Sidebar Closed')
}
</script>

<style>

</style>