<template>
<div class=" pl-8">
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-600 dark:border-gray-700">
 <form @submit.prevent="addPerson" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input v-model="personData.name" class="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Surname
      </label>
      <input v-model="personData.surname" class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Weatlh $
      </label>
      <input v-model="personData.wealth" class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="10000$">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs mb-2" for="grid-city">
        Add Person
      </label>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add
</button>
    </div>
    
    
  </div>

</form>
</div> 
</div> 
</template>

<script>
export default {
    data() {
        return {
            personData: {
                name: null,
                surname: null,
                wealth: null
            }
        }
    },
    methods: {
       addPerson(){
         this.$appAxios.post("/api/auth/addperson/",this.personData).then(res=>{
           console.log(res)
         })
       },
   
    },
  }
/*

addPerson(){
            this.$appAxios.post("/api/auth/addperson/", this.personData).then(res=>{
      console.log(res);

*/

</script>



<style>


</style>