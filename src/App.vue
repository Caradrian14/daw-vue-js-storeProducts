<template>
  <appTitle></appTitle>

  <errors v-for="error in errors" :key="error.id" :error="error"></errors>
  
  <tableBody></tableBody>
  <productForm></productForm>
</template>


<script>
  import appTitle from './components/appTitle.vue';
  import tableBody from './components/tableBody.vue';
  import productForm from './components/productForm.vue';
  import errors from "./components/errors.vue";
  import { store } from "./store";
  export default {
  components: {
    appTitle,
    tableBody,
    productForm,
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
