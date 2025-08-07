<template>
  <div>
    <div class=" fixed top-16 left-0 h-screen bg-gray-900 w-1/5 border-t border-t-gray-50  overflow-y-auto pb-50">
<div class="pt-10">
    <p class="text-gray-400 text-xs">GENERAL</p>
</div>
<router-link to="/admin" :class="isActive('/admin') ? 'bg-gray-700' : 'bg-transparent'" class="flex py-2 px-4 text-white text-sm mt-5">
<div class="mr-2"><i class="fa-solid fa-house"></i></div>
<div>Dashbord</div>
</router-link>
 <p class="text-gray-400 text-xs mt-4">ORDERS</p>
 <router-link to="/order" :class="isActive('/order') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Order</div>
 </router-link>
     <router-link to="/expense" :class="isActive('/expense') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<div>Expense</div>
     </router-link>
    <p class="text-gray-400 text-xs mt-4">REPORT</p>
     <router-link to="/report" :class="isActive('/report') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Report</div>

     </router-link>
    <p class="text-gray-400 text-xs mt-4">SETTING</p>
         <router-link to="/expense-type" :class="isActive('/expense-type') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Expense Type</div>

         </router-link>
         <router-link to="/vehicles" :class="isActive('/vehicles') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Vehicles</div>

         </router-link>
         <router-link to="/employees" :class="isActive('/employees') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Employees</div>

         </router-link>
             <router-link to="/location" :class="isActive('/location') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Location</div>

             </router-link>
             <router-link to="/load-type" :class="isActive('/load-type') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Load Type</div>

             </router-link>
             <router-link to="/bank" :class="isActive('/bank') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Bank</div>

             </router-link>
      <p class="text-gray-400 text-xs mt-4">USER MANAGEMENT</p>
                   <router-link to="/clients" :class="isActive('/clients') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Clients</div>

                   </router-link>
                 <router-link to="/system-user" :class="isActive('/system-user') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>System User</div>

                 </router-link>
                 <router-link to="/role" :class="isActive('/role') ? 'bg-gray-700' : 'bg-transparent'" class="flex text-white text-sm mt-5 px-4 py-2">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<div>Role And Permission</div>

                 </router-link>
</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path)=>route.path === path

</script>

<style>

</style>