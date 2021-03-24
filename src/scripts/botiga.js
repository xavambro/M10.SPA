import {mapGetters} from 'vuex'
import Alimentacio from '../components/Alimentacio'
import Congelats from '../components/Congelats'

export default {
  computed:{
    ...mapGetters(['getCurrent'])
  },
  components:{
    Alimentacio,
    Congelats
  } 

}