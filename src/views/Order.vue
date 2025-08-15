<template>
 
    <Navbar class=""/>
    <div class="hidden lg:block">

      <SideBar class="mt-16"/>
    </div>
     <div class="shadow-md  ml-68 px-3 py-2 hidden lg:block">
        <div class="flex ">
<div class="mr-2"><i class="fa-brands fa-first-order"></i></div>
<h1 class="text-sm mt-1">Order</h1>
</div>
</div>
 <div class="block lg:hidden shadow-md mt-14  px-3 py-2 border-b border-b-gray-200 ">
        <div class="flex ">
<div class="mr-2"><i class="fa-brands fa-first-order text-gray-400"></i></div>
<h1 class="text-sm mt-1 text-gray-400">Order</h1>
</div>
</div>
<div>

</div>


<div class=" bg-gray-200  h-200 py-3">
<div>
  <Button class="ml-63 lg:w-1/8 lg:ml-295 md:w-1/4 md:ml-140 mb-2 bg-blue-500 cursor-pointer hover:bg-cyan-600" @click="toggleModal">Add Order</Button>
</div>
<div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="modalOpen">

     <div class="content bg-white shadow-md lg:w-1/2 lg:ml-70 w-3/4 -ml-17 md:-ml-35  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 lg:px-10">
      <button @click="modalOpen = false" class="lg:ml-150 md:ml-150 ml-60 cursor-pointer bg-red-500 lg:w-1/18 lg:h-8 md:w-1/15 md:h-11 w-1/6 h-12 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button>
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Register New Order</h1>
           
        </div>
        <div class="flex mt-5">
          <div>
              <p class="text-sm">Order Name</p>
              <input type="text" placeholder="enter order name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.order_name">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Client  Name</p> 
                  <input type="text" placeholder="enter client name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.client_name">
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Plate Number</p>
              <input type="text" placeholder="enter plate number..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.plate_number">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Driver  Name</p>

                  
                  <input type="text" placeholder="enter driver name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.driver_name">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Phone Number</p>
              <input type="text" placeholder="enter phone ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.phone_number">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Loading Place</p>

                  
                  <input type="text" placeholder="enter loading ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.loading_place">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Destination</p>
              <input type="text" placeholder="enter destination..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.destination">
          </div>
            <div class="lg:ml-24 md:ml-24">
              <p class="text-sm">Load Type</p>

                  
                  <input type="text" placeholder="enter load type..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.load_type">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Quintal</p>
              <input type="number" placeholder="enter quintal amount" class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.quintal">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Given Tariff</p>

                  
                  <input type="number" placeholder="enter given tariff..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.given_tariff">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Sub Tariff</p>
              <input type="number" placeholder="enter sub tarif..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10  focus:outline-blue-300 bg-blue-50" v-model="model.orders.sub_tariff">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1 ">
              <p class="text-sm">Total Revenue</p>

                  
                  <input type="number" placeholder="enter  revenue..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 mg:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.total_revenue">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Revenue</p>
              <input type="number" placeholder="enter revenue..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.revenue">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">To be Paid</p>

                  
                  <input type="number" placeholder="enter amount..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.to_be_paid">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Arrival Date</p>
              <input type="date" placeholder="enter arrival date..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.arrival_at_loading_site">
          </div>
            <div class="lg:ml-38 md:ml-38 -ml-1">
              <p class="text-sm">Loading Date</p>

                  
                  <input type="date" placeholder="enter loading date..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.loading_date">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Current Condition</p>
              <input type="text" placeholder="enter  condition..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.current_condition">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Trucks Owner</p>

                  
                  <input type="text" placeholder="enter owner..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.truks_owner">
             
          </div>
          
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Payment Collected</p>
              <input type="text" placeholder="enter state..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.payment_collected">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Month</p>

                  
                  <input type="date" placeholder="enter month..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="model.orders.month">
             
          </div>
        </div>
        <div class="mt-5">
                  <div class="">
          <p class="text-sm">Choose Vehicle </p>

<select id="" v-model="model.orders.vehicle_id"  class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-5/10 focus:outline-blue-300 bg-blue-50">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="vehicle in vehicles" :key="vehicle" :value="vehicle.id">{{ vehicle.plate_number }}</option>

</select>
         
      </div>
        </div>
        <div class="lg:w-4/5 md:w-4/5 w-6/7 lg:ml-50 md:ml-50 ml-20">
            <Button class="w-1/2  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="createOrder">Create Order</Button>
        </div>
    </div>

</div>
<div class="hidden lg:block md:block">

  <div class="bg-white flex    lg:ml-80 md:ml-10 p-5 lg:w-3/4 md:w-5/6 shadow-sm rounded-md">

     
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
    <template v-if="value.start" >
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-5 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
      <!-- <template v-else>
        Pick a date
      </template> -->
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
        'lg:w-[280px] md:w-11/11 justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )"
    >
    <template v-if="value.start">
        <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            <CalendarIcon class="ml-5 h-4 w-4" />
          </template>

        <template v-else>
          {{ df.format(value.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
      <!-- <template v-else>
        Pick a date
      </template> -->
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
<div class="block lg:hidden md:hidden">
  <div class="bg-white  p-5 w-5/6 mx-auto shadow-sm rounded-md">   
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
      <!-- <template v-else>
        Pick a date
      </template> -->
    </Button>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => value.start = startDate" />
  </PopoverContent>
</Popover>
</div>
<div class="w-4/5 mx-auto mt-6 ">
      <Button class="bg-blue-500 text-white px-20   hover:bg-cyan-600 cursor-pointer">Get Report</Button>
  </div>
  </div> 
</div>



    <div class="hidden lg:block mx-80 rounded-sm text-sm w-3/4 bg-white mt-3 overflow-x-auto relative z-0">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchOrder"/> 
<i class="fa-solid fa-magnifying-glass absolute left-63 top-8"></i>
            </div>
           </TableHead>
           <div class="max-h-72 overflow-y-auto z-0">

             <Table class="min-w-full border-collapse">
                 
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader class="">
           
              <TableRow class="">
                <TableHead class="py-5">
                  # <i class="fa-solid fa-angle-down"></i>
                </TableHead>
                    <TableHead class="">
                  Order <br> Name
                </TableHead>
                <TableHead class="">
                  Client <br> Name
                </TableHead>
                  <TableHead class="">
                  Plate <br> Number
                </TableHead>
                  <TableHead class="">
                  Driver <br> Name
                </TableHead>
                   <TableHead class="">
                  Phone
                </TableHead>
                  <TableHead class="">
                  Loading <br> Place
                </TableHead>
                  <TableHead class="">
                  Destination
                </TableHead>
                  <TableHead class="">
                  Load <br> Type
                </TableHead>
                  <TableHead class="">
                  Quintal
                </TableHead>
                  <TableHead class="">
                  Given <br> Tariff
                </TableHead>
                  <TableHead class="">
                  Sub <br> Tariff
                </TableHead>
                  <TableHead class="">
                    Total <br> Revenue
                </TableHead>
                  <TableHead class="">
                  Revenue
                </TableHead>
                  <TableHead class="">
                  To be <br> Paid
                </TableHead>
                  <TableHead class="">
                  Arrival At <br> Loading Site
                </TableHead>
                  <TableHead class="">
                  Loading <br> Date
                </TableHead>
                  <TableHead class="">
                  Current <br> Condition
                </TableHead>
                  <TableHead class="">
                  Truncks <br> Owner
                </TableHead>
                  <TableHead class="">
                  Payment <br> Collected
                </TableHead>
                  <TableHead class="">
                Month
                </TableHead>
                  <TableHead class="">
                    Payment <br> Done 
                </TableHead>
                  <TableHead class="">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody v-for="order in filteredOrders" :key="order" class="border-b border-b-gray-300 ">
              <TableRow class=" border-b border-gray-300 mt-4 ">
                <TableCell class="text-sm py-7">
                  {{order?.id}}
                </TableCell>
                 <TableCell class="text-sm">
                  {{order?.order_name}}
                </TableCell>
                <TableCell class="">{{ order?.client_name }}</TableCell>
                <TableCell>{{ order?.plate_number }}</TableCell>
                <TableCell class="">
                  {{ order?.driver_name }}
                </TableCell>
                 <TableCell class="">
                  {{ order?.phone_number }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.loading_place }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.destination }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.quintal }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.given_tariff }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.sub_tariff }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.total_revenue	 }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.revenue }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.to_be_paid }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.arrival_at_loading_site }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.loading_date }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.current_condition }}
                </TableCell>
                   <TableCell class="">
                  {{ order?.truks_owner }}
                </TableCell>
                  <TableCell class="">
                  {{ order?.payment_collected }}
                </TableCell>
                  <TableCell class="">
                  {{ order?.payment_done }}
                </TableCell>
                  <TableCell class="">
                  {{ order?.month }}
                </TableCell>
                   <TableCell class="">
                 
                </TableCell>
               <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===order.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(order.id)"></i>

  <div
   v-if="activePopId === order.id"
    class="absolute top-full -mt-7  right-0 z-50 w-24/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg"
  >
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(order)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteOrder(order.id)">
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
           <button @click="changePage(currentPage-1)" :disabled="currentPage===1" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer">
             <i class="fa-solid fa-arrow-left"></i>
           </button>
           <button v-for="page in lastPage" :key="page" @click="changePage(page)" :class="['px-3 py-1 rounded',page===currentPage?'bg-blue-500 text-white cursor-pointer':'bg-transparent cursor-pointer']">
           {{ page }}
           </button>
           <button @click="changePage(currentPage+1)" :disabled="currentPage===lastPage" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer">
           <i class="fa-solid fa-arrow-right"></i>
           </button>
             </div>
           
           </div>
    </div> 
        <div class="block lg:hidden  rounded-sm text-sm w-10/11 mx-auto bg-white mt-3 overflow-x-auto relative ">
    <TableHead class="py-5 ">
            <div class="flex w-3/4">
                <label for="" class="mt-2">Filter: </label>
<Input placeholder="Type to filter..." class="w-80 ml-2 relative placeholder:text-sm  focus:ring-2 focus:ring-red-400 focus:outline-none" v-model="searchOrder"/> 
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
                  Order <br> Name
                </TableHead>
                <TableHead class="">
                  Client <br> Name
                </TableHead>
                  <TableHead class="">
                  Plate <br> Number
                </TableHead>
                  <TableHead class="">
                  Driver <br> Name
                </TableHead>
                   <TableHead class="">
                  Phone
                </TableHead>
                  <TableHead class="">
                  Loading <br> Place
                </TableHead>
                  <TableHead class="">
                  Destination
                </TableHead>
                  <TableHead class="">
                  Load <br> Type
                </TableHead>
                  <TableHead class="">
                  Quintal
                </TableHead>
                  <TableHead class="">
                  Given <br> Tariff
                </TableHead>
                  <TableHead class="">
                  Sub <br> Tariff
                </TableHead>
                  <TableHead class="">
                    Total <br> Revenue
                </TableHead>
                  <TableHead class="">
                  Revenue
                </TableHead>
                  <TableHead class="">
                  To be <br> Paid
                </TableHead>
                  <TableHead class="">
                  Arrival At <br> Loading Site
                </TableHead>
                  <TableHead class="">
                  Loading <br> Date
                </TableHead>
                  <TableHead class="">
                  Current <br> Condition
                </TableHead>
                  <TableHead class="">
                  Truncks <br> Owner
                </TableHead>
                  <TableHead class="">
                  Payment <br> Collected
                </TableHead>
                  <TableHead class="">
                Month
                </TableHead>
                  <TableHead class="">
                    Payment <br> Done 
                </TableHead>
                  <TableHead class="">
                  Actions
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
                <TableCell class="">{{ order.client_name }}</TableCell>
                <TableCell>{{ order.plate_number }}</TableCell>
                <TableCell class="">
                  {{ order.driver_name }}
                </TableCell>
                 <TableCell class="">
                  {{ order.phone_number }}
                </TableCell>
                   <TableCell class="">
                  {{ order.loading_place }}
                </TableCell>
                   <TableCell class="">
                  {{ order.destination }}
                </TableCell>
                   <TableCell class="">
                  {{ order.quintal }}
                </TableCell>
                   <TableCell class="">
                  {{ order.given_tariff }}
                </TableCell>
                   <TableCell class="">
                  {{ order.sub_tariff }}
                </TableCell>
                   <TableCell class="">
                  {{ order.total_revenue	 }}
                </TableCell>
                   <TableCell class="">
                  {{ order.revenue }}
                </TableCell>
                   <TableCell class="">
                  {{ order.to_be_paid }}
                </TableCell>
                   <TableCell class="">
                  {{ order.arrival_at_loading_site }}
                </TableCell>
                   <TableCell class="">
                  {{ order.loading_date }}
                </TableCell>
                   <TableCell class="">
                  {{ order.current_condition }}
                </TableCell>
                   <TableCell class="">
                  {{ order.truks_owner }}
                </TableCell>
                  <TableCell class="">
                  {{ order.payment_collected }}
                </TableCell>
                  <TableCell class="">
                  {{ order.payment_done }}
                </TableCell>
                  <TableCell class="">
                  {{ order.month }}
                </TableCell>
                   <TableCell class="">
                 
                </TableCell>
             <TableCell class="relative">
  <i class="fa-solid fa-list cursor-pointer" :class="activePopId ===order.id?'text-blue-400':'text-gray-400'"  @click="togglePopup(order.id)"></i>

  <div
   v-if="activePopId === order.id"
    class="absolute top-full -mt-7  right-0 z-50 w-24/11 border border-gray-300 rounded-md bg-white p-3 shadow-lg"
  >
    <div class="flex w-4/5 mx-auto cursor-pointer" @click="openEditModal(order)">
      <i class="fa-solid fa-pen"></i>
      <p class="ml-2">Edit</p>
    </div>
    <div class="flex w-4/5 mx-auto mt-3 cursor-pointer" @click="deleteOrder(order.id)">
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
           <button @click="changePage(currentPage-1)" :disabled="currentPage===1" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer">
             <i class="fa-solid fa-arrow-left"></i>
           </button>
           <button v-for="page in lastPage" :key="page" @click="changePage(page)" :class="['px-3 py-1 rounded',page===currentPage?'bg-blue-500 text-white cursor-pointer':'bg-transparent cursor-pointer']">
           {{ page }}
           </button>
           <button @click="changePage(currentPage+1)" :disabled="currentPage===lastPage" class="px-3 py-1  rounded disabled:opacity-50 cursor-pointer">
           <i class="fa-solid fa-arrow-right"></i>
           </button>
             </div>
           
           </div>
    </div> 

  <div class="fixed modal inset-0 bg-transaparent bg-opacity-50 flex items-center justify-center z-50 no-scrollbar roundd-md pt-35 pb-20 " v-if="editOrderModal">

     <div class="content bg-white shadow-md lg:w-1/2 lg:ml-70 w-3/4 -ml-17 md:-ml-35  p-3 rounded-lg  relative overflow-y-auto max-h-[90vh] no-scrollbar pb-10 lg:px-10">
      <!-- <button @click="modalOpen = false" class="lg:ml-150 md:ml-150 ml-60 cursor-pointer bg-red-500 lg:w-1/18 lg:h-8 md:w-1/15 md:h-11 w-1/6 h-12 rounded-4xl text-white"><i class="fa-solid fa-xmark text-2xl"></i></button> -->
        <div class="text-center">

            <h1 class=" heading font-bold text-lg mt-10 ">Edit Order</h1>
           
        </div>
        <div class="flex mt-5">
          <div>
              <p class="text-sm">Order Name</p>
              <input type="text" placeholder="enter order name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.order_name">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Client  Name</p> 
                  <input type="text" placeholder="enter client name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.client_name">
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Plate Number</p>
              <input type="text" placeholder="enter plate number..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.plate_number">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Driver  Name</p>

                  
                  <input type="text" placeholder="enter driver name..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.driver_name">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Phone Number</p>
              <input type="text" placeholder="enter phone ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.phone_number">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Loading Place</p>

                  
                  <input type="text" placeholder="enter loading ..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.loading_place">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Destination</p>
              <input type="text" placeholder="enter destination..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.destination">
          </div>
            <div class="lg:ml-24 md:ml-24">
              <p class="text-sm">Load Type</p>

                  
                  <input type="text" placeholder="enter load type..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.load_type">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Quintal</p>
              <input type="number" placeholder="enter quintal amount" class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.quintal">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Given Tariff</p>

                  
                  <input type="number" placeholder="enter given tariff..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.given_tariff">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Sub Tariff</p>
              <input type="number" placeholder="enter sub tarif..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10  focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.sub_tariff">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1 ">
              <p class="text-sm">Total Revenue</p>

                  
                  <input type="number" placeholder="enter  revenue..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 mg:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.total_revenue">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Revenue</p>
              <input type="number" placeholder="enter revenue..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.revenue">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">To be Paid</p>

                  
                  <input type="number" placeholder="enter amount..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.to_be_paid">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Arrival Date</p>
              <input type="date" placeholder="enter arrival date..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.arrival_at_loading_site">
          </div>
            <div class="lg:ml-38 md:ml-38 -ml-1">
              <p class="text-sm">Loading Date</p>

                  
                  <input type="date" placeholder="enter loading date..." class="w-6/7 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.loading_date">
             
          </div>
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Current Condition</p>
              <input type="text" placeholder="enter  condition..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.current_condition">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Trucks Owner</p>

                  
                  <input type="text" placeholder="enter owner..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.truks_owner">
             
          </div>
          
        </div>
          <div class="flex mt-5">

          <div>
              <p class="text-sm">Payment Collected</p>
              <input type="text" placeholder="enter state..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-14/10 md:w-14/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.payment_collected">
          </div>
            <div class="lg:ml-24 md:ml-24 ml-1">
              <p class="text-sm">Month</p>

                  
                  <input type="date" placeholder="enter month..." class="w-7/8 mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold lg:w-19/10 md:w-19/10 focus:outline-blue-300 bg-blue-50" v-model="selectedOrder.month">
             
          </div>
        </div>
        <div class="mt-5">
                  <div class="">
          <p class="text-sm">Choose Vehicle </p>

<select id="" v-model="selectedOrder.vehicle_id"  class="mt-2 border border-gray-300 rounded-md p-2 placeholder:text-sm font-semibold w-5/10 focus:outline-blue-300 bg-blue-50">
<!-- <option disabled value="">Please select one</option> -->
<option v-for="vehicle in vehicles" :key="vehicle" :value="vehicle.id">{{ vehicle.plate_number }}</option>

</select>
         
      </div>
        </div>
        <div class="flex lg:w-3/4 lg:ml-35">
          <div class="lg:w-10/11 md:w-4/5 w-6/7   ">
            <button @click="editOrderModal = false" type="button" class="w-2/3  bg-red-500 rounded-md mt-5 p-2 text-white hover:bg-red-700 cursor-pointer">Cancel</button>
          </div>
          <div class="lg:w-10/11 md:w-4/5 w-6/7  lg:-ml-20 ">
              <Button class="w-2/3  bg-blue-500 rounded-md mt-5 p-2 text-white hover:bg-cyan-600 cursor-pointer" @click="submitEdit">Update Order</Button>
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
import { useToast } from 'vue-toastification'

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
const toast = useToast()
const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});
const deleteOrder = async(id)=>{
  const confirmed = confirm('Are you sure you want to delete this order?')
  if(confirmed){
    activePopId.value = null
    const response  = await axios.delete(`http://127.0.0.1:8000/api/orders/${id}`)
    filteredOrders.value = filteredOrders.value.filter(order=>order.id!==id)
    console.log('response',response.data.message)
    
    toast.success('Order Deleted Successfully')

fetchOrders();
  }
}
const editOrderModal = ref(false);
const selectedOrder = ref({});
const activePopId = ref(null)

const openEditModal = (order)=>{
  activePopId.value = null
selectedOrder.value = {...order};
editOrderModal.value = true
}
const submitEdit = async()=>{
  try{
    const response = await axios.put(`http://127.0.0.1:8000/api/orders/${selectedOrder.value.id}`,selectedOrder.value)
    const data = response.data.orders
   // console.log('response',response)
      if (response.status ===200) {
      const index = filteredOrders.value.findIndex(o =>o.id === selectedOrder.value.id);
     // console.log('index',index)
      if (index !== -1) {
        filteredOrders.value[index] = { ...selectedOrder.value };
         editOrderModal.value = false;
       //  console.log('update successfull')
        //  window.location.reload();
  toast.success('Order updated successfully!', {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
})
      }

      editOrderModal.value = false;
    } else {
      console.error('Update failed:', data);
       //editOrderModal.value = false;
    }
  } catch (err) {
    console.error('Error submitting edit:', err);
    toast.error('Failed to update order')
  
  }
}
const togglePopup = (id)=>{
  activePopId.value = activePopId.value ===id?null:id
}
const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
});

const orders = ref([])
const currentPage = ref(1);
const lastPage = ref(1);
const perPage = 5
const fetchOrders = async (page=1)=>{
    const response = await axios.get(`http://127.0.0.1:8000/api/orders?page=${page}&{per_page=${perPage}}`)
    orders.value = response.data.orders.data
    currentPage.value = response.data.orders.current_page
    console.log('current page',currentPage.value)
    lastPage.value  = response.data.orders.last_page
    console.log('oreder',orders.value)
}
const changePage = (page)=>{
  if(page>=1&&page<=lastPage.value){
    fetchOrders(page)
  }
}
const searchOrder = ref('')
const filteredOrders = computed(()=>{
  if(!searchOrder.value){
    return orders.value
  }
  return orders.value.filter(order=>
    order.client_name?.toLowerCase().includes(searchOrder.value.toLowerCase())
  )
})
const modalOpen = ref(false)
const toggleModal = ()=>{
  modalOpen.value = !modalOpen.value
}
const model  = ref({
  orders:{
    vehicle_id:null,
    order_name:'',
    client_name:'',
    plate_number:'',
    driver_name:'',
    phone_number:'',
    loading_place:'',
    destination:'',
    load_type:'',
    quintal:'',
    given_tariff:'',
    sub_tariff:'',
    total_revenue:'',
    revenue:'',
    to_be_paid:'',
    arrival_at_loading_site:'',
    loading_date:'',
    current_condition:'',
    truks_owner:'',
    payment_collected:'',
    month:''
  }
})
const createOrder = ()=>{
  const formData = new FormData();
  formData.append('vehicle_id',model.value.orders.vehicle_id)
  formData.append('order_name',model.value.orders.order_name)
  formData.append('client_name',model.value.orders.client_name)
  formData.append('plate_number',model.value.orders.plate_number)
  formData.append('driver_name',model.value.orders.driver_name)
  formData.append('phone_number',model.value.orders.phone_number)
  formData.append('loading_place',model.value.orders.loading_place)
  formData.append('destination',model.value.orders.destination)
  formData.append('load_type',model.value.orders.load_type)
  formData.append('quintal',model.value.orders.quintal)
  formData.append('given_tariff',model.value.orders.given_tariff)
  formData.append('sub_tariff',model.value.orders.sub_tariff)
  formData.append('total_revenue',model.value.orders.total_revenue)
  formData.append('revenue',model.value.orders.revenue)
  formData.append('to_be_paid',model.value.orders.to_be_paid)
  formData.append('arrival_at_loading_site',model.value.orders.arrival_at_loading_site)
  formData.append('loading_date',model.value.orders.loading_date)
  formData.append('current_condition',model.value.orders.current_condition)
  formData.append('truks_owner',model.value.orders.truks_owner)
  formData.append('payment_collected',model.value.orders.payment_collected)
  formData.append('month',model.value.orders.month)
  axios.post("http://127.0.0.1:8000/api/orders",
    formData,
    {
      headers:{
        "Content-Type":"multipart/form-data",
      },
    }
  ).then((res)=>{
    console.log('order created successfully',res)
    modalOpen.value = false
     window.location.reload();
  })

}
const vehicles = ref([])
const fetchVehicles = async()=>{
  const response = await axios.get("http://127.0.0.1:8000/api/vehicles")
  vehicles.value = response.data.vehicles.data
  console.log('vehicle',vehicles.value)
}
onMounted(()=>{
    fetchOrders()
    fetchVehicles()
})
</script>

<style>
.modal{
  background-color: rgba(0, 0, 0, 0.407);
}
</style>