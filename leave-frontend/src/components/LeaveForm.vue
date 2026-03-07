<template>

<div class="bg-white p-4 shadow rounded mb-6">

<h3 class="font-semibold mb-3">Apply Leave</h3>

<div class="grid grid-cols-4 gap-3">

<input v-model="leaveType"
placeholder="Leave Type"
class="border p-2"/>

<input type="date"
v-model="startDate"
class="border p-2"/>

<input type="date"
v-model="endDate"
class="border p-2"/>

<textarea
v-model="reason"
placeholder="Reason"
class="border p-2"></textarea>

</div>

<button
@click="applyLeave"
class="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
Apply Leave
</button>

</div>

</template>

<script>

import API from "../services/api"
import { useToast } from "vue-toastification"

export default{

data(){

return{
leaveType:"",
startDate:"",
endDate:"",
reason:""
}

},

methods:{

async applyLeave(){

const toast = useToast()

try{

await API.post("/leaves/apply",{
leaveType:this.leaveType,
startDate:this.startDate,
endDate:this.endDate,
reason:this.reason
})

toast.success("Leave applied successfully")

location.reload()

}catch(err){

toast.error("Error applying leave")

}

}

}

}

</script>