<template>
    <div>
        <br>
        <h2>{{$route.params.name}}</h2>
        <button class="btn btn-primary" @click='previous'>Anterior</button>
    </div>
</template>

<script>
export default {
    name:'Client',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }
}
</script>