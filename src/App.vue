<template>
  <div class="app">
    <navbar></navbar>
    <router-view style="padding: 30px">

    </router-view>
  </div>
</template>

<script>

import Navbar from '@/components/UI/Navbar'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {

}
</style>