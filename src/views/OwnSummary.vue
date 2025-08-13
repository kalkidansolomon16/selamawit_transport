<template>
    <Navbar class=""/>
    <div class="hidden lg:block">

      <SideBar class="mt-16"/>
    </div>
     <div class="shadow-md  ml-68 px-3 py-2 hidden lg:block">
        <div class="flex ">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<h1 class="text-sm mt-1">Own Summary</h1>
</div>
</div>
    <div class="block lg:hidden shadow-md mt-14  px-3 py-2 border-b border-b-gray-200 ">
        <div class="flex ">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<h1 class="text-sm mt-1 text-gray-400">Own Summary</h1>
</div>
</div>
<div class=" bg-gray-200  lg:h-200 py-3 ">
  <div class="block lg:hidden">

  <div class="bg-white  p-5 w-5/6 mx-auto shadow-sm rounded-md ">

  <div class=" ">
<label for="" class="text-sm">From</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'w-[280px] justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-35 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
    
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => value.start = startDate" />
  </PopoverContent>
</Popover>
</div>
<div class="">
<label for="" class="text-sm">To</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'w-[280px] justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-35 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
    
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => value.start = startDate" />
  </PopoverContent>
</Popover>
</div>

<div class="w-5/6 mx-auto mt-6">
      <Button class="bg-blue-500 text-white px-20 hover:bg-cyan-600 cursor-pointer">Get Report</Button>
  </div>
  </div> 
</div>
<div class="hidden lg:block">

  <div class="bg-white flex   ml-80 p-5 w-3/4 shadow-sm rounded-md ">

  <div class=" ">
<label for="" class="text-sm">From</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'w-[280px] justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-35 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
    
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => value.start = startDate" />
  </PopoverContent>
</Popover>
</div>
<div class=" ml-5">
<label for="" class="text-sm">To</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'w-[280px] justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-35 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
    
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => value.start = startDate" />
  </PopoverContent>
</Popover>
</div>

<div class="ml-3 mt-6">
      <Button class="bg-blue-500 text-white px-20 hover:bg-cyan-600 cursor-pointer">Get Report</Button>
  </div>
  </div> 
</div>
<div class="block lg:hidden">

  <div class="   pt-5 w-3/4 mx-auto">
      <div class="">
          <Card class="border-gray-200 rounded-md bg-white w-12/11 mx-auto -ml-3 ">
          <CardContent>
              <div class="flex justify-between">
                  <div><i class="fa-solid fa-money-bill text-2xl"></i></div>
                  <div class="ml-9"> 
                      <h1 class="font-semibold text-right ">{{ totalRevennue }}.0</h1>
                      <p class="text-sm">Yearly Income</p>
              </div>
           </div>
          </CardContent>
      </Card>
  </div>
       <div class="">
           <Card class="border-gray-200 rounded-md bg-white w-12/11 mx-auto -ml-3 mt-2">
          <CardContent>
           <div class="flex justify-between">
               <div><i class="fa-solid fa-e text-2xl text-red-400"></i></div>
               <div class="ml-10"> 
                   <h1 class="font-semibold text-right">{{ totalAmount }}.0</h1>
                   <p class="text-sm">Yearly Expense</p>
              </div>
          </div>
      </CardContent>
  </Card>
  </div>
  <div>
      <Card class="border-gray-200 rounded-md bg-white w-12/11 mx-auto -ml-3 mt-2">
          <CardContent>
           <div class="flex justify-between">
               <div><i class="fa-solid fa-money-bill-1 text-2xl text-blue-400"></i></div>
               <div class="ml-8"> 
  <h1 class="font-semibold text-right">{{ totalNetIncome }}.0</h1>
  <p class="text-sm">Net Income</p>
  </div>
  </div>
          </CardContent>
      </Card>
  </div>
  <div class="">
        <Card class="border-gray-200 rounded-md bg-white w-12/11 mx-auto -ml-3 mt-2">
            <CardContent>
                <div class="flex justify-between">
                    <div><i class="fa-solid fa-money-bill-1 text-2xl "></i></div>
                    <div class=""> 
                        <h1 class="font-semibold text-right">0.0</h1>
                        <p class="text-sm">Income in Percent</p>
                      </div>
                  </div>
          </CardContent>
      </Card>
      </div>
  </div>
</div>
<div class="hidden lg:block">

  <div class="ml-75 flex justify-between  pt-5 w-2/3 px-3">
      <div class="mr-5">
          <Card class="border-gray-200 rounded-md bg-white w-14/11 ">
          <CardContent>
              <div class="flex justify-between">
                  <div><i class="fa-solid fa-money-bill text-2xl"></i></div>
                  <div class="ml-9"> 
                      <h1 class="font-semibold text-right ">{{ totalRevennue }}.0</h1>
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
                   <h1 class="font-semibold text-right">{{ totalAmount }}.0</h1>
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
  <h1 class="font-semibold text-right">{{ totalNetIncome }}.0</h1>
  <p class="text-sm">Net Income</p>
  </div>
  </div>
          </CardContent>
      </Card>
  </div>
  <div class="-mr-25">
        <Card class="border-gray-200 rounded-md bg-white w-13/11">
            <CardContent>
                <div class="flex justify-between">
                    <div><i class="fa-solid fa-money-bill-1 text-2xl "></i></div>
                    <div class=""> 
                        <h1 class="font-semibold text-right">0.0</h1>
                        <p class="text-sm">Income in Percent</p>
                      </div>
                  </div>
          </CardContent>
      </Card>
      </div>
  </div>
</div>
    <div class="hidden lg:block  mx-80 rounded-sm text-sm w-3/4 bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchOrder"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
        <Table class="min-w-full border-collapse">
            
       <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
       <TableHeader class="">
      
         <TableRow class="">
           <TableHead class="py-5">
             # <i class="fa-solid fa-angle-down"></i>
           </TableHead>
               <TableHead class="">
             Order
           </TableHead>
       
             <TableHead class="">
             Truck Plate  No
           </TableHead>
           
             <TableHead class="">
             Trip
           </TableHead>
               <TableHead class="">
             Date of Dispach
           </TableHead>
             <TableHead class="">
            Product Carries
           </TableHead>
             <TableHead class="">
               Total Revenue
           </TableHead>
             <TableHead class="">
             Total Expense
           </TableHead>
             <TableHead class="">
             Net Income
           </TableHead>
         </TableRow>
       </TableHeader>
       <TableBody v-for="order in filteredOrders" :key="order" class="border-b border-b-gray-300 ">
         <TableRow class=" border-b border-gray-300 mt-4 ">
           <TableCell class="text-sm py-7">
             {{order.id}}
           </TableCell>
            <TableCell class="text-sm">
             {{order.order_name}}
           </TableCell>
           
           <TableCell>{{ order.plate_number }}</TableCell>
        
       
              <TableCell class="">
             {{ order.loading_place }} -  {{ order.destination }}
           </TableCell>
               <TableCell class="">
             {{ order.loading_date }}
           </TableCell>
                 <TableCell class="">
             {{ order.load_type }}
           </TableCell>
              <TableCell class="">
             {{ order.total_revenue	 }}
           </TableCell>
              <TableCell class="" >
             {{ expensesByOrder[order.id] }}
           </TableCell> 
              <TableCell class="" >
              {{ order.total_revenue - expensesByOrder[order.id]}}
           </TableCell> 
         
        
          
        
         </TableRow>
       </TableBody>
     </Table>
    </div> 

        <div class="block lg:hidden rounded-sm text-sm w-7/8 mx-auto bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchOrder"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
           <div class="max-h-72 overflow-y-auto ">

             <Table class="min-w-full border-collapse">
                 
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader class="">
           
              <TableRow class="">
                <TableHead class="py-5">
                  # <i class="fa-solid fa-angle-down"></i>
                </TableHead>
                    <TableHead class="">
                  Order
                </TableHead>
            
                  <TableHead class="">
                  Truck Plate  No
                </TableHead>
                
                  <TableHead class="">
                  Trip
                </TableHead>
                    <TableHead class="">
                  Date of Dispach
                </TableHead>
                  <TableHead class="">
                 Product Carries
                </TableHead>
                  <TableHead class="">
                    Total Revenue
                </TableHead>
                  <TableHead class="">
                  Total Expense
                </TableHead>
                  <TableHead class="">
                  Net Income
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="order in filteredOrders" :key="order" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 mt-4 ">
                <TableCell class="text-sm py-7">
                  {{order.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{order.order_name}}
                </TableCell>
                
                <TableCell>{{ order.plate_number }}</TableCell>
             
            
                   <TableCell class="">
                  {{ order.loading_place }} -  {{ order.destination }}
                </TableCell>
                    <TableCell class="">
                  {{ order.loading_date }}
                </TableCell>
                      <TableCell class="">
                  {{ order.load_type }}
                </TableCell>
                   <TableCell class="">
                  {{ order.total_revenue	 }}
                </TableCell>
                   <TableCell class="" >
                  {{ expensesByOrder[order.id] }}
                </TableCell> 
                   <TableCell class="" >
                   {{ order.total_revenue - expensesByOrder[order.id]}}
                </TableCell> 
              
             
               
             
              </TableRow>
            </TableBody>
          </Table>
           </div>
    </div> 
</div>

<div class="hidden lg:block">

  <Footer class=" ml-69 px-3 w-4/5 "/>
</div>
<div class="block  lg:hidden">
    <Footer class="  w-13/11 "/> 
</div>
</template>

<script setup>
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
import Button from '@/components/ui/button/Button.vue';

import axios from 'axios';
// import Table from '@/components/ui/table/Table.vue';
import { computed, onMounted, ref } from "vue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
import { CalendarIcon, Rss } from "lucide-vue-next";
import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RangeCalendar } from "@/components/ui/range-calendar";
import Input from '@/components/ui/input/Input.vue';
import Footer from '@/components/Admin/Footer.vue';
const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
});
const totalRevennue = ref(0);
const totalAmount = ref(0);
const orders = ref([])
const expensesByOrder = ref({})
const fetchOrders = async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/orders')
    orders.value = response.data.orders.data
    console.log('oreder',orders.value)
      for (const order of orders.value) {
    await fetchTotalExpense(order.id)
  }
}
const searchOrder = ref('')
const filteredOrders = computed(()=>{
  if(!searchOrder.value){
    return orders.value
  }
 

  return orders.value.filter(order=>
    order.order_name?.toLowerCase().includes(searchOrder.value.toLowerCase())
  )
})
 const totalNetIncome = computed(() => {
  const total = orders.value.reduce((sum, order) => {
    const expense = expensesByOrder.value[order.id] ?? 0
    const netIncome = Number(order.total_revenue) - Number(expense)
    return sum + netIncome
  }, 0)
    return total.toFixed(2)
})
const expense = ref([]);
const fetchTotalExpense = async (orderId) => {
  const response = await axios.get(`http://127.0.0.1:8000/api/expenses/total-expense/${orderId}`)


  const expenseArray = response.data.totalExpenses
  const expenseValue = Array.isArray(expenseArray) && expenseArray.length > 0
    ? Number(expenseArray[0].total_expense)
    : 0

  expensesByOrder.value[orderId] = expenseValue
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
    fetchOrders()
    fetchTotalExpense();
    totalRevvenue();
    GettotalAmount();
    
})
</script>

<style>

</style>