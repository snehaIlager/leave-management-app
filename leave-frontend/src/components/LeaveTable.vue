<template>

<div class="bg-white p-4 shadow rounded">

<h3 class="font-semibold mb-3">My Leave History</h3>

<table class="w-full border">

<tr class="bg-gray-200">
<th>Type</th>
<th>Start</th>
<th>End</th>
<th>Status</th>
</tr>

<tr v-for="leave in leaves" :key="leave._id">

<td>{{leave.leaveType}}</td>
<td>{{leave.startDate.slice(0,10)}}</td>
<td>{{leave.endDate.slice(0,10)}}</td>
<td>{{leave.status}}</td>

</tr>

</table>

</div>

</template>

<script>

import API from "../services/api"

export default{

data(){

return{
leaves:[]
}

},

async mounted(){

const res = await API.get("/leaves/my")

this.leaves = res.data

}

}

</script>