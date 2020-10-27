import { defineConfig } from 'umi';

export default defineConfig({
  base: '/modules/module1',
  outputPath: '../../app/public/module1',
  // 处理css中的图片
  chainWebpack: memo => {
    memo.module.rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 8, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath: `//localhost:7001/public/module1`
          }
        }
      })
      .end()
    memo.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 8, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash:8].[ext]',
            publicPath: `//localhost:7001/public/module1`
          }
        }
      })
      .end()
  }
});
