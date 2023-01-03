<template>
    <div class="container">
        <header>
            <h1>Listado de productos</h1>
        </header>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="bg-dark">
                        <tr class="text-white text-center">
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                        </tr>
                    </thead>
                    <tbody id="tableProducts">
                    <!-- AQUI INSERTAMOS -->
                    
                    <elementList v-for="element in listCategories" :key="element" :cat="element" class="text-success"></elementList>
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import elementList from './categoryElement.vue';

export default{
  components: {
    elementList
  },
  data(){
    return{
        listCategories: store.state.categories
    }
  }
}
</script>