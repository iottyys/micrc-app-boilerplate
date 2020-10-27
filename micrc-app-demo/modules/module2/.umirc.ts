import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  qiankun: {
    slave: {}
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
