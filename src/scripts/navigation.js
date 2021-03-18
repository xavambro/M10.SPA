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