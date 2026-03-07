<template>

<Navbar/>

<div class="p-6 max-w-5xl mx-auto">

<LeaveForm/>

<LeaveTable/>

</div>

</template>

<script>

import Navbar from "../components/Navbar.vue"
import LeaveForm from "../components/LeaveForm.vue"
import LeaveTable from "../components/LeaveTable.vue"

export default{

components:{
Navbar,
LeaveForm,
LeaveTable
}

}

</script>