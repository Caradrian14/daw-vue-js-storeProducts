<template>
   <div class="row">
			<div class="col-sm-6 col-md-4 col-lg-4 hideElement">
				<form id="new-prod" novalidate @submit.prevent="submitAdd" >
					<fieldset>
						<legend class="bg-dark text-white text-center">Producto</legend>
						<!-- Aquí los inputs y botones del form -->
						<div class="form-group">
							<label for="newprod-id">ID:</label>
						<input type="text" id="newprod-id" class="form-control" disabled>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-name">Nombre:</label>
							<input type="text" id="newprod-name" class="form-control" minlength="5" maxlength="50" v-model="newprodName" required>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-cat">Categoría:</label>
							<select class="form-control" id="newprod-cat" v-for="cat in categoryList" required>
								<option value="" ref="newprod-cat" disabled>--- Selecciona categoría ---</option>
                                <!-- Aqui la Lista de Categoria -->
                                <option  value="{{cat.id}}">{{cat.name}}</option>
                            </select>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-units">Unidades.:</label>
							<input type="number" id="newprod-units" v-model="newprodUnits" class="form-control" min="0" max="100">
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-price">Precio/u.:</label>
							<input type="number" id="newprod-price" v-model="newprodPrice" class="form-control" min="0" step=".01" required>
							<span class="error"></span>
						</div>
						<br>
						<button type="submit" class="btn btn-default btn-dark" >Aplicar</button>
						<button type="reset" class="btn btn-danger">Reset</button>
					</fieldset>
				</form>
			</div>
        </div>
</template>

<script>

import { store } from '../store';
export default {
    
    methods:{
       submitAdd(){
		
        //Accediendo a variables
        let name = this.$data.newprodName;
        //Cambiar esta parte
        let cat = 1;
        let units = this.$data.newprodUnits;
        let price = this.$data.newprodPrice;
        store.addProducts(name, cat, units, price);
		this.$data.newprodName = '';
		this.$data.newprodPrice = '';
		this.$data.newprodUnits = '';
       }
    },
    data(){
        return{
            categoryList: store.state.categories,
            newprodPrice:'',
            newprodUnits: '',
            newprodName: '',
        }
    }
}

</script>

<style>

</style>