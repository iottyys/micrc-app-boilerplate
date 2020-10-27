import { defineConfig } from 'umi';

export default defineConfig({
  // 保持和产品环境处理方式一致，但仅用于本地umi dev
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
            publicPath: `//localhost:${process.env.PORT}`
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
            publicPath: `//localhost:${process.env.PORT}`
          }
        }
      })
      .end()
  }
});
