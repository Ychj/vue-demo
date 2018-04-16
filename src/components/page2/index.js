import Vue from 'vue'
import Vuex from 'vuex'
import subMenu from '../public/subNavigation/index.vue'
import Page2store from './store'
import {mapState} from 'vuex'
const  echarts = require('echarts');

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
    if(!echarts) {
      alert('echarts加载失败');
    }else {
      setTimeout(() => {
        this.barEchart = echarts.init(document.getElementById('echarts-bar-box'));
        this.echartsInit();
      })
    }
  },
  computed: mapState({
    title: state => state.Page2.title,
  }),
  methods: {
    echartsInit() {
      let option = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
      this.barEchart.setOption(option);
    }



  },
  components: {
    subMenu
  }
}
