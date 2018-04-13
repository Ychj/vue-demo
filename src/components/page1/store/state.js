module.exports = {
  title: '页面一',
  selectParams: [{
    labelName: '文件类型',
    labelClass: 'red',
    showName: 'name',
    selectLists: [{
      name: '文件类型一',
      id: 'type01'
    }, {
      name: '文件类型二',
      id: 'type02'
    }, {
      name: '文件类型三',
      id: 'type01'
    }, {
      name: '文件类型四',
      id: 'type04'
    }],
  },
  {
    labelName: '文件目录',
    showName: 'title',
    selectLists: [{
      title: '文件目录——概述',
      id: 'menu01'
    }, {
      title: '文件目录——总纲',
      id: 'menu02'
    }, {
      title: '文件目录——讲义',
      id: 'menu03'
    }, {
      title: '文件目录——强化',
      id: 'menu04'
    }]
  }]
}
