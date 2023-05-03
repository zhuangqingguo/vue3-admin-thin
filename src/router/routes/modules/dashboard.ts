import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: '分析页',
        ignoreKeepAlive: false, // 需要页面缓存
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        ignoreKeepAlive: false, // 需要页面缓存
      },
    },
    {
      path: 'vxeTable',
      name: 'VxeTableDemo',
      component: () => import('/@/views/sys/table/VxeTable.vue'),
      meta: {
        title: 'VxeTable',
      },
    },
  ],
}

export default dashboard
