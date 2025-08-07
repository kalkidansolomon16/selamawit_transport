import axios from "axios";
import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import router from "@/router";

export const useAuthStore = defineStore('user',{
state:()=>({

  
    email:'',
    password:'',
    currentUser:'',
    signin:false,
    user_id:null

}),
getters:{

},
actions:{
    async handleLogin(){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login',{
                email:this.email,
                password:this.password
            })
            const token  = response.data.token;
            localStorage.setItem('token',token)
           
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            this.getUser();
            this.signin = true
            localStorage.setItem('signin',this.signin)
            console.log('signin',this.signin)
            // if (router) {
              router.push('/admin');
              console.log('redirect to admin page')
            // }
            // const router = useRouter()
            // this.redirectToHome(router)
        }catch(res){
            console.log(res)
        }
       
    },
    async getUser(){
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/user')
     
        this.user_id = response.data.id
        console.log('user_id',this.user_id)
        localStorage.setItem('userID',this.user_id)
      
        console.log('current user',this.currentUser,'user_id',this.user_id)

      }catch(err){
        console.log('error',err)
      }
    },
    verifyLogin(router) {
        const token = localStorage.getItem('token'); 
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       
        } else {
          if (router) {
            router.push({ name: 'Signin' });
          }
        }
      },
      logOutUser(router){
        localStorage.removeItem('token')
        localStorage.removeItem('signin')
      localStorage.removeItem('user_name')
      localStorage.removeItem('userID')
      if(router){
        router.push({ name: 'Login' });
      }
      }
}

})