<template>
    <Navbar/>
    
    <SideBar class="mt-16"/>
    <div class="shadow-md ml-68 px-3 py-2">
        <div class="flex">
<div class="mr-2"><i class="fa-solid fa-house"></i></div>
            <h1 class="text-sm mt-1">Dashbord</h1>
        </div>
    </div>
    <div class="bg-gray-200 -mt-10 h-200">

        <div class="ml-75 flex justify-between mt-10 pt-5 w-2/3 px-3">
    <div class="">
      <Card class="border-gray-200 rounded-md bg-white w-15/11 ">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-regular fa-user text-2xl"></i></div>
            <div class="ml-9"> 
<h1 class="font-semibold text-right">{{ userCount }}.0</h1>
<p class="text-sm">Syatem User</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
     <div class="">
      <Card class="border-gray-200 rounded-md bg-white w-15/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-truck text-2xl text-blue-400"></i></div>
            <div class="ml-10"> 
<h1 class="font-semibold text-right">{{ vehicleCount }}.0</h1>
<p class="text-sm">Vehicles</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
      <div>
      <Card class="border-gray-200 rounded-md bg-white w-15/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-users text-2xl text-red-400"></i></div>
            <div class="ml-10"> 
<h1 class="font-semibold text-right">{{ employeeCount }}.0</h1>
<p class="text-sm">Employees</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
      <div class="-mr-20 ">
      <Card class="border-gray-200 rounded-md bg-white w-15/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-regular fa-clipboard text-2xl text-green-600"></i></div>
            <div class="ml-10"> 
<h1 class="font-semibold text-right">{{ orderCount }}.0</h1>
<p class="text-sm">Orders</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
        </div>
                <div class="ml-75 flex justify-between  pt-5 w-2/3 px-3">
    <div class="mr-5">
      <Card class="border-gray-200 rounded-md bg-white w-14/11 ">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-money-bill text-2xl"></i></div>
            <div class="ml-9"> 
<h1 class="font-semibold text-right ">{{ totalRevennue }}</h1>
<p class="text-sm">Yearly Income</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
     <div class="">
      <Card class="border-gray-200 rounded-md bg-white w-13/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-e text-2xl text-red-400"></i></div>
            <div class="ml-10"> 
<h1 class="font-semibold text-right">{{ totalAmount }}</h1>
<p class="text-sm">Yearly Expense</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
      <div>
      <Card class="border-gray-200 rounded-md bg-white w-13/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-money-bill-1 text-2xl text-blue-400"></i></div>
            <div class="ml-8"> 
<h1 class="font-semibold text-right">0.0</h1>
<p class="text-sm">Monthly Income</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
      <div class="-mr-25">
      <Card class="border-gray-200 rounded-md bg-white w-13/11">
        <CardContent>
         <div class="flex justify-between">
            <div><i class="fa-solid fa-e text-2xl text-red-400"></i></div>
            <div class=""> 
<h1 class="font-semibold text-right">0.0</h1>
<p class="text-sm">Monthly Expense</p>
            </div>
         </div>
        </CardContent>
      </Card>
    </div>
        </div>
        <div class="ml-78 rounded-md mt-5 bg-white shadow-md pt-5 px-3 w-3/4 h-120">
<div class="flex  ml-210">
<div class="">
    <Input type="number" placeholder="2025" class="border border-gray-300 rounded-md  px-3 focus:outline-none focus:ring focus:ring-blue-400" min="2025" />
</div>
<div class="ml-5">
    <Button class="bg-blue-500 text-white px-5 cursor-pointer hover:bg-cyan-700">Get</Button>
</div>
</div>
            <IncomeExpenseChart class="w-3/4 h-100 " />
        </div>
        <Footer class="ml-100"/> 
    </div>

</template>

<script setup>
import { ref } from 'vue';

import Input from '@/components/ui/input/Input.vue';
import  {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Navbar from '@/components/Admin/Navbar.vue';
import SideBar from '@/components/Admin/SideBar.vue';
import axios from 'axios';
import IncomeExpenseChart from '@/components/IncomeExpenseChart.vue';
import { onMounted } from 'vue';
import Button from '@/components/ui/button/Button.vue';
import Footer from '@/components/Admin/Footer.vue';
const userCount = ref(0);
const vehicleCount = ref(0);
const employeeCount = ref(0);
const orderCount = ref(0);
const totalRevennue = ref(0);
const totalAmount = ref(0);

const fetchUserCount = async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/users/count')
    userCount.value = response.data.count
    console.log('user Count',userCount.value)
}
const fetchVehicleCOunt = async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/vehicles/count')
    vehicleCount.value = response.data.count
    console.log('vehicle count',vehicleCount.value)

}
const fetchEmployeeCount = async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/vehicles/count');
    employeeCount.value = response.data.count
    console.log('Employee Count' , employeeCount.value)
}
const fetchOrderCount = async()=>{
const response = await axios.get('http://127.0.0.1:8000/api/orders/count')
orderCount.value = response.data.count
console.log('Order Count',orderCount.value)
}
const totalRevvenue = async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/orders/total-revenue')
    totalRevennue.value = response.data.total_revenue
    console.log('Total Revennue', totalRevennue.value )
}
const GettotalAmount = async()=>{
const response = await axios.get('http://127.0.0.1:8000/api/expenses/total-amount')
totalAmount.value = response.data.total_expense
console.log('Total Expense',totalAmount.value)
}
onMounted(()=>{
    fetchUserCount();
    fetchVehicleCOunt();
    fetchEmployeeCount();
    fetchOrderCount();
    totalRevvenue();
    GettotalAmount();
})

</script>

<style>

</style>