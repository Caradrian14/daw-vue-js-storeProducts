import axios from 'axios'

import { reactive } from 'vue';

const url='http://localhost:3000';

export const store={
    debug: true,
    
    state: reactive({
      products: [],
      categories: [],
      errors: []
    }),

    delProducts(prod){
      if(confirm("Quieres borrar el producto " + prod.name +" ?")){
        axios.delete(url+'/products/'+prod.id)
        .then(
            response => {
                var index = this.state.products.findIndex(element => element.id === prod.id)
                this.state.products.splice(index,1);
            }
            )
                
        .catch(response => this.state.errors.push("Error, no s eha podido borrar el mensaje"))
      }
    },

    addProducts(name, cat, units, price) {
      axios.post(url+'/products', {
        name: name, 
        category: cat,
        price: price,
        units: units
        })
        .then(response => this.state.products.push(response.data)
        )
        .catch(response => this.state.errors.push('Error: no se ha añadido el registro. '+response.message))
    },

    addCategory(name, desc){
      axios.post(url+'/categories', {
        name: name, 
        description: desc
        })
        .then(response => this.state.categories.push(response.data)
        )
        .catch(response => this.state.errors.push('Error: no se ha añadido el registro. '+response.message))
    },

    plusUnitProducts(id, unitPlus) {
        axios.patch(url+'/products/'+id, {
            units: unitPlus
          })
          .then(response => (id, unitPlus)=>{
            this.state.products.forEach(product =>{
                if(product.id === id){
                    product.units === unitPlus;
                }
            })
          })
          .catch(response => this.state.errors.push('Error: no se ha modificado el registro. '+response.message))
      },

      minusUnitProducts(id, unitMinus) {
        axios.patch(url+'/products/'+id, {
            units: unitMinus
          })
          .then(response => (id, unitMinus)=>{
            this.state.products.forEach(product =>{
                if(product.id === id){
                    product.units === unitMinus;
                }
            })
          })
          .catch(response => this.state.errors.push('Error: no se ha modificado el registro. '+response.message))
      },

    loadData() {
        axios.get(url+'/products')
            .then(response => response.data.forEach(element => {
            this.state.products.push(element);
            }))
            .catch(response => {
            if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
              this.state.errors.push('Error: el servidor no responde');
                console.log(response);
            } else {
              this.state.errors.push('Error '+response.status+': '+response.message);          
            }
            });
        axios.get(url+'/categories')
            .then(response => response.data.forEach(element => {
            this.state.categories.push(element);
            }))
            .catch(response => {
            if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
              this.state.errors.push('Error: el servidor no responde');
                console.log(response);
            } else {
              this.state.errors.push('Error '+response.status+': '+response.message);          
            }
            });
    },
    delError(errorToDelete){
      this.state.errors.filter( error => error !== errorToDelete);
    },
    getProductById(id) {
      {
        axios.get(url+'/products')
          .then(response => {
            let dato = response.data;
            return dato[id];
          })
          .catch(response => {
            if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
              this.state.errors.push('Error: el servidor no responde');
                console.log(response);
            } else {
              this.state.errors.push('Error '+response.status+': '+response.message);          
            }
            });
        }
    },
    editProduct(product){
      axios.put(url+'/products'+product.id, {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        units: units !== undefined ? units : product.units
      }).then(response => {
        this.state.products.splice(this.state.products.findIndex(productToFind => productToFind.id === product.id), 1, response.data)
      }).catch(error => {
        if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
          this.state.errors.push('Error: el servidor no responde');
            console.log(response);
        } else {
          this.state.errors.push('Error '+response.status+': '+response.message);          
        }
      });
    }
}