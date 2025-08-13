<template>
    <Navbar/>
    
    
  <div class="hidden lg:block">

      <SideBar class="mt-16"/>
    </div>
    
     <div class="shadow-md  ml-68 px-3 py-2 hidden lg:block">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-users text-2xl text-gray-400"></i></div>
<h1 class="text-sm mt-1">Employees</h1>
</div>
</div>
 <div class="block lg:hidden shadow-md mt-14  px-3 py-2 border-b border-b-gray-200 ">
        <div class="flex ">
<div class="mr-2"><i class="fa-solid fa-users text-2xl text-gray-400"></i></div>
<h1 class="text-sm mt-1 text-gray-400">Employees</h1>
</div>
</div>
<div class="bg-gray-200  h-200 py-3">
<div>
    <div>
  <Button class="ml-52 lg:w-1/8 lg:ml-295 mb-2 bg-blue-500 cursor-pointer hover:bg-cyan-600" @click="toggleModal">Add Employee</Button>
</div>
<div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="modalOpen">

     <div class="content bg-white shadow-md w-1/3 ml-70  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 px-10">
      <button @click="modalOpen = false" class="ml-90 cursor-pointer bg-red-500 w-1/12 h-8 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button>
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Register Employees</h1>
           
        </div>
        <div class=" mt-5">

            <div class="mt-5">

    </div>
          <div>
              <p class="text-sm">Name</p>
              <input type="text" placeholder="enter plate number..." class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50" v-model="model.Employees.name">
          </div>
          <div>
              <p class="text-sm">Employee Type</p>
              <input type="text" placeholder="enter own type..." class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50" v-model="model.Employees.employee_type">
          </div>
          <div>
              <p class="text-sm">Phone</p>
              <input type="text" placeholder="enter owner name..." class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50" v-model="model.Employees.phone">
          </div>

          <div>
              <p class="text-sm">Photo</p>
              <input type="file"  class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-8/10 focus:outline-blue-300 bg-blue-50" @change="handlePhoto">
          </div>
        </div>
        
      
        

        <div class="w-4/5 ml-20">
            <Button class="w-2/3  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="postEmploy">Add Employee</Button>
        </div>
    </div>

</div>
</div>
    <div class="hidden lg:block mx-80 rounded-sm text-sm w-3/4 bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchEmployee"/> 
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
                  Employee Type
                </TableHead>
   <TableHead class="">
                  Phone
                </TableHead>
   <TableHead class="">
                     <TableHead class="">
                  file
                </TableHead>

                </TableHead>

                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="employee in filteredEmployee" :key="employee" class="border-b border-b-gray-300 ">
                 <TableRow class=" border-b border-gray-300 ">
                <TableCell class="text-sm py-3">
                  {{employee.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{employee.name}}
                </TableCell>
                <TableCell class="">
                    {{ employee.employee_type }}
                </TableCell>
       <TableCell class="">
                   {{ employee.phone }}
                </TableCell>
              
                  <TableCell class="">
                   
                </TableCell>
                  <TableCell class="">
                   <i class="fa-solid fa-list"></i>
                </TableCell>
             
              </TableRow>
            </TableBody>
          </Table>
           </div>
           <div class="mt-3  bg-white p-1 ">
            <div class="flex gap-2 items-center justify-end">
              <button @click="changePage(currentPage-1)" :disabled="currentPage===1" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer"><i class="fa-solid fa-arrow-left"></i></button>
              <button v-for="page in lastPage" :key="page" @click="changePage(page)" :class="['px-3 py-1 rounded',page===currentPage?'bg-blue-500 text-white cursor-pointer':'bg-transparent cursor-pointer']">{{ page }}</button>
              <button @click="changePage(currentPage+1)" :disabled="currentPage===lastPage" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
           </div>
    </div> 

       <div class="block lg:hidden  rounded-sm text-sm w-7/8 mx-auto bg-white  mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchEmployee"/> 
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
                  Employee Type
                </TableHead>
   <TableHead class="">
                  Phone
                </TableHead>
   <TableHead class="">
                     <TableHead class="">
                  file
                </TableHead>

                </TableHead>

                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="employe in filteredEmployee" :key="employe" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 ">
                <TableCell class="text-sm py-3">
                  {{employe.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{employe.name}}
                </TableCell>
                <TableCell class="">
                    {{ employe.employee_type }}
                </TableCell>
       <TableCell class="">
                    {{ employe.phone }}
                </TableCell>
               
                  <TableCell class="">
                   
                </TableCell>
                  <TableCell class="">
                   <i class="fa-solid fa-list"></i>
                </TableCell>
             
              </TableRow>
            </TableBody>
          </Table>
           </div>
    </div>
    <div class="hidden lg:block mt-70">

  <Footer class=" ml-69 px-3 w-4/5 "/>
</div>
<div class="block lg:hidden mt-63">
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
const modalOpen = ref(false)
const searchEmployee = ref('')
const filteredEmployee = computed(()=>{
    if(!searchEmployee){
        return Employees.value
    }
    return Employees.value.filter(employe=>
        employe.name?.toLowerCase().includes(searchEmployee.value.toLocaleLowerCase())
    )
})
const model  = ref({
    Employees:{
        name:'',
        employee_type:'',
        phone:'',
        file:''
    }
})

const toggleModal = ()=>{
  modalOpen.value = !modalOpen.value
}

const postEmploy = ()=>{

    const formData = new FormData();
    formData.append('name',model.value.Employees.name)
    formData.append('employee_type',model.value.Employees.employee_type)
    formData.append('phone',model.value.Employees.phone)
    formData.append('file',model.value.Employees.file)
    axios.post('http://127.0.0.1:8000/api/employees',formData,{
        headers:{
            'Content-Type':'multipart/form-data',
        }
    }).then((res)=>{
        console.log('expense type posted',res)
    })
    modalOpen.value = false
   window.location.reload();
    model.value.Employees.name = null
    model.value.Employees.employee_type = ''
    model.value.Employees.phone = ''
    model.value.Employees.file = ''
   

}
const Employees = ref([])
const currentPage = ref(1)
const lastPage = ref(1)
const perPage = ref(5)
const fetchEmployee = async(page)=>{
    const response = await axios.get(`http://127.0.0.1:8000/api/employees?page=${page}&per_page = ${perPage}`)
    Employees.value = response.data.employees.data
    currentPage.value = response.data.employees.current_page
    lastPage.value = response.data.employees.last_page
    console.log('vehicle',Employees.value)

}
const changePage = (page)=>{
if(page>=1&&page<=lastPage.value){
  fetchEmployee(page)
}
}
const handlePhoto = (event)=>{
const file = event.target.files[0]
if(file){
    model.value.Employees.file = event.target.files[0]
    console.log('liberay',model.value.Employees.file)
}
}
onMounted(()=>{
   
    fetchEmployee();
})

</script>

<style>
.modal{
  background-color: rgba(0, 0, 0, 0.407);
}

</style>