<template>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">

<div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Left Section -->
<div class="flex flex-col justify-center p-6">

<h1 class="text-4xl font-bold text-blue-600 mb-4">
Leave Management System
</h1>

<p class="text-gray-600 mb-6">
A simple platform for employees to apply for leave and for employers to manage
and approve leave requests efficiently.
</p>

<ul class="text-gray-700 space-y-2">

<li>✔ Employee leave applications</li>
<li>✔ Employer approval workflow</li>
<li>✔ Real-time leave status tracking</li>
<li>✔ Secure login with role-based access</li>

</ul>

</div>


<!-- Login Card -->
<div class="bg-white shadow-lg rounded-lg p-8">

<h2 class="text-2xl font-semibold text-center mb-6">
Login
</h2>

<input
v-model="email"
placeholder="Email"
class="border p-3 w-full mb-4 rounded"
/>

<input
v-model="password"
type="password"
placeholder="Password"
class="border p-3 w-full mb-4 rounded"
/>

<button
@click="login"
class="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded transition"
>
Login
</button>

<p class="mt-4 text-center text-sm">
Don't have an account?
<router-link
to="/register"
class="text-blue-600 font-medium"
>
Register
</router-link>
</p>

</div>

</div>

</div>

</template>


<script>

import API from "../services/api"
import { useToast } from "vue-toastification"

export default{

data(){
return{
email:"",
password:""
}
},

methods:{

async login(){

const toast = useToast()

try{

const res = await API.post("/auth/login",{
email:this.email,
password:this.password
})

localStorage.setItem("token",res.data.token)

toast.success("Login successful")

if(res.data.user.role==="employee"){
this.$router.push("/employee")
}else{
this.$router.push("/employer")
}

}catch(err){

toast.error("Invalid email or password")

}

}

}

}

</script>