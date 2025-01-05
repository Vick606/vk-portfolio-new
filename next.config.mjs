// next.config.mjs
import withCSS from '@zeit/next-css';

const nextConfig = withCSS({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
    };

    return config;
  },
});

export default nextConfig;
