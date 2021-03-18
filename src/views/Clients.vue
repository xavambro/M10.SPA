<template>
  <div class="clients">
      <br>
    <h1>Clients</h1>
    <div class="row d-flex flex-column align-items-center">
    <div v-for='item of clients' :key="item.id" class="client m-2 p-2 col-md-3">
        <h3>Client: {{item}}</h3>
        <router-link :to="{name: 'Client', params: {name:item}}">
            <button class="btn btn-info">Pàgina del client</button>
        </router-link>
    </div>
    </div>
  </div>
</template>

<script src='../scripts/clients.js'>

</script>

<style scoped>
.client{
    /* width:20%; */
    border: 1px solid black;
    
}
</style>