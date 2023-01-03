<template>
    <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        
            <span class="navbar-brand" href="#">Almacén de Productos ACME</span>
		    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link active">Ver Productos</router-link>
                    <router-link to="/Table-Category" class="nav-link active">Ver Categorías</router-link>
                    <router-link to="/New-Product" class="nav-link active">Añadir producto</router-link>
                    <router-link to="/New-Category" class="nav-link active">Añadir categoría</router-link>
                    <router-link to="/about" class="nav-link active">Sobre nosotros</router-link>
                    
                </div>
            </div>
        </div>
    </nav>
        <!-- Zona para mostrar mensajes al usuario -->
    <div class="row" id="messages">
	
    </div>
</template>