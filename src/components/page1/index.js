import Vue from 'vue';
import Page1store from './store';
import { mapState } from 'vuex';
import singleSelect from '../singleSelect/index.vue'

const index = {
  name:'page1',
  data() {
    return{}
  },
  created() {
    if(!this.$store.state.Page1) {
      this.$store.registerModule('Page1', Page1store)
    }
    document.title = this.title;
  },
  computed: mapState({
    title: state => state.Page1.title,
    selectParams: state => state.Page1.selectParams,
    userName: state => state.userName
  }),
  methods: {
    resetData() {
      let refs = this.$refs;
      for(var i in refs) {
        refs[i].selectedVal = "";
        refs[i].params.selectedData = "";
      }
    }
  },
  components: {
    singleSelect
  }
}

export default index;
