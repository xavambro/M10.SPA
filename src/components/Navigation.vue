<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/clients">Clients</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/proveidors">Proveïdors</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/magatzem">Magatzem</router-link>
      </li>
      <li class="nav-item dropdown">
         <div class="btn-group">
            <router-link class="nav-link"  to="/botiga">Botiga</router-link>
            <button class="btn dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <button class="dropdown-item" @click="goTo('Alimentacio')">Alimentació</button>
                <button class="dropdown-item" @click="goTo('Congelats')">Congelats</button>
            </ul>   
        </div>
      </li>
      <!-- <li class="nav-item dropdown">
        <router-link class="nav-link dropdown-toggle"  to="/botiga" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Botiga
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/botiga/alimentacio">Alimentació</router-link>
            <router-link class="dropdown-item" to="/botiga/congelats">Congelats</router-link> 
        </div>
      </li> -->
    </ul>
  </div>
</nav>
    
</template>

<script>
export default {
  name: 'Navigation',
  methods:{
    goTo(section){
      this.$router.push({
        name:section
      }).catch(()=>{})
    }
  }
  
}


</script>
