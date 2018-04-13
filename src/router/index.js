import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1/index.vue'
import Page2 from '@/components/page2/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/KPI_phase_through',
      component: Page1
    },
    {
      path: '/KPI_phase_through',
      name: 'KPI_phase_through',
      component: Page1
    },
    {
      path: '/KPI_regional_distribution',
      name: 'KPI_regional_distribution',
      component: Page2
    }
  ]
})
