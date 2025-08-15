<template>
    <Navbar/>
    
    
  <div class="hidden lg:block">

      <SideBar class="mt-16"/>
    </div>
    
     <div class="shadow-md  ml-68 px-3 py-2 hidden lg:block">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<h1 class="text-sm mt-1">Expense Type</h1>
</div>
</div>
 <div class="block lg:hidden shadow-md mt-14  px-3 py-2 border-b border-b-gray-200 ">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-e"></i></div>
<h1 class="text-sm mt-1 text-gray-400">Expense Type</h1>
</div>
</div>
<div class="bg-gray-200  h-200 py-3">
<div>
    <div>
  <Button class="ml-52 lg:w-1/8 lg:ml-295 md:ml-150 mb-2 bg-blue-500 cursor-pointer hover:bg-cyan-600" @click="toggleModal">Add Expense Type</Button>
</div>
<div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="modalOpen">

     <div class="content bg-white shadow-md w-4/5  md:w-1/2 md:-ml-35 md:-mt-25  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 px-10">
      <button @click="modalOpen = false" class="lg:ml-90 md:ml-90 ml-60 cursor-pointer bg-red-500 lg:w-1/12 md:w-1/12 w-1/8 lg:h-8 md:h-8 h-9 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button>
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Register Expense Types</h1>
           
        </div>
        <div class=" mt-5">

            <div class="mt-5">
              <div class="">
      <p class="text-sm">Expense Type</p>

<select id="" v-model="model.expenseTypes.expense_id"  class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="expense in expenses" :key="expense" :value="expense.id">{{ expense.expense_type }}</option>

</select>
     
  </div>
    </div>
          <div>
              <p class="text-sm">Category</p>
              <input type="text" placeholder="enter category..." class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50" v-model="model.expenseTypes.category">
          </div>
        </div>
        
      
        

        <div class="w-4/5 lg:ml-20 md:ml-20 ml-10">
            <Button class="w-2/3  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="postExpenseType">Create Expense Type</Button>
        </div>
    </div>

</div>
</div>
    <div class="hidden lg:block mx-80 rounded-sm text-sm w-3/4 bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchExpenseTypes"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
           <div class="max-h-92 overflow-y-auto">

             <Table class="min-w-full border-collapse">
                 
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader class="border-t border-gray-300 ">
           
              <TableRow class="">
                <TableHead class="py-2">
                  # <i class="fa-solid fa-angle-down"></i>
                </TableHead>
                    <TableHead class="">
                  Name
                </TableHead>
                <TableHead class="">
                  Categiry
                </TableHead>

                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="expense in filteredExpenseTypes" :key="expense" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 ">
                <TableCell class="text-sm py-3">
                  {{expense.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{expense.expense.expense_type}}
                </TableCell>
                <TableCell class="">{{ expense.category }}</TableCell>
     
                           <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===expense.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(expense.id)"></i>

  <div
   v-if="activePopId === expense.id"
    class="absolute top-full -mt-5  right-5 z-50 w-10/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg">
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(expense)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteExpenseType(expense.id)">
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
               <button v-for="page in lastPage" :key="page" @click="changePage(page)" :class="['px-3 py-1 rounded',page===currentPage?'bg-blue-500 text-white cursor-pointer':'bg-transparent cursor-pointer']">{{ page }}</button>
               <button @click="changePage(currentPage+1)" :disabled="currentPage===lastPage" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer"><i class="fa-solid fa-arrow-right"></i></button>
             </div>
           </div>
    </div> 
      <div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="editModal">

     <div class="content md:-mt-30 bg-white shadow-md lg:w-1/3 md:w-1/2 lg:ml-70 w-3/4 -ml-17 md:-ml-35  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 lg:px-10">
      <!-- <button @click="modalOpen = false" class="lg:ml-150 md:ml-150 ml-60 cursor-pointer bg-red-500 lg:w-1/18 lg:h-8 md:w-1/15 md:h-11 w-1/6 h-12 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button> -->
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Edit Expense Type</h1>
           
        </div>
        <div class=" mt-5">
          <div class=" md:ml-4">

            <p class="text-sm">Expense</p> 
    <select id="" v-model="selectedExpenseType.expense_id"  class="mb-3 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold md:w-2/3 lg:w-2/3 w-7/8 focus:outline-blue-300 bg-blue-50 h-11">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="expense in expenses" :key="expense" :value="expense.id">{{ expense.expense_type }}</option>

</select>
          </div>
            <div class="lg:ml-1 md:ml-4 ml-1">
              <p class="text-sm">Category</p> 
                  <input type="text" placeholder="enter name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-2/3 md:w-2/3 focus:outline-blue-300 bg-blue-50" v-model="selectedExpenseType.category">
          </div>
        </div>
     
        <div class="flex lg:w-10/10 md:w-1/2 md:ml-3">
          <div class="lg:w-9/11 md:w-2/3 w-6/7   ">
            <button @click="editModal = false" type="button" class="w-2/3  bg-red-500 rounded-md mt-5 p-2 text-white hover:bg-red-700 cursor-pointer">Cancel</button>
          </div>
          <div class="lg:w-9/11 md:w-2/3 w-7/8  lg:-ml-8 ">
              <Button class="w-3/4  bg-blue-500 rounded-md mt-5 py-5 text-white hover:bg-cyan-600 cursor-pointer" @click="submitEdit">Update</Button>
          </div>
        </div>
    </div>

</div>
       <div class="block lg:hidden  rounded-sm text-sm w-7/8 mx-auto bg-white  mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchExpenseTypes"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
           <div class="max-h-92 overflow-y-auto">

             <Table class="min-w-full border-collapse">
                 
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader class="border-t border-gray-300 ">
           
              <TableRow class="">
                <TableHead class="py-2">
                  # <i class="fa-solid fa-angle-down"></i>
                </TableHead>
                    <TableHead class="">
                  Name
                </TableHead>
                <TableHead class="">
                  Category
                </TableHead>

                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="expense in filteredExpenseTypes" :key="expense" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 ">
                <TableCell class="text-sm py-3">
                  {{expense.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{expense.expense.expense_type}}
                </TableCell>
                <TableCell class="">{{ expense.category }}</TableCell>
     
                           <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===expense.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(expense.id)"></i>

  <div
   v-if="activePopId === expense.id"
    class="absolute top-full -mt-2 -ml-50  right-0 z-50 w-24/11 md:w-18/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg"
  >
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(expense)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteExpenseType(order.id)">
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
    <div class="hidden lg:block mt-70">

  <Footer class=" ml-69 px-3 w-4/5 "/>
</div>
<div class="block lg:hidden mt-88">
    <Footer class="  w-13/11 "/> 
</div>
</div>

</template>

<script setup>
import Navbar from '@/components/Admin/Navbar.vue';
import SideBar from '@/components/Admin/SideBar.vue';
import { computed, ref } from 'vue';
import axios from 'axios';
import Button from '@/components/ui/button/Button.vue';
import { useToast } from 'vue-toastification';
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { onMounted } from 'vue';
import Footer from '@/components/Admin/Footer.vue';
const selectedExpenseType = ref({})
const editModal = ref(false)
const activePopId = ref(null)
const toast = useToast();
const openEditModal = (expenseType)=>{
   activePopId.value = null
selectedExpenseType.value = {...expenseType}
editModal.value = true
}
const submitEdit = async()=>{
  const response = axios.put(`http://127.0.0.1:8000/api/expense-types/${selectedExpenseType.value.id}`,selectedExpenseType.value)
  if((await response).status ===200){

    const index = filteredExpenseTypes.value.findIndex(e=>e.id===selectedExpenseType.value.id)
    if(index!== -1){
      filteredExpenseTypes.value[index] = {...selectedExpenseType.value}
      editModal.value = false
      console.log('update successfull')
        toast.success('expense type updated successfully!', {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  
        })
        fetchExpenseType()
  }
  else{
      console.error('Update failed:', data);
  }
  }
}

const deleteExpenseType = async(id)=>{
    activePopId.value = null
  const confirmed = confirm('Are You Sure You Want To Delete This Expense Type')
  if(confirmed){
    const response = await axios.delete(`http://127.0.0.1:8000/api/expense-types/${id}`)
    filteredExpenseTypes.value = filteredExpenseTypes.value.filter(e=>e.id!==id)
        console.log('response',response.data.message)
    
    toast.success('Order Deleted Successfully')
    fetchExpenseType();
  }
}
const togglePopup = (id)=>{
  activePopId.value = activePopId.value ===id?null:id
}
const modalOpen = ref(false)
const searchExpenseTypes = ref('')
const filteredExpenseTypes = computed(()=>{
    if(!searchExpenseTypes){
        return expenseTypes.value
    }
    return expenseTypes.value.filter(expense=>
        expense.expense.expense_type?.toLowerCase().includes(searchExpenseTypes.value.toLocaleLowerCase())
    )
})
const model  = ref({
    expenseTypes:{
        expense_id:null,
        category:null
    }
})
const expenses = ref([])
const toggleModal = ()=>{
  modalOpen.value = !modalOpen.value
}
const currentPage = ref(1)
const lastPage = ref(1)
const perPage = 5
const fetchExpense = async()=>{
    const response = await axios.get('http://127.0.0.1:8000/api/expenses')
    expenses.value = response.data.expenses.data
 
}

const postExpenseType = ()=>{

    const formData = new FormData();
    formData.append('expense_id',model.value.expenseTypes.expense_id)
    formData.append('category',model.value.expenseTypes.category)
    axios.post('http://127.0.0.1:8000/api/expense-types',formData,{
        headers:{
            'Content-Type':'multipart/form-data',
        }
    }).then((res)=>{
        console.log('expense type posted',res)
    })
    modalOpen.value = false
    fetchExpenseType();
    model.value.expenseTypes.expense_id = null
    model.value.expenseTypes.category = ''

}
const expenseTypes = ref([])
const fetchExpenseType = async(page)=>{
    const response = await axios.get(`http://127.0.0.1:8000/api/expense-types?page=${page}&per_page=${perPage}`)
    expenseTypes.value = response.data.ExpenseTypes.data
       currentPage.value = response.data.ExpenseTypes.current_page
    lastPage.value = response.data.ExpenseTypes.last_page
    console.log('expense types',expenseTypes.value)

}
const changePage = (page)=>{
if(page>=1&&page<=lastPage.value){
  fetchExpenseType(page)
  console.log('page',page)
}
}
onMounted(()=>{
    fetchExpense();
    fetchExpenseType();
})

</script>

<style>
.modal{
  background-color: rgba(0, 0, 0, 0.407);
}

</style>