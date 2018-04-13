import vue from 'Vue';
export default {
  name:'singleSelect',
  props:['params','callback'],
  data() {
    return{
      showList: false,
      selectedVal:''
    }
  },
  created() {
    //数据回填
   /* if(this.params.selectedData) {
      this.selectedVal = this.params.selectedData[0][this.params.showName] || this.params.selectedData;
    }*/
  },
  methods: {
    showSelectBox() {
      let _this = this;
      let isShow = _this.showList;
      setTimeout(() => {
        this.SelectObserve.observe('hide',() => {
          _this.showList = false;
        });
        _this.showList = !isShow;
      },0)
    },
    selectThis(valObj) {
      this.selectedVal = valObj[this.params.showName] || valObj;
      this.params.selectedData = valObj;
      this.callback && this.callback(valObj);
    },
    clear() {
      this.selectedVal = "";
      this.params.selectedData = "";
      this.callback && this.callback(valObj);
    }
  }
}
