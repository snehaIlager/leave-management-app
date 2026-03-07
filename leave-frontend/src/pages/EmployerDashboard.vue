<template>

<Navbar/>

<div class="p-6 max-w-6xl mx-auto">

<EmployerTable/>

</div>

</template>

<script>

import Navbar from "../components/Navbar.vue"
import EmployerTable from "../components/EmployerTable.vue"

export default{

components:{
Navbar,
EmployerTable
}

}

</script>