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
                            <th>Categoría</th>
                            <th>Uds.</th>
                            <th>Precio/u</th>
                            <th>Importe</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="tableProducts">
                    <!-- AQUI INSERTAMOS -->
                    
                    <elementList v-for="element in listProducts" :key="element" :prod="element" class="text-success"></elementList>
                    
                    </tbody>
                    <tfoot>
                        <th colspan="5">Importe total del almacén:</th>
                        <th id="totalImport"></th>
                        <th></th>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import elementList from './elementList.vue';

export default{
  components: {
    elementList
  },
  data(){
    return{
        listProducts: store.state.products
    }
  }
}
</script>