import {mapMutations} from 'vuex'
export default {
    name: 'Navigation',
    methods:{
      ...mapMutations(['setCurrent'])
    }
  }