<template>
    <Navbar class=""/>
    <div class="hidden lg:block">

      <SideBar class="mt-16"/>
    </div>
     <div class="shadow-md  ml-68 px-3 py-2 hidden lg:block">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<h1 class="text-sm mt-1">Expense</h1>
</div>
</div>
 <div class="block lg:hidden shadow-md mt-14  px-3 py-2 border-b border-b-gray-200 ">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<h1 class="text-sm mt-1 text-gray-400">Expense</h1>
</div>
</div>
 
<div class=" bg-gray-200  h-200 py-3">
<div>
  <Button class="ml-60 lg:w-1/8 md:w-1/6 md:ml-150 lg:ml-295 mb-2 bg-blue-500 cursor-pointer hover:bg-cyan-600" @click="toggleModal">Add Expense</Button>
</div>
<div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="modalOpen">

     <div class="content bg-white shadow-md lg:w-1/2 lg:ml-70 w-3/4 -ml-17 md:-ml-35  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 lg:px-10">
      <button @click="modalOpen = false" class="lg:ml-150 md:ml-150 ml-60 cursor-pointer bg-red-500 lg:w-1/18 lg:h-8 md:w-1/15 md:h-11 w-1/6 h-12 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button>
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Register New Expense</h1>
           
        </div>
        <div class="flex mt-5">

          <div>
              <p class="text-sm">Expense Type</p>
              <input type="text" placeholder="enter expense type..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-13/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.expense_type">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Name</p>

                  
                  <input type="text" placeholder="enter name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.name">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Amount</p>
              <input type="number" placeholder="enter amount..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.amount">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Date</p>

                  
                  <input type="Date" placeholder="enter date..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-18/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.date">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">From</p>
              <input type="text" placeholder="enter bank account..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.from">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">To</p>

                  
                  <input type="text" placeholder="enter bank account..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.expense.to">
             
          </div>
        </div>
          <div class="flex mt-5">
        <div class="">
          <p class="text-sm">Order</p>

<select id="" v-model="model.expense.order_id"  class="w-13/10 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-21/10 md:w-21/10 focus:outline-blue-300 bg-blue-50">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="order in orders" :key="order" :value="order.id">{{ order.order_name }}</option>

</select>
         
      </div>
      
           <div class="lg:ml-42 md:ml-41 ml-13">
              <p class="text-sm">Remark</p>
              <input type="text" placeholder="remark..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" onchange="model.expense.remark">
          </div>
        </div>
           <div>
              <p class="text-sm">File</p>
              <input type="file" placeholder="enter destination..." class="w-4/9 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-7/14 md:w-4/9 focus:outline-blue-300 bg-blue-50" onchange="model.expense.file">
          </div>

        
        <div class="lg:w-4/5 md:w-4/5 w-6/7 lg:ml-50 md:ml-50 ml-20">
            <Button class="w-1/2  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="createExpense">Create Expense</Button>
        </div>
    </div>

</div>
<div class="block lg:hidden md:hidden">

  <div class=" bg-white    p-5 w-5/6 mx-auto shadow-sm rounded-md">
 
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
<div class="hidden lg:block md:block">

  <div class="bg-white flex lg:ml-80 md:ml-10 p-5 lg:w-3/4 md:w-5/6 shadow-sm rounded-md">
 
  <div class=" ">
<label for="" class="text-sm">From</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'lg:w-[280px] md:w-11/11 justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="lg:ml-35 h-4 w-4" />
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
<div class=" lg:ml-5 md:ml-5">
<label for="" class="text-sm">To</label> <br>
<Popover >
  <PopoverTrigger as-child>
    <Button
    class="border-gray-300"
      variant="outline"
      :class="cn(
        'lg:w-[280px] md:w-11/11 justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="lg:ml-35 h-4 w-4" />
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
      <Button class="bg-blue-500 text-white lg:px-20 md:px-10 hover:bg-cyan-600 cursor-pointer">Get Report</Button>
  </div>
  </div> 
</div>
    <div class="block lg:hidden  rounded-sm text-sm w-10/11 mx-auto bg-white mt-3 overflow-x-auto over relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchExpense"/> 
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
                  Expense<br> Type
                </TableHead>
                <TableHead class="">
                 Name
                </TableHead>
                  <TableHead class="">
                  Amount
                </TableHead>
                  <TableHead class="">
                  Date
                </TableHead>
                   <TableHead class="">
                  From
                </TableHead>
                  <TableHead class="">
                  To
                </TableHead>
                  <TableHead class="">
                  File
                </TableHead>
                  <TableHead class="">
                  Remark
                </TableHead>
                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="expense in filteredExpense" :key="expense" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 mt-4 ">
                <TableCell class="text-sm py-7">
                  {{expense.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{expense.expense_type}}
                </TableCell>
                 <TableCell class="">{{ expense.name }}</TableCell>
                <TableCell class="">{{ expense.amount }}</TableCell>
                <TableCell>{{ expense.date }}</TableCell>
                <TableCell class="">
                  {{ expense.from }}
                </TableCell>
                 <TableCell class="">
                  {{ expense.to }}
                </TableCell>
                   <TableCell class="">
                  {{ expense.file }}
                </TableCell>
                   <TableCell class="">
                  {{ expense.remark }}
                </TableCell>
    <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===expense.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(expense.id)"></i>

  <div
   v-if="activePopId === expense.id"
    class="absolute top-full -mt-7  right-0 z-50 w-24/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg"
  >
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(expense)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteExpense(expense.id)">
      <i class="fa-solid fa-trash"></i>
      <p class="ml-2">Delete</p>
    </div>
  </div>
</TableCell>
             
              </TableRow>
            </TableBody>
          </Table>
           </div>
    </div> 
    <div class="hidden lg:block mx-80 rounded-sm text-sm w-3/4 bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchExpense"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
           <div class="max-h-72 overflow-y-auto">

             <Table class="min-w-full border-collapse">
                 
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader class="">
           
              <TableRow class="">
                <TableHead class="py-5">
                  # <i class="fa-solid fa-angle-down"></i>
                </TableHead>
                    <TableHead class="">
                  Expense<br> Type
                </TableHead>
                <TableHead class="">
                 Name
                </TableHead>
                  <TableHead class="">
                  Amount
                </TableHead>
                  <TableHead class="">
                  Date
                </TableHead>
                   <TableHead class="">
                  From
                </TableHead>
                  <TableHead class="">
                  To
                </TableHead>
                  <TableHead class="">
                  File
                </TableHead>
                  <TableHead class="">
                  Remark
                </TableHead>
                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="expense in filteredExpense" :key="expense" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 mt-4 ">
                <TableCell class="text-sm py-7">
                  {{expense.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{expense.expense_type}}
                </TableCell>
                 <TableCell class="">{{ expense.name }}</TableCell>
                <TableCell class="">{{ expense.amount }}</TableCell>
                <TableCell>{{ expense.date }}</TableCell>
                <TableCell class="">
                  {{ expense.from }}
                </TableCell>
                 <TableCell class="">
                  {{ expense.to }}
                </TableCell>
                   <TableCell class="">
                  {{ expense.file }}
                </TableCell>
                   <TableCell class="">
                  {{ expense.remark }}
                </TableCell>
                         <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===expense.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(expense.id)"></i>

  <div
   v-if="activePopId === expense.id"
    class="absolute top-full -mt-7  right-0 z-50 w-24/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg"
  >
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(expense)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteExpense(expense.id)">
      <i class="fa-solid fa-trash"></i>
      <p class="ml-2">Delete</p>
    </div>
  </div>
</TableCell>
             
              </TableRow>
            </TableBody>
          </Table>
           </div>
           <div class="mt-3  bg-white p-1 ">
             <div class="flex gap-2 mt-4 items-center justify-end">
               <button @click="changePage(currentPage-1)" :disabled="currentPage===1" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer"><i class="fa-solid fa-arrow-left"></i></button>
               <button v-for="page in lastPage" :key="page"  @click="changePage(page)" :class="['px-3 py-1 rounded',page===currentPage?'bg-blue-500 text-white cursor-pointer':'bg-transparent cursor-pointer']">{{ page }}</button>
               <button @click="changePage(currentPage+1)" :disabled="currentPage===lastPage" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer"><i class="fa-solid fa-arrow-right"></i></button>
             </div>
           </div>
    </div> 
    
  <div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="editModalOpen">

     <div class="content bg-white shadow-md lg:w-1/2 lg:ml-70 w-3/4 -ml-17 md:-ml-35  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 lg:px-10">
      <!-- <button @click="modalOpen = false" class="lg:ml-150 md:ml-150 ml-60 cursor-pointer bg-red-500 lg:w-1/18 lg:h-8 md:w-1/15 md:h-11 w-1/6 h-12 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button> -->
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Edit Expense</h1>
           
        </div>
        <div class="flex mt-5">
          <div>
              <p class="text-sm">Expense Type</p>
              <input type="text" placeholder="enter expense type..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.expense_type">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Name</p> 
                  <input type="text" placeholder="enter name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.name">
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Amount</p>
              <input type="text" placeholder="enter amount..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.amount">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Date</p>

                  
                  <input type="text" placeholder="enter date..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.date">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">From</p>
              <input type="text" placeholder="enter account ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.from">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">To</p>

                  
                  <input type="text" placeholder="enter account ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedExpense.to">
             
          </div>
        </div>

        <div class="mt-5">
                  <div class="">
          <p class="text-sm">Choose Order </p>

<select id="" v-model="selectedExpense.order_id"  class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-5/10 focus:outline-blue-300 bg-blue-50">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="order in orders" :key="order" :value="order.id">{{ order.order_name }}</option>

</select>
         
      </div>
        </div>
        <div class="flex lg:w-3/4 lg:ml-35">
          <div class="lg:w-10/11 md:w-4/5 w-6/7   ">
            <button @click="editModalOpen = false" type="button" class="w-2/3  bg-red-500 rounded-md mt-5 p-2 text-white hover:bg-red-700 cursor-pointer">Cancel</button>
          </div>
          <div class="lg:w-10/11 md:w-4/5 w-7/8  lg:-ml-20 ">
              <Button class="w-3/4  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="submitEdit">Update Expense</Button>
          </div>
        </div>
    </div>

</div>
</div>
<div class="hidden lg:block">

  <Footer class=" ml-69 px-3 w-4/5 "/>
</div>
<div class="block lg:hidden">
    <Footer class="  w-13/11 "/> 
</div>
</template>

<script setup>
import Navbar from '@/components/Admin/Navbar.vue';
import SideBar from '@/components/Admin/SideBar.vue';
import Button from '@/components/ui/button/Button.vue';
import Footer from '@/components/Admin/Footer.vue';

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
import { AwardIcon, CalendarIcon, Rss } from "lucide-vue-next";
import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RangeCalendar } from "@/components/ui/range-calendar";
import Input from '@/components/ui/input/Input.vue';
import { useToast } from 'vue-toastification';
const toast = useToast()
const editModalOpen = ref(false)
const selectedExpense = ref({})
const deleteExpense = async(id)=>{
  const confirmed = confirm('Are You Sure You Want To Delete This Expense?')
  if(confirmed){

    const response = await axios.delete(`http://127.0.0.1:8000/api/expenses/${id}`)
  
    filteredExpense.value = filteredExpense.value.filter(expense=>expense.id!==id)
    console.log(response)
      toast.success('Expense Deleted Successfully')
      fetchExpense()
  }
}
const openEditModal = (expense)=>{
  activePopId.value = null
  selectedExpense.value = {...expense}
  console.log('espesne',selectedExpense.value.id)
  editModalOpen.value = true
}
const submitEdit = async()=>{
const response = await axios.put(`http://127.0.0.1:8000/api/expenses/${selectedExpense.value.id}`,selectedExpense.value)
if(response.status===200){
 const index =  filteredExpense.value.findIndex(o=>o.id===selectedExpense.value.id)
 if(index!== -1){
  filteredExpense.value[index] = {...selectedExpense.value}
  editModalOpen.value = false
   console.log('update successfull')
     toast.success('Expense updated successfully!', {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
})
 }
 else {
      console.error('Update failed:', data);
       //editOrderModal.value = false;
    }
}
}
const activePopId = ref(null)
const togglePopup = (id)=>{
  activePopId.value = activePopId.value ===id?null:id
}
const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
});

const expense = ref([])
const perPage = 5;
const currentPage = ref(1)
const lastPage = ref(1)
const fetchExpense = async (page)=>{
    const response = await axios.get(`http://127.0.0.1:8000/api/expenses?page=${page}&per_page=${perPage}`)
    expense.value = response.data.expenses.data
    currentPage.value = response.data.expenses.current_page
    console.log('current page',currentPage.value)
    lastPage.value = response.data.expenses.last_page
    console.log('last page',lastPage.value)
    console.log('expense',expense.value)
}
const changePage = (page)=>{
  if(page>=1&&page<=lastPage.value)
  fetchExpense(page)
}
const searchExpense = ref('')
const filteredExpense = computed(()=>{
  if(!searchExpense.value){
    return expense.value
  }
  return expense.value.filter(expense=>
    expense.expense_type?.toLowerCase().includes(searchExpense.value.toLowerCase())
  )
})
const modalOpen = ref(false)
const model  = ref({
  expense:{
    order_id:null,
    expense_type:'',
    name:'',
    amount:'',
    date:'',
    from:'',
    to:'',
    file:'',
    remark:'',
  }
})
const toggleModal = ()=>{
  modalOpen.value = !modalOpen.value
}
const orders = ref([])
const fetchOrders = async ()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/orders')
    orders.value = response.data.orders.data
    console.log('oreder',orders.value)
}
const createExpense = ()=>{
  const formData = new FormData();
  formData.append('expense_type',model.value.expense.expense_type)
  formData.append('order_id',model.value.expense.order_id)
  formData.append('name',model.value.expense.name)
  formData.append('amount',model.value.expense.amount)
  formData.append('date',model.value.expense.date)
  formData.append('from',model.value.expense.from)
  formData.append('to',model.value.expense.to)
  formData.append('file',model.value.expense.file)
  formData.append('remark',model.value.expense.remark)

axios.post("http://127.0.0.1:8000/api/expenses",
    formData,{
      headers:{
        "Content-Type":"multipart/form-data",
      },
    }
  ).then((res)=>{
    console.log('order created successfully',res)
    modalOpen.value = false
    fetchExpense();
  })

}
onMounted(()=>{
    fetchExpense()
    fetchOrders();
})
</script>

<style>
.modal{
  background-color: rgba(0, 0, 0, 0.407);
}
</style>