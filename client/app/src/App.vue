<script setup>
import Navigation from "./components/Navigation.vue"

</script>

<template>
<div class="bg-green-600 container mx-auto rounded-3xl">
    <h2 class="text-white mt-12 text-center p-2 text-4xl">Rich People</h2>
    <div class="flex flex-row flex-wrap py-4">
        <aside class="bg-stone-800 w-full sm:w-1/3 md:w-1/4 px-8">
            <div class="p-4 w-full">
                <!-- navigation -->
                <Navigation />
            </div>
        </aside>

        <main role="main" class="bg-gray-200  w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        
                            <router-view></router-view>

        </main>
    </div>
</div>
<footer class="mt-auto">
    ...
</footer>
 

</template>

<style>


</style>
