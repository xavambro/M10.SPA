export default {
    name: 'Navigation',
    methods:{
      goTo(section){
        this.$router.push({
          name:'TipusBotiga',
          params:{
            tipus:section
          }
        }).catch(()=>{})
      }
    }
    
  }