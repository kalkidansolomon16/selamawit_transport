import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/AdminDashbord.vue'
import Order from '../views/Order.vue'
import Expense from '../views/Expense.vue'
import Report from '../views/Report.vue'
import ExpenseType from '../views/ExpenseType.vue'
import Vehicles from '../views/Vehicles.vue'
import Employees from '../views/Employees.vue'
import Location from '../views/Location.vue'
import Load_Type from '../views/Load_Type.vue'
import Bank from '../views/Bank.vue'
import Clients from '../views/Clients.vue'
import System_user from '../views/System_user.vue'
import Role from '../views/Role.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
  
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },

    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
  {
      path: '/expense',
      name: 'Expense',
      component: Expense,
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
    },
    {
      path: '/expense-type',
      name: 'ExpenseType',
      component: ExpenseType,
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
        {
          path: '/employees',
          name: 'Employees',
          component: Employees,
        },
    {
      path: '/location',
      name: 'Location',
      component: Location,
    },
    {
      path: '/load-type',
      name: 'LoadType',
      component: Load_Type,
    },
     {
      path: '/bank',
      name: 'Bank',
      component: Bank,
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients,
    },
    {
      path: '/system-user',
      name: 'SystemUser',
      component: System_user,
    },
    {
      path: '/role',
      name: 'Role',
      component: Role,
    },
    // Uncomment the following lines if you want to add an About page
    // {
    //   path: '/about',
    //   name: 'about',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
