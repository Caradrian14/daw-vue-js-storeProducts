<template>
<div class="col-sm-6 col-md-4 col-lg-4 hideElement">
				<form id="add-cat" novalidate @submit.prevent="submitAdd">
					<fieldset>
						<legend class="bg-dark text-white text-center">Añadir categoría</legend>
						<div class="form-group">
							<label for="addcat-name">Nombre:</label>
							<input type="text" id="addcat-name" class="form-control" v-model="newCatName" required>
						</div>
						<br>
						<div class="form-group">
							<label for="addcat-desc">Descripción:</label>
							<input type="text" id="addcat-desc" class="form-control" v-model="newCatDesc">
						</div>
						<br>
						<button type="submit" class="btn btn-default btn-dark">Añadir</button>
						<button type="reset" class="btn btn-danger">Reset</button>
					</fieldset>
				</form>
			</div>
</template>

<script>

import { store } from '../store';
export default {
    
    methods:{
       submitAdd(){
		
        //Accediendo a variables
        let name = this.$data.newCatName;
        let description = this.$data.newCatDesc;
    
        store.addCategory(name, description);
		this.$data.newCatName = '';
		this.$data.newCatDesc = '';
       }
    },
    data(){
        return{
            newCatName:'',
            newCatDesc: ''
        }
    }
}

</script>

<style>

</style>