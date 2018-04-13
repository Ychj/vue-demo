import Vue from 'vue';
import subNavStore from './store';
import { mapState } from 'vuex';

const index = {
  name:'subNav',
  data() {
    return{}
  },
  created() {
    if(!this.$store.state.subNav) {
      this.$store.registerModule('subNav', subNavStore)
    }
  },
  computed: mapState({
    menuLists: state => state.subNav.menuLists
  }),
  methods: {

  }
}

export default index;
