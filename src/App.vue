<template>
  <div id="app">
        <router-view></router-view>
        <FooterView></FooterView>

  </div>
</template>

<script>
import FooterView from './components/FooterView'
export default {
  components: {
      FooterView
  }
}
</script>

<style>

</style>
