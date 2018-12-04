import Vue from 'vue';
import Router from 'vue-router';
import blankLayout from 'views/layout/blank-layout';
import defaultLayout from 'views/layout/default-layout';
const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);
// 路由设置
export const constantRouterMap = [
  {
    path: '/test',
    component: blankLayout,
    hidden: true,
    children: [{ path: '/', component: _import('layout/default-layout') }]
  },
  {
    path: '/login',
    component: blankLayout,
    hidden: true,
    children: [{ path: '/', component: _import('login/index') }]
  },
  {
    path: '/mainpageview',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('dashboard/recent-news') }]
  },
  {
    path: '/datacenter',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('data-center/index') }]
  },
  {
    path: '/maintenance',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('maintenance/index') }]
  },
  {
    path: '/managedrug',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('manage-drug-info/index') }]
  },
  {
    path: '/stock',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('stock/index') }]
  },
  {
    path: '/ordermaster',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('ordermaster/index') }]
  },
  {
    path: '/analysis',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('analysis/index') }]
  },
  {
    path: '/dashboardview',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('dashboardview/index') }]
  },
  {
    path: '/sales',
    component: defaultLayout,
    hidden: true,
    children: [{ path: '/', component: _import('sales/index') }]
  }
];
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
