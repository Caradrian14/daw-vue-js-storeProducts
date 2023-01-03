<template>
    <tr class="text-success text-center">
        <td>{{ cat.id}}</td><td>{{cat.name}}</td><td>{{cat.description}}</td>
        
       
    </tr>
</template>

<script>
export default {
    props: {
        cat: Object
    }
   }
</script>