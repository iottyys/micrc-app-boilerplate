import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/t1',
      microApp: 'module0',
      microAppProps: {
        autoSetLoading: true
      }
    },
    {
      path: '/t2',
      component: '@/layouts/index',
      routes: [
        { path: '/t2/test', microApp: 'module1', microAppProps: { autoSetLoading: true } }
      ]
    },
    {
      path: '/t3',
      component: '@/pages/index'
    },
  ],
});
