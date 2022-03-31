<template>
  <div id="app">
    <Navbar/>
    <b-container fluid>
      <router-view />
      <footer-bar />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 4.5rem;
}
</style>
