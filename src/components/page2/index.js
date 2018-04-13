import Vue from 'vue'
import Vuex from 'vuex'
import subMenu from '../public/subNavigation/index.vue'
import Page2store from './store'
import {mapState} from 'vuex'

export default {
  name:'Page2',
  data() {
    return{

    }
  },
  created() {
    if(!this.$store.state.Page2) {
      this.$store.registerModule('Page2',Page2store)
    }
    document.title = this.title;
  },
  computed: mapState({
    title: state => state.Page2.title,
  }),
  methods: {

  },
  components: {
    subMenu
  }
}
