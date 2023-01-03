<template>
   <div class="row">
			<div class="col-sm-6 col-md-4 col-lg-4 hideElement">
				<form id="new-prod" novalidate @submit.prevent="submitAdd" >
					<fieldset>
						<legend class="bg-dark text-white text-center" v-if="id">Editar producto</legend>
						<legend class="bg-dark text-white text-center" v-else>Añadir producto</legend>
						<!-- Aquí los inputs y botones del form -->
						<div class="form-group">
							<label for="newprod-id">ID:</label>
						<input type="text" id="newprod-id" class="form-control" v-model="product.id" disabled>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-name">Nombre:</label>
							<input type="text" id="newprod-name" class="form-control" minlength="5" maxlength="50" v-model="product.name" required>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-cat">Categoría:</label>
							<select class="form-control" id="newprod-cat" v-model="newProdCat" required>
								<option value="" ref="newprod-cat" disabled>--- Selecciona categoría ---</option>
                                <!-- Aqui la Lista de Categoria -->
                                <option v-for="cat in categoryList" :value="cat.id">{{cat.name}}</option>
                            </select>
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-units">Unidades.:</label>
							<input type="number" id="newprod-units" v-model="product.units" class="form-control" min="0" max="100">
							<span class="error"></span>
						</div>
						<div class="form-group">
							<label for="newprod-price">Precio/u.:</label>
							<input type="number" id="newprod-price" v-model="product.price" class="form-control" min="0" step=".01" required>
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
    props: {
        id: String,
    },
	mounted() {
        if (this.$props.id) {
            this.$data.product = store.getProductById(this.id) || {}
        }
    },
    methods:{
       submitAdd(){
		//Accediendo a variables
		if (this.product.name !== "" && this.product.category !== "" && this.product.units !== "" && this.product.price !== "") {
			if(!this.id){
				store.addProducts(this.product.name, this.product.cat, this.product.units, this.product.price);
			}else{
				store.editProduct(this.product);
			}
		}
		this.$router.push('/');
       }
    },
    data(){
        return{
            categoryList: store.state.categories,
            product: {}, 	
        }
    }
}

</script>

<style>

</style>