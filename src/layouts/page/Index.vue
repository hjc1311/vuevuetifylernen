<template>
  <v-app>
    <page-view />
    <page-bar />
  </v-app>
</template>

<script>
import PageView from './View'
import PageBar from './AppBar'
export default{
  name: 'PageLayout',
  components: {
    PageView,
    PageBar
  }
}
</script>
<style lang="">
</style>
