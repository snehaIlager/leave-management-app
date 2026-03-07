<template>
 <div class="flex justify-center mt-20">

   <form @submit.prevent="register" class="space-y-4">

     <input v-model="name" placeholder="Name" class="border p-2 w-64"/>

     <input v-model="email" placeholder="Email" class="border p-2 w-64"/>

     <input v-model="password" type="password" placeholder="Password" class="border p-2 w-64"/>

     <select v-model="role" class="border p-2 w-64">
       <option value="employee">Employee</option>
       <option value="employer">Employer</option>
     </select>

     <button class="bg-green-500 text-white px-4 py-2 w-full">
       Register
     </button>

   </form>

 </div>
</template>

<script>
import API from "../services/api";

export default {
 data() {
   return {
     name: "",
     email: "",
     password: "",
     role: "employee",
   };
 },

 methods: {
   async register() {
     await API.post("/auth/register", {
       name: this.name,
       email: this.email,
       password: this.password,
       role: this.role,
     });

     this.$router.push("/");
   },
 },
};
</script>