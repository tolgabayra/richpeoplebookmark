<template>
  
 <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Surname
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wealth
              </th>
              
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="personlist in personList" :key="personlist.id">
              <td class="px-6 py-4 whitespace-nowrap">
               {{personlist.name}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">
                  {{personlist.surname}}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{personlist.wealth}}$
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="" class="text-indigo-600 hover:text-indigo-900">
                  <button @click="deletePerson" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </a>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>

</template>

<script>
export default {
  data() {
    return {
      personList : [],
    }
  },
  created() {
    this.$appAxios.get("/api/persons/").then(person_list => {
      console.log(person_list)
      this.personList = person_list.data || []

    })
  },
  methods: {
    deletePerson(){
      this.$appAxios.delete(`/api/person/${this.personlist._id}`).then(r=>{
        console.log(r);
      })
    }
  },
 
}
</script>

<style>

</style>