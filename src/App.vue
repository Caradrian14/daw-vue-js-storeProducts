<template>
  <appTitle></appTitle>
  <errors v-for="error in errors" :key="error.id" :error="error"></errors>
  <router-view></router-view>
</template>


<script>
  import appTitle from './components/appTitle.vue';
  import errors from "./components/errors.vue";

  import { store } from "./store";
  
  export default {
  components: {
    appTitle,
    errors
  },
  data() {
    return {
      products: store.state.products,
      errors: store.state.errors,
    };
  },
  methods: {},
  mounted(){
    store.loadData()
  }
};
</script>


<style scoped>

</style>
