<template>

<div class="bg-white p-4 shadow rounded">

<h3 class="font-semibold mb-3">Employee Leave Requests</h3>

<table class="w-full border">

<thead>
<tr class="bg-gray-200">
<th class="p-2">Employee</th>
<th class="p-2">Leave Type</th>
<th class="p-2">Dates</th>
<th class="p-2">Status</th>
<th class="p-2">Action</th>
</tr>
</thead>

<tbody>

<tr v-for="leave in leaves" :key="leave._id">

<td class="p-2">
{{ leave.employeeId.name }}
</td>

<td class="p-2">
{{ leave.leaveType }}
</td>

<td class="p-2">
{{ leave.startDate.slice(0,10) }} -
{{ leave.endDate.slice(0,10) }}
</td>

<td class="p-2 font-semibold">

<span
:class="{
'text-yellow-500': leave.status === 'Pending',
'text-green-600': leave.status === 'Approved',
'text-red-600': leave.status === 'Rejected'
}"
>
{{ leave.status }}

</span>

</td>

<td class="p-2">

<button
v-if="leave.status === 'Pending'"
@click="updateStatus(leave._id,'Approved')"
class="bg-green-500 text-white px-2 py-1 mr-2 rounded"
>
Approve
</button>

<button
v-if="leave.status === 'Pending'"
@click="updateStatus(leave._id,'Rejected')"
class="bg-red-500 text-white px-2 py-1 rounded"
>
Reject
</button>

</td>

</tr>

</tbody>

</table>

</div>

</template>

<script>

import API from "../services/api"

export default {

data(){
return{
leaves:[]
}
},

async mounted(){

this.fetchLeaves()

},

methods:{

async fetchLeaves(){

const res = await API.get("/leaves")

this.leaves = res.data

},

async updateStatus(id,status){

await API.patch(`/leaves/${id}`,{status})

/* update UI instantly */

const leave = this.leaves.find(l => l._id === id)

if(leave){
leave.status = status
}

}

}

}

</script>