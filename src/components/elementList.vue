<template>
    <tr class="text-success text-center">
        <td>{{ prod.id}}</td><td>{{prod.name}}</td><td>{{prod.category}}</td><td>{{prod.units}}</td><td>{{prod.price}}</td><td>{{import}}</td>
        <td><button class='btn btn-secondary up'><span class='material-icons' @click="addUnit">arrow_drop_up</span></button>
        <button class='btn btn-secondary down'> <span class='material-icons' @click="quitUnit">arrow_drop_down</span></button> 
        <button class='btn btn-secondary edit'> <span class='material-icons'>edit</span></button>
        <button class='btn btn-secondary delete'> <span class='material-icons' @click="quitProd">delete</span></button></td>
    </tr>
</template>

<script>
import { store } from '../store';
export default {
    props: {
        prod: Object
    },
    computed: {
        import(){
            return this.prod.units * this.prod.price;
        }
    },
    methods:{
        addUnit() {
            var id = this.prod.id;
            var plusUnits = ++this.prod.units;
            store.plusUnitProducts(id, plusUnits);
          },
        quitUnit() {
            var id = this.prod.id;
            var plusUnits = --this.prod.units;
            store.minusUnitProducts(id, plusUnits);
        },
        quitProd(){
            var prod = this.prod;
            store.delProducts(prod);
        }
    }
   }
</script>

<style>

</style>