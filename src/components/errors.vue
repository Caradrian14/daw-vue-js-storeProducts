<template>
    <div id="message" class="alert alert-danger alert-dismissible" role="alert">
        <p>{{ error }}</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()" @click="deleteError"></button>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    props: {
        error: String
    },
    methods:{
        deleteError(){
            store.delError(this.error);
        }
    }
}

</script>
