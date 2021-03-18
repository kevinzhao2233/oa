import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import lessToJS from 'less-vars-to-js';
import path from 'path';
import fs from 'fs';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/variables.less'), 'utf8'),
);

export default defineConfig({
  server: {
    // 开发服务端口
    port: 8383,
    // 是否开启 https, 但是开启了也没有证书，只在有些功能必须要 https 协议时使用即可
    https: false,
  },
  resolve: {
    // 别名映射，2.0 版本不再需要以 / 结尾了
    // 这里设置了映射，记得在 tsconfig.json 中也配置好，否则编辑器会报错（但是不影响编译）
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@comps': path.resolve(__dirname, './src/components'),
      '/@assets': path.resolve(__dirname, './src/assets'),
      '/@store': path.resolve(__dirname, './src/store'),
      '/@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [
    reactRefresh(),
    // 按需加载 antd 样式，比如只是用 Button 组件，则只加载 Button 相关样式，style 方法里 name 就是组件名
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
      scss: {
        additionalData: '@import "./src/styles/variables.scss";',
      },
    },
  },
});
