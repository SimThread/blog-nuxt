<template>
  <div class="top-box">
    <Navbar/>
    <router-view/>
    <Toaster/>
  </div>
</template>

<script>
import store from 'store'
import Navbar from './Navbar'
import Toaster from './Toaster'

export default {
  store,
  components: { Navbar, Toaster }
}
</script>
