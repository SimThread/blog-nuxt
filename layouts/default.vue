<template>
    <div class="top-box">
        <Navbar/>
        <nuxt/>
        <Toaster/>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Toaster from '@/components/Toaster';
export default {
    components: { Navbar, Toaster }
};
</script>
