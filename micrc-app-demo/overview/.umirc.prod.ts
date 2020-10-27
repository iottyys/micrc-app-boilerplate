import { defineConfig } from 'umi';

export default defineConfig({
  base: '/overview', // 必须和服务器路径一样，否则传递给子应用的base是错误的
  outputPath: '../app/public/overview',
  qiankun: {
    master: {
      apps: [
        {
          name: 'module0',
          entry: '//localhost:7001/modules/module1'
        },
        {
          name: 'module1',
          entry: '//localhost:7001/modules/module1'
        },
        {
          name: 'module2',
          entry: '//localhost:7001/modules/module2'
        }
      ]
    }
  },
});
