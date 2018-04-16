import Vue from 'vue';
import Page1store from './store';
import { mapState } from 'vuex';
import singleSelect from '../singleSelect/index.vue';
const  echarts = require('echarts');

const index = {
  name:'page1',
  data() {
    return{}
  },
  created() {
    if(!this.$store.state.Page1) {
      this.$store.registerModule('Page1', Page1store)
    };
    document.title = this.title;
    if(!echarts) {
      alert('echarts加载失败');
    }else {
      setTimeout(() => {
        this.pieDoughnut = echarts.init(document.getElementById('pie-doughnut-box'));
        this.pieDoughnut.showLoading();
        this.echartsInit();
      })
    }
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
    },
    echartsInit() {
      this.pieDoughnut.hideLoading();
      let option = {
        legend: {
          left:'left',
          orient: 'vertical',
          selectedMode: false
        },
        series: [
          {
            type:'pie',
            radius: ['80%', '85%'],
            color: ['#63c2de','#ccc','red','pink'],
            hoverAnimation:false,
            itemStyle: 'labelTop',
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: [
                  '{style_b|{b}}',
                  '{style_c|{d}%}'
                ].join('\n'),
                color:'#000',
                align :'center',
                fontSize: '16',
                rich: {
                  style_c: {
                    padding:20,
                    fontSize:'20',
                    fontWeight:'bolder'
                  }
                }
              }
            },
            data: [
              {value: 70, name: '新增柜机完成率', title: '新增柜机完成率11111111111'},
              {value: 30, name: '新增柜机未完成率', title: '新增柜机未完成率222222'},
              {value: 50, name: '新增柜机未完成率1', title: '新增柜机未完成率222222'},
              {value: 10, name: '新增柜机未完成率2', title: '新增柜机未完成率222222'},
            ]
          }
        ]
      };
      this.pieDoughnut.setOption(option);
    }
  },
  components: {
    singleSelect
  }
}

export default index;
