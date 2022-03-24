<template>
  <v-app id="base">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import 'animate.css'

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>

#base {
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background: transparent;
}


</style>

