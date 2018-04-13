import Vue from 'vue';
import HeadStore from './store';
import { mapState } from 'vuex';

const index = {
  name:'headNav',
  data() {
    return{}
  },
  created() {
    if(!this.$store.state.Head) {
      this.$store.registerModule('Head', HeadStore)
    }
    console.log(this.$store,"==================")
  },
  computed: mapState({
    menuLists: state => state.Head.menuLists
  }),
  methods: {

  }
}

export default index;
