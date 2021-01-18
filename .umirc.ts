import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          path: '/',
          redirect: '/demo/list',
        },
        {
          path: '/demo',
          routes: [
            {
              path: '/',
              redirect: '/demo/list', // 这里期望是在‘/demo’时重定向到'/demo/list'。（其中在antd-pro V4中也都是这样的写法，所以我也才有个这样的期望。事实上，在这个项目中和在V4中，都没有达到期望）
            },
            {
              path: '/demo/list',
              component: '@/pages/demo/index',
            },
            {
              path: '/demo/detail',
              component: '@/pages/demo/detail/index',
            },
          ],
        },
      ],
    },
  ],
});
